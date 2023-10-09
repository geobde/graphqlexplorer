import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';

const MODEL = "gpt-3.5-turbo";
const INTROSPECTION_QUERY = `
  query targetInfo {
  target(ensemblId: "ENSG00000169083") {
    id
    approvedSymbol
    biotype
    geneticConstraint{
      constraintType
      exp
      obs
      score
      oe
      oeLower
      oeUpper
    }
    tractability{
      label
      modality
      value
    }
  }
}`
;


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});


export const runtime = 'edge';

export async function POST(req) {
  const { endpoint, messages } = await req.json();


  const data = await fetch(
    endpoint,
    {
      method: "POST",
      body: JSON.stringify({
        query: INTROSPECTION_QUERY,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((res) => res.json());

  console.log('data',data)


  const response = await openai.chat.completions.create({
    model: MODEL,
    stream: true,
    messages:data
  });
  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}

