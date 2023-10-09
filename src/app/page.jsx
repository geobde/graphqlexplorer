'use client'
import { useChat } from 'ai/react';
import Image from 'next/image';

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat();
  const lastMessage = messages[messages.length - 1];
  
  return (
    <>
      <section className="w-full h-screen flex flex-col justify-center items-center bg-gradient-to-br from-black to-black via-zinc-900 overflow-hidden">
        <header style={{width: "88%",position: "absolute",top: "18px", color:"white"}} className="sticky top-0 border-b border-transparent backdrop-blur-sm transition duration-200 ease-in-out animate-header-slide-down-fade"
          >
            <div>
              <div className="mx-auto hidden h-[58px] w-full items-center justify-between transition duration-500 ease-in-out md:flex">
                <div className="flex lg:w-[225px]">
                  <span
                    data-state="closed"
                    className=""
                  >
                    <a
                      className="outline-none transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-7 py-1"
                      aria-label="Resend"
                      href="/home"
                    >
                    <Image  width={150} height={150} alt="logo" src="/logo.png" />
                    </a>
                  </span>
                </div>
                <div className="flex gap-4">
                  <a
                    className="outline-none transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-7 text-sm h-10 pl-4 pr-4 gap-0 font-semibold bg-slate-1 border-slate-1 text-slate-11 hover:bg-slate-5 hover:text-slate-12 focus-visible:ring-4 focus-visible:ring-slate-7 focus-visible:outline-none focus-visible:bg-slate-6 disabled:hover:bg-slate-1 inline-flex items-center justify-center select-none rounded-full disabled:cursor-not-allowed disabled:opacity-70 transition ease-in-out duration-200 hidden lg:flex"
                    data-state="closed"
                    href="/login"
                  >
                    Sign in
                  </a>
                  <a
                    className="outline-none transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-7 text-sm h-10 pl-4 pr-2 gap-0 font-semibold bg-white text-black hover:bg-white/90 focus-visible:ring-4 focus-visible:ring-white/30 focus-visible:outline-none focus-visible:bg-white/90 disabled:hover:bg-white inline-flex items-center border justify-center select-none rounded-full disabled:cursor-not-allowed disabled:opacity-70 transition ease-in-out duration-200"
                    data-state="closed"
                    href="/signup"
                  >
                    Sing up
                    <span className="text-[#70757E]">
                      <svg
                        fill="none"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.75 8.75L14.25 12L10.75 15.25"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                        ></path>
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
        </header>
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 items-center">
            <div className="flex flex-col justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="mb-5 text-4xl font-bold tracking-tighter sm:text-4xl xl:text-4xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                  Generate GraphQL with AI in seconds!
                </h1>
                <p className="text-1xl font-normal tracking-tighter sm:text-1xl xl:text-1xl/none bg-clip-text text-gray-300">
                Generate GraphQL queries and schemas effortlessly <br /> with the power of AI.
                </p>
                <form onSubmit={handleSubmit} class="w-full h-full">
                <div class="flexpy-[4vh] my-12 justify-center items-center">
                <div class="flex  flex-col w-full justify-center items-center align-center">

                <div class="flex items-center justify-center w-full max-w-lg gap-2 px-2 shadow-lg min-h-12 bg-zinc-900 rounded-3xl shadow-black/40 z-10">
                <div class="flex items-center self-end flex-1 min-w-0">
                    <div class="relative w-full flex items-center transition-all duration-300 min-h-full h-fit" style={{height: 41}}>
                    <div class="relative flex flex-1 min-w-0 self-start">
                        <input 
                          type="text"
                          value={input}
                          onChange={handleInputChange}
                          rows="1" 
                          class="flex-[1_0_50%] min-w-[50%] disabled:opacity-80 text-white bg-transparent border-0 shadow-none resize-none outline-none ring-0 disabled:bg-transparent selection:bg-teal-300 selection:text-black placeholder:text-zinc-400 [scroll-padding-block:0.75rem] pl-3 py-3 sm:min-h-[15px] sm:leading-6 text-base md:text-sm" 
                          placeholder="Send a message" 
                          style={{height: "41px !important"}} 
                        />
                    </div>
                    </div>
                </div>
                <button
                style={{color:"#a1a1aa"}}
                type="submit"
              >
                {isLoading ? (
                  <svg
                   style={{ marginLeft: "-25px" }}
                    width="15"
                    height="15"
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
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M10.75 8.75L14.25 12L10.75 15.25"
                    />
                  </svg>
                )}
              </button>
                </div>
                
              </div>
             </div>
        </form>
         </div>
        </div>
       {!isLoading && <span style={{position:"absolute", bottom: "132px",left: 0,right: 0, textAlign:"center", marginTop:20, color:"white"}}>{lastMessage?.content}</span>}
      </div>
     </div>
  </section>
  </>
  );
}