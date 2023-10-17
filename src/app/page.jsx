"use client";
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
import { useUi } from "../hooks";
import { introspectionQuery } from "../queries";
import { useCallback } from "react";

export default function Home() {
  const [endpoint, setEndpoint] = useUi(null, "endpoint", true);
  const [schema, setSchema] = useUi(null, "schema", true);

  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({
      body: {
        schema,
      },
    });

  const handleInputBlur = useCallback(async () => {
    if (!endpoint) return null;

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
  }, [endpoint, setSchema]);

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
          <h2
            style={{ lineHeight: "55px" }}
            className="mb-8 text-center font-bold tracking-normal bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 text-5xl"
          >
            Generate data <br />
            from simple{" "}
            <span className="relative whitespace-nowrap text-[#1181de]">
              <svg
                aria-hidden="true"
                viewBox="0 0 418 42"
                className="absolute top-2/3 left-0 h-[0.58em] w-full fill-[#1181de]"
                preserveAspectRatio="none"
              >
                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
              </svg>
              <span className="relative">text prompts</span>
            </span>
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
