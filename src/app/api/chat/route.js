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
        role: "user",
        content: `Please consider the following GraphQL schema represented by ${schema}, and let's transform the text ${JSON.stringify(
          lastMessage?.content
        )} into a GraphQL query that corresponds to this schema and return only the query in this format query ExampleQuery { rockets { name } } without explanation, if you didint make just return Please try different prompt`,
      },
    ],
  });

  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}
