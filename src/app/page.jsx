'use client'
import { useChat } from 'ai/react';
import Image from 'next/image';
import { useState } from "react";

export default function Home() {
  const [endpoint, setEndpoint] = useState('');
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    body: {
      endpoint
    }});
  const lastMessage = messages[messages.length - 1];
  
  return (
    <>
      <section className="w-full h-screen flex flex-col justify-center items-center bg-gradient-to-br from-black to-black via-zinc-900">
        <header style={{width: "88%",position: "absolute",top: "18px", color:"white"}} className="sticky top-0 border-b border-transparent transition duration-200 ease-in-out"
          >
          <div className="mx-auto w-full items-center justify-between transition duration-500 ease-in-out flex">
                
              <span style={{fontSize: 19}}>GraphQL on steroids</span>
           
              <a
                style={{marginTop:10}}
                className="outline-none transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-7 text-sm h-10 pl-4 pr-2 gap-0 font-semibold bg-white text-black hover:bg-white/90 focus-visible:ring-4 focus-visible:ring-white/30 focus-visible:outline-none focus-visible:bg-white/90 disabled:hover:bg-white inline-flex items-center border justify-center select-none rounded-full disabled:cursor-not-allowed disabled:opacity-70 transition ease-in-out duration-200"
                href="/https://github.com/geobde/graphqli"
              >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
                <span style={{marginLeft:10}}>Star on Github</span>
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
        </header>
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 items-center">
            <div className="flex flex-col justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 style={{lineHeight:"47px"}} className="mb-5 text-4xl font-bold tracking-tighter sm:text-4xl xl:text-4xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                  Find data by asking questions <br /> in natural language.
                </h1>
                <form onSubmit={handleSubmit} className="w-full h-full">
                <div className="flexpy-[4vh] my-12 justify-center items-center">
                <div className="flex  flex-col w-full justify-center items-center align-start">

                <div className="flex items-center justify-center w-full max-w-lg gap-2 px-2 divide-x divide-zinc-600 shadow-lg min-h-12 bg-zinc-900 rounded-3xl shadow-black/40 z-10">
                <div class="flex items-center justify-center rounded-l-full"><svg style={{width:25,color:"rgb(209, 213, 219)"}} viewBox="0 0 24 24" className="h-4 w-4 space-kit-1a134qk"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"><path d="M9.364 18.5l-.932.932a4.5 4.5 0 0 1-6.364-6.364l4.773-4.774a4.5 4.5 0 0 1 6.825 5.825"></path><path d="M14.818 5.567l.75-.75a4.5 4.5 0 0 1 6.364 6.364h0l-4.773 4.773a4.5 4.5 0 0 1-6.824-5.826"></path></g></svg></div>
                <div className="flex items-center self-end flex-1 min-w-0">
                    <div className="relative w-full flex items-center transition-all duration-300 min-h-full h-fit" style={{height: 41}}>
                    <div className="relative flex flex-1 min-w-0 self-start">
                        <input 
                          value={endpoint}
                          onChange={(e) => setEndpoint(e.target.value)}
                          type="text"
                          className="flex-[1_0_50%] min-w-[50%] disabled:opacity-80 text-white bg-transparent border-0 shadow-none resize-none outline-none ring-0 disabled:bg-transparent selection:bg-teal-300 selection:text-black placeholder:text-zinc-400 [scroll-padding-block:0.75rem] pl-3 py-3 sm:min-h-[15px] sm:leading-6 text-base md:text-sm" 
                          placeholder="What’s your GraphQL API Endpoint?" 
                          style={{height: "41px !important"}} 
                        />
                    </div>
                    </div>
                </div>
                {/\/graphql$/.test(endpoint) &&
                  <button
                  style={{border:"none", color:"#a1a1aa"}}
                  type="submit"
                >
                  <svg style={{marginRight: 10 }}width="15" height="15" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.625 1.85547L22.7285 2.75195L9.36035 16.0516L8.46914 16.9428L7.57793 16.0516L0.896484 9.40176L0 8.51055L1.7877 6.71758L2.68418 7.60879L8.46914 13.3674L20.9408 0.953711L21.8373 0.0625L23.625 1.85547Z" fill="green"/>
                  </svg>
                </button>}
                </div>

                <div className="mt-5 flex items-center justify-center w-full max-w-lg gap-2 px-2  divide-x divide-zinc-600 shadow-lg min-h-12 bg-zinc-900 rounded-3xl shadow-black/40 z-10">
                <div class="flex items-center justify-center rounded-l-full"><Image class="relative flex rounded-full shrink-0" width={25} height={25} alt="user" src="/user.png" /></div>
                <div className="flex items-center self-end flex-1 min-w-0">
                    <div className="relative w-full flex items-center transition-all duration-300 min-h-full h-fit" style={{height: 41}}>
                    <div className="relative flex flex-1 min-w-0 self-start">
                        <input 
                          disabled={!/\/graphql$/.test(endpoint)}
                          type="text"
                          value={input}
                          onChange={handleInputChange}
                          className="flex-[1_0_50%] min-w-[50%] disabled:opacity-80 text-white bg-transparent border-0 shadow-none resize-none outline-none ring-0 disabled:bg-transparent selection:bg-teal-300 selection:text-black placeholder:text-zinc-400 [scroll-padding-block:0.75rem] pl-3 py-3 sm:min-h-[15px] sm:leading-6 text-base md:text-sm" 
                          placeholder="Ask a question" 
                          style={{height: "41px !important"}} 
                        />
                    </div>
                    </div>
                </div>
                <button
                style={{border:"none", color:"#a1a1aa"}}
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
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