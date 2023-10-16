"use client";
import { useChat } from "ai/react";
import { Input } from "../components/Input";
import { Header } from "../components/Header";
import { Result } from "../components/Result";
import {
  LinkIcon,
  AccessIcon,
  MagicIcon,
  LoadingIcon,
  SendIcon,
} from "../components/Icons";
import { useUi } from "../hooks";
import { introspectionQuery } from "../queries";
import { useCallback } from "react";

export default function Home({
  title = (
    <>
      Generate data <br /> from simple text prompts
    </>
  ),
}) {
  const [endpoint, setEndpoint] = useUi(null, "endpoint", true);
  const [schema, setSchema] = useUi(null, "schema", true);

  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({
      body: {
        schema,
      },
    });

  const handleInputBlur = useCallback(async () => {
    if (schema || !endpoint) return null;

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
      <Header />

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
            <div
              style={{
                width: "100%",
                position: "absolute",
                bottom: 20,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Input
                value={input}
                onChange={handleInputChange}
                placeholder="Ask a question"
                suffix={
                  <button
                    className="invert-theme bg-gs-gray-400 text-sm gap-1.5 justify-start text-gs-background-1000 rounded-full flex items-center h-8 origin-right overflow-hidden ease-in font-medium px-[9px] disabled:opacity-50 hover-bg-gs-gray-600"
                    style={{
                      background: "rgb(209, 213, 219)",
                      width: "32px",
                      border: "none",
                      color: "#a1a1aa",
                    }}
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
          <h2 className="mb-20 text-3xl text-center font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 p-5">
            {title}
          </h2>
          <form
            className="w-full flex flex-col items-center justify-center p-5"
            onSubmit={handleSubmit}
          >
            <Input
              value={endpoint}
              onChange={(e) => setEndpoint(e.target.value)}
              onBlur={handleInputBlur}
              placeholder="Endpoint URL"
              suffix={<AccessIcon />}
              prefix={<LinkIcon />}
            />
            <Input
              value={input}
              onChange={handleInputChange}
              placeholder="Ask a question"
              suffix={
                <button
                  className="invert-theme bg-gs-gray-400 text-sm gap-1.5 justify-start text-gs-background-1000 rounded-full flex items-center h-8 origin-right overflow-hidden ease-in font-medium px-[9px] disabled:opacity-50 hover-bg-gs-gray-600"
                  style={{
                    background: "rgb(209, 213, 219)",
                    width: "32px",
                    border: "none",
                    color: "#a1a1aa",
                  }}
                  type="submit"
                >
                  {isLoading ? (
                    <LoadingIcon style={{ color: "black" }} />
                  ) : (
                    <SendIcon />
                  )}
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
