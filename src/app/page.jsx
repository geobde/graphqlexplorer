"use client";
import { useChat } from "ai/react";
import { useState } from "react";
import { Input } from "./components/Input";
import { Header } from "./components/Header";
import { Result } from "./components/Result";

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
            suffix={
              <button
              type="button"
              className="invert-theme bg-gs-gray-400 text-sm gap-1.5 justify-start text-gs-background-1000 rounded-full flex items-center h-8 origin-right overflow-hidden ease-in font-medium px-[9px] disabled:opacity-50 hover:bg-gs-gray-600"
              data-state="closed"
              style={{ background: "rgb(209, 213, 219)", width: "32px" }}
            >
              <svg
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 shrink-0"
              >
                <path
                  d="M11.998 0C13.9314 0 15.498 1.56667 15.498 3.5V6C15.498 6.13261 15.4454 6.25978 15.3516 6.35355C15.2578 6.44732 15.1307 6.5 14.998 6.5C14.8654 6.5 14.7383 6.44732 14.6445 6.35355C14.5507 6.25978 14.498 6.13261 14.498 6V3.5C14.498 2.83696 14.2347 2.20107 13.7658 1.73223C13.297 1.26339 12.6611 1 11.998 1C11.335 1 10.6991 1.26339 10.2303 1.73223C9.76144 2.20107 9.49805 2.83696 9.49805 3.5V5.5C10.0285 5.5 10.5372 5.71071 10.9123 6.08579C11.2873 6.46086 11.498 6.96957 11.498 7.5V12C11.498 12.5304 11.2873 13.0391 10.9123 13.4142C10.5372 13.7893 10.0285 14 9.49805 14H2.49805C1.96761 14 1.45891 13.7893 1.08383 13.4142C0.708761 13.0391 0.498047 12.5304 0.498047 12V7.5C0.498047 6.96957 0.708761 6.46086 1.08383 6.08579C1.45891 5.71071 1.96761 5.5 2.49805 5.5H8.49805V3.5C8.49805 1.56667 10.0647 0 11.998 0Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
            }
            prefix={
              <svg
                style={{
                  marginLeft: 6,
                  marginRight: 2,
                  width: 17,
                  fill: "rgb(209, 213, 219)",
                }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
              >
                <path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1-1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l-1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z" />
              </svg>
            }
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
                {isLoading ? (
                  <svg
                    style={{ color: "black" }}
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="animate-spin"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeDasharray="40 60"
                    />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M49.9 27.8C15.1 12.7-19.2 50.1-1.2 83.5L68.1 212.2c4.4 8.3 12.6 13.8 21.9 15c0 0 0 0 0 0l176 22c3.4 .4 6 3.3 6 6.7s-2.6 6.3-6 6.7l-176 22s0 0 0 0c-9.3 1.2-17.5 6.8-21.9 15L-1.2 428.5c-18 33.4 16.3 70.8 51.1 55.7L491.8 292.7c32.1-13.9 32.1-59.5 0-73.4L49.9 27.8z" />
                  </svg>
                )}
              </button>
            }
            prefix={
              <svg
                style={{
                  marginLeft: 6,
                  marginRight: 2,
                  width: 17,
                  color: "rgb(209, 213, 219)",
                }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="none"
                className="icon-sm transition-colors group-hover/button:text-brand-purple"
                width="16"
                height="16"
              >
                <path
                  d="M12.784 1.442a.8.8 0 0 0-1.569 0l-.191.953a.8.8 0 0 1-.628.628l-.953.19a.8.8 0 0 0 0 1.57l.953.19a.8.8 0 0 1 .628.629l.19.953a.8.8 0 0 0 1.57 0l.19-.953a.8.8 0 0 1 .629-.628l.953-.19a.8.8 0 0 0 0-1.57l-.953-.19a.8.8 0 0 1-.628-.629l-.19-.953h-.002ZM5.559 4.546a.8.8 0 0 0-1.519 0l-.546 1.64a.8.8 0 0 1-.507.507l-1.64.546a.8.8 0 0 0 0 1.519l1.64.547a.8.8 0 0 1 .507.505l.546 1.641a.8.8 0 0 0 1.519 0l.546-1.64a.8.8 0 0 1 .506-.507l1.641-.546a.8.8 0 0 0 0-1.519l-1.64-.546a.8.8 0 0 1-.507-.506l-.146-.441Z"
                  fill="currentColor"
                ></path>
              </svg>
            }
          />
        </form>
        <Result
          message={lastMessage?.content}
          isReady={lastMessage?.content && !isLoading}
        />
      </section>
    </>
  );
}
