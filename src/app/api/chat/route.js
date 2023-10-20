import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

const MODEL = "gpt-3.5-turbo";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const runtime = "edge";

export async function POST(req) {
  const { schema, messages } = await req.json();
  const lastMessage = messages[messages.length - 1];

  const response = await openai.chat.completions.create({
    model: MODEL,
    stream: true,
    messages: [
      {
        role: "system",
        content: "You are a GraphQL query generator.",
      },
      {
        role: "user",
        content: `Given the following GraphQL schema:
  ${schema}
  Please transform the following text into a GraphQL query:
  "${lastMessage?.content}"`,
      },
      {
        role: "assistant",
        content: "Generate the GraphQL query.",
      },
    ],
  });

  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}
