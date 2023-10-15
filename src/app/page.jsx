"use client";
import { useChat } from "ai/react";
import { useState } from "react";
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

const API = "https://spacex-production.up.railway.app/v1/graphql";

export default function Home({
  title = (
    <>
      Generate data <br /> from simple text prompts
    </>
  ),
}) {
  const [endpoint, setEndpoint] = useState(API);
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({
      body: {
        endpoint,
      },
    });

  const lastMessage = messages[messages.length - 1];

  return (
    <>
      <Header />
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
            setValue={setEndpoint}
            placeholder="Endpoint URL"
            suffix={<AccessIcon />}
            prefix={<LinkIcon />}
          />
          <Input
            value={input}
            setValue={handleInputChange}
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
        </form>
        <Result
          message={lastMessage?.content}
          isReady={lastMessage?.content && !isLoading}
        />
      </section>
    </>
  );
};