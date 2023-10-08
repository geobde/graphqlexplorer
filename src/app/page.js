'use client'

import Image from "next/image";
import graphql from "./graphql.png"
import { useCallback } from "react";
import parser from "./boolean";

export default function Home() {

  const onSubmit = useCallback((event) => {
    event.preventDefault();
    const parsedQuery = parser.parse(`"foo" and "bar"`)
  },[]);

  return (
    <>
      <section className="w-full h-screen flex flex-col justify-center items-center bg-gradient-to-br from-black to-black via-zinc-900 overflow-hidden">
       <header className="pt-8 pb-0 pl-16 pr-16 flex justify-between items-center fixed w-full top-0">
          <div className="flex items-center">
            <h1 className="text-white text-2xl font-semibold">LexiQL</h1>
          </div>
          <div className="space-x-8">
            <a href="#" className="text-sm text-white hover:underline">Login</a>
            <a class="outline-none transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-7 text-sm h-10 pl-4 pr-2 gap-0 font-semibold bg-white text-black hover:bg-white/90 focus-visible:ring-4 focus-visible:ring-white/30 focus-visible:outline-none focus-visible:bg-white/90 disabled:hover:bg-white inline-flex items-center border justify-center select-none rounded-full disabled:cursor-not-allowed disabled:opacity-70 transition ease-in-out duration-200" data-state="closed" href="/signup">Signup<span class="text-[#70757E]"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.75 8.75L14.25 12L10.75 15.25"></path></svg></span></a>
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
                <div class="flex py-[7vh] my-12 justify-center items-center">
                <div class="absolute flex w-full justify-center px-6">
                <div class="relative flex items-center justify-center w-full max-w-lg gap-2 px-2 divide-x shadow-lg divide-zinc-600 min-h-12 bg-zinc-900 rounded-3xl shadow-black/40 z-10">
                <div class="flex items-center justify-center rounded-l-full">
                  <Image alt="Avatar" width="20" height="20" class="relative flex rounded-full shrink-0" src={graphql} />
                </div>
                <div class="flex items-center self-end flex-1 min-w-0">
                  <form onSubmit={onSubmit} class="w-full h-full">
                    <div class="relative w-full flex items-center transition-all duration-300 min-h-full h-fit" style={{height: 41}}>
                      <div class="relative flex flex-1 min-w-0 self-start">
                        <textarea id="home-prompt" maxlength="1000" class="flex-[1_0_50%] min-w-[50%] disabled:opacity-80 text-white bg-transparent border-0 shadow-none resize-none outline-none ring-0 disabled:bg-transparent selection:bg-teal-300 selection:text-black placeholder:text-zinc-400 [scroll-padding-block:0.75rem] pl-3 py-3 sm:min-h-[15px] sm:leading-6 text-base md:text-sm" spellcheck="false" rows="1" placeholder="How many players do we have?" style={{height: "41px !important"}}></textarea>
                      </div>
                      <button type="submit" disabled="" id="send-button" class="flex items-center outline-none hover:bg-zinc-800 transition-colors focus-visible:ring-zinc-400 focus-visible:ring-1 justify-center w-8 h-8 rounded-full shrink-0 text-zinc-50 opacity-50">
                        <span class="sr-only">Send</span>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="fill-current"><path d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"></path></svg>
                      </button>
                    </div>
                  </form>
                </div>
                </div>
              </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}