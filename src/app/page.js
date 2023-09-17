export default function Home() {
  return (
    <>
      <section className="w-full h-screen flex flex-col justify-center items-center bg-black overflow-hidden">
        <header className="bg-black pt-8 pb-0 pl-16 pr-16 flex justify-between items-center fixed w-full top-0">
          <div className="flex items-center">
            <h1 className="text-white text-lg font-semibold">[ Product Name ]</h1>
          </div>
          <div className="space-x-4">
            <a href="#" className="text-white hover:underline">Login</a>
            <a class="outline-none transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-7 text-sm h-10 pl-4 pr-2 gap-0 font-semibold bg-white text-black hover:bg-white/90 focus-visible:ring-4 focus-visible:ring-white/30 focus-visible:outline-none focus-visible:bg-white/90 disabled:hover:bg-white inline-flex items-center border justify-center select-none rounded-full disabled:cursor-not-allowed disabled:opacity-70 transition ease-in-out duration-200" data-state="closed" href="/signup">Get Started<span class="text-[#70757E]"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.75 8.75L14.25 12L10.75 15.25"></path></svg></span></a>
          </div>
        </header>
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 items-center">
            <div className="flex flex-col justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="mb-5 text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                  Unleash your creative potential
                </h1>
                <p className="max-w-[600px] text-zinc-200 md:text-xl dark:text-zinc-100 mx-auto">
                  Join us and take charge of your creative journey. Streamlined, secure, and tailored for todays creators.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex animate-hero-text-slide-up-fade items-center justify-center gap-2 text-center md:-mt-10">
        <span className="sans text-sm leading-[1.6] text-slate-11 font-normal">Backed by</span>
        <span className="sans text-sm leading-[1.6] text-slate-11 font-normal flex items-center gap-1">
          Dragons Den 🤣
        </span>
      </div>
    </>
  );
}



