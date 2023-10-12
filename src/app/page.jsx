'use client'
import { useChat } from 'ai/react';
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
          <svg style={{fill: "white",width: "40px",height: "40px",marginTop: "5px"}} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M418.4 157.9c35.3-8.3 61.6-40 61.6-77.9c0-44.2-35.8-80-80-80c-43.4 0-78.7 34.5-80 77.5L136.2 151.1C121.7 136.8 101.9 128 80 128c-44.2 0-80 35.8-80 80s35.8 80 80 80c12.2 0 23.8-2.7 34.1-7.6L259.7 407.8c-2.4 7.6-3.7 15.8-3.7 24.2c0 44.2 35.8 80 80 80s80-35.8 80-80c0-27.7-14-52.1-35.4-66.4l37.8-207.7zM156.3 232.2c2.2-6.9 3.5-14.2 3.7-21.7l183.8-73.5c3.6 3.5 7.4 6.7 11.6 9.5L317.6 354.1c-5.5 1.3-10.8 3.1-15.8 5.5L156.3 232.2z"/></svg>
             <a
                style={{marginTop:10}}
                className="outline-none transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-7 text-sm h-10 pl-4 pr-2 gap-0 font-semibold bg-white text-black hover:bg-white/90 focus-visible:ring-4 focus-visible:ring-white/30 focus-visible:outline-none focus-visible:bg-white/90 disabled:hover:bg-white inline-flex items-center border justify-center select-none rounded-full disabled:cursor-not-allowed disabled:opacity-70 transition ease-in-out duration-200"
                target="_blank"
                href="/docs"
              >
                <span style={{marginLeft:10}}>Docs</span>
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
                <h2 style={{lineHeight:"47px"}} className="mb-5 text-4xl font-bold tracking-tighter sm:text-4xl xl:text-4xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                   Generate data from simple text prompts
                </h2>
                <form  onSubmit={handleSubmit} className="w-full h-full">
                <div className="flexpy-[4vh] my-12 justify-center items-center">
                <div style={{position:"relative",width: 515,margin: "0 auto"}} className="flex  flex-col w-full justify-center items-center align-start">
               <div style={{top: "-34px", left: "32px", display: "flex",position: "absolute",alignItems: "center"}}>
                <svg style={{width: 20,fill: "white"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm176 80v48h24 56 56 24V336H312 280V152 128H256h-8-6.2l-5.4 3L176 164.5v54.9l11.7-6.5L232 188.3V336H200 176z"/></svg>
                <label style={{marginLeft:12, color:"white"}}>Endpoint URL</label>
                </div>
                <div className="flex items-center justify-center w-full max-w-lg gap-2 px-2 divide-x divide-zinc-600 shadow-lg min-h-12 bg-zinc-900 rounded-3xl shadow-black/40 z-10">
                <div className="flex items-center justify-center rounded-l-full"><svg style={{marginLeft: 6,marginRight: 2,width:17,fill:"rgb(209, 213, 219)"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"/></svg></div>
                <div className="flex items-center self-end flex-1 min-w-0">
                    <div className="relative w-full flex items-center transition-all duration-300 min-h-full h-fit" style={{height: 41}}>
                    <div className="relative flex flex-1 min-w-0 self-start">
                        <input 
                          value={endpoint}
                          onChange={(e) => setEndpoint(e.target.value)}
                          type="text"
                          className="flex-[1_0_50%] min-w-[50%] disabled:opacity-80 text-white bg-transparent border-0 shadow-none resize-none outline-none ring-0 disabled:bg-transparent selection:bg-teal-300 selection:text-black placeholder:text-zinc-400 [scroll-padding-block:0.75rem] pl-3 py-3 sm:min-h-[15px] sm:leading-6 text-base md:text-sm" 
                          placeholder="https://portfolio-optimizer-api.intelligencia.ai/v1/graphql" 
                          style={{height: "41px !important"}} 
                        />
                    </div>
                    </div>
                </div>
                <button type="button"  className="invert-theme bg-gs-gray-400 text-sm gap-1.5 justify-start text-gs-background-1000 rounded-full flex items-center h-8 origin-right overflow-hidden ease-in font-medium px-[9px] disabled:opacity-50 hover:bg-gs-gray-600" data-state="closed" style={{background:"rgb(209, 213, 219)", width: 32}}><svg viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0"><path d="M11.998 0C13.9314 0 15.498 1.56667 15.498 3.5V6C15.498 6.13261 15.4454 6.25978 15.3516 6.35355C15.2578 6.44732 15.1307 6.5 14.998 6.5C14.8654 6.5 14.7383 6.44732 14.6445 6.35355C14.5507 6.25978 14.498 6.13261 14.498 6V3.5C14.498 2.83696 14.2347 2.20107 13.7658 1.73223C13.297 1.26339 12.6611 1 11.998 1C11.335 1 10.6991 1.26339 10.2303 1.73223C9.76144 2.20107 9.49805 2.83696 9.49805 3.5V5.5C10.0285 5.5 10.5372 5.71071 10.9123 6.08579C11.2873 6.46086 11.498 6.96957 11.498 7.5V12C11.498 12.5304 11.2873 13.0391 10.9123 13.4142C10.5372 13.7893 10.0285 14 9.49805 14H2.49805C1.96761 14 1.45891 13.7893 1.08383 13.4142C0.708761 13.0391 0.498047 12.5304 0.498047 12V7.5C0.498047 6.96957 0.708761 6.46086 1.08383 6.08579C1.45891 5.71071 1.96761 5.5 2.49805 5.5H8.49805V3.5C8.49805 1.56667 10.0647 0 11.998 0Z" fill="currentColor"></path></svg>Public</button>
                </div>

                <div style={{top: "85px", left: "32px", display: "flex",position: "absolute",alignItems: "center"}}>
                <svg style={{width: 20,fill: "white"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM193.7 146.5c15.8-12 35.2-18.4 55.1-18.1l3.4 .1c46.5 .7 83.8 38.6 83.8 85.1c0 23.5-9.7 46-26.9 62.1L244.7 336H328h24v48H328 184 160V349.6l7.6-7.1L276.3 240.6c7.5-7 11.7-16.8 11.7-27.1c0-20.3-16.3-36.8-36.6-37.1l-3.4-.1c-9.1-.1-18 2.8-25.3 8.3L206.5 197l-19.1 14.5-29.1-38.2 19.1-14.5 16.2-12.3z"/></svg>
                <label style={{marginLeft:12, color:"white"}}>Ask a question</label>
                </div>
                <div style={{marginTop:80}} className="mt-5 flex items-center justify-center w-full max-w-lg gap-2 px-2  divide-x divide-zinc-600 shadow-lg min-h-12 bg-zinc-900 rounded-3xl shadow-black/40 z-10">
                <div className="flex items-center justify-center rounded-l-full"><svg style={{width:25,color:"rgb(209, 213, 219)"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" className="icon-sm transition-colors group-hover/button:text-brand-purple" width="16" height="16"><path d="M12.784 1.442a.8.8 0 0 0-1.569 0l-.191.953a.8.8 0 0 1-.628.628l-.953.19a.8.8 0 0 0 0 1.57l.953.19a.8.8 0 0 1 .628.629l.19.953a.8.8 0 0 0 1.57 0l.19-.953a.8.8 0 0 1 .629-.628l.953-.19a.8.8 0 0 0 0-1.57l-.953-.19a.8.8 0 0 1-.628-.629l-.19-.953h-.002ZM5.559 4.546a.8.8 0 0 0-1.519 0l-.546 1.64a.8.8 0 0 1-.507.507l-1.64.546a.8.8 0 0 0 0 1.519l1.64.547a.8.8 0 0 1 .507.505l.546 1.641a.8.8 0 0 0 1.519 0l.546-1.64a.8.8 0 0 1 .506-.507l1.641-.546a.8.8 0 0 0 0-1.519l-1.64-.546a.8.8 0 0 1-.507-.506L5.56 4.546Zm5.6 6.4a.8.8 0 0 0-1.519 0l-.147.44a.8.8 0 0 1-.505.507l-.441.146a.8.8 0 0 0 0 1.519l.44.146a.8.8 0 0 1 .507.506l.146.441a.8.8 0 0 0 1.519 0l.147-.44a.8.8 0 0 1 .506-.507l.44-.146a.8.8 0 0 0 0-1.519l-.44-.147a.8.8 0 0 1-.507-.505l-.146-.441Z" fill="currentColor"></path></svg></div>
                <div className="flex items-center self-end flex-1 min-w-0">
                    <div className="relative w-full flex items-center transition-all duration-300 min-h-full h-fit" style={{height: 41}}>
                    <div className="relative flex flex-1 min-w-0 self-start">
                        <input 
                          type="text"
                          value={input}
                          onChange={handleInputChange}
                          className="flex-[1_0_50%] min-w-[50%] disabled:opacity-80 text-white bg-transparent border-0 shadow-none resize-none outline-none ring-0 disabled:bg-transparent selection:bg-teal-300 selection:text-black placeholder:text-zinc-400 [scroll-padding-block:0.75rem] pl-3 py-3 sm:min-h-[15px] sm:leading-6 text-base md:text-sm" 
                          placeholder="Get 25 drugs" 
                          style={{height: "41px !important"}} 
                        />
                    </div>
                    </div>
                </div>
                <button className="invert-theme bg-gs-gray-400 text-sm gap-1.5 justify-start text-gs-background-1000 rounded-full flex items-center h-8 origin-right overflow-hidden ease-in font-medium px-[9px] disabled:opacity-50 hover:bg-gs-gray-600" style={{background:"rgb(209, 213, 219)", width: 32, border:"none", color:"#a1a1aa"}} type="submit">
                {isLoading ? (
                  <svg
                   style={{ color:"black" }}
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
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M49.9 27.8C15.1 12.7-19.2 50.1-1.2 83.5L68.1 212.2c4.4 8.3 12.6 13.8 21.9 15c0 0 0 0 0 0l176 22c3.4 .4 6 3.3 6 6.7s-2.6 6.3-6 6.7l-176 22s0 0 0 0c-9.3 1.2-17.5 6.8-21.9 15L-1.2 428.5c-18 33.4 16.3 70.8 51.1 55.7L491.8 292.7c32.1-13.9 32.1-59.5 0-73.4L49.9 27.8z"/></svg>
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