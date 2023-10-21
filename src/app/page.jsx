"use client";
import { useState, useCallback } from "react";
import { useChat } from "ai/react";
import { Input } from "../components/Input";
import { Result } from "../components/Result";
import {
  LinkIcon,
  AccessIcon,
  MagicIcon,
  LoadingIcon,
  SendIcon,
} from "../components/Icons";
import { introspectionQuery } from "../queries";

export default function Home() {
  const [endpoint, setEndpoint] = useState(null);
  const [schema, setSchema] = useState(null);

  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({
      body: {
        schema,
      },
    });

  const handleInputBlur = useCallback(async () => {
    if (schema !== null) return null;

    try {
      const currentSchema = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: introspectionQuery,
      });

      if (!currentSchema.ok) {
        throw new Error(`Failed to fetch schema: ${currentSchema.status}`);
      }

      const result = await currentSchema.json();
      setSchema(JSON.stringify(result));
    } catch (error) {
      console.error("An error occurred while fetching the schema:", error);
    }
  }, [schema, endpoint, setSchema]);

  const lastMessage = messages[messages.length - 1];

  return (
    <>
      {lastMessage?.content ? (
        <section className="flex flex-col items-center  h-screen bg-gradient-to-br from-black to-black via-zinc-900">
          {isLoading ? (
            <LoadingIcon
              style={{
                position: "absolute",
                top: "30%",
                color: "white",
                width: "60px",
                height: "60px",
              }}
            />
          ) : (
            <Result
              message={lastMessage?.content}
              isReady={lastMessage?.content && !isLoading}
            />
          )}
          <form
            className="w-full flex flex-col items-center justify-center p-5"
            onSubmit={handleSubmit}
          >
            <div class="w-full absolute bottom-20 flex justify-center">
              <Input
                value={input}
                onChange={handleInputChange}
                placeholder="Ask a question"
                suffix={
                  <button
                    className="bg-gray-300 w-8 h-8 border-none text-gray-500 invert-theme bg-gs-gray-400 text-sm gap-1.5 justify-start text-gs-background-1000 rounded-full flex items-center h-8 origin-right overflow-hidden ease-in font-medium px-[9px] disabled:opacity-50 hover-bg-gs-gray-600"
                    type="submit"
                  >
                    {isLoading ? <LoadingIcon /> : <SendIcon />}
                  </button>
                }
                prefix={<MagicIcon />}
              />
            </div>
          </form>
        </section>
      ) : (
        <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-black to-black via-zinc-900">
          <span class="text-white text-2xl font-semibold absolute top-10 left-10">
            GraphQL Explorer
          </span>
          <a
            class="absolute top-10 right-10 flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-600 shadow-md transition-colors hover:bg-gray-100 mb-5"
            href="https://github.com/geobde/graphqlexplorer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
            </svg>
            <p>Star on GitHub</p>
          </a>
          <h2 className="line-height-14 mb-4 text-center font-bold tracking-normal bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 text-4xl">
            Generate queries <br />
            from simple text prompts
          </h2>
          <form
            className="w-full flex flex-col items-center justify-center p-5"
            onSubmit={handleSubmit}
          >
            <Input
              value={endpoint}
              onChange={(e) => setEndpoint(e.target.value)}
              onBlur={handleInputBlur}
              placeholder="GraphQL endpoint"
              suffix={<AccessIcon />}
              prefix={<LinkIcon />}
            />
            <Input
              value={input}
              onChange={handleInputChange}
              placeholder="Ask a question"
              suffix={
                <button
                  className="bg-gray-300 w-8 h-8 border-none text-gray-500 invert-theme bg-gs-gray-400 text-sm gap-1.5 justify-start text-gs-background-1000 rounded-full flex items-center h-8 origin-right overflow-hidden ease-in font-medium px-[9px] disabled:opacity-50 hover-bg-gs-gray-600"
                  type="submit"
                >
                  {isLoading ? <LoadingIcon /> : <SendIcon />}
                </button>
              }
              prefix={<MagicIcon />}
            />
          </form>
        </section>
      )}
    </>
  );
}
