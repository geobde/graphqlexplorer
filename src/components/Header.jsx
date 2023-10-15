export const Header = () => {
  return (
    <header className="w-full flex flex-row items-center justify-between absolute top-0 border-b border-transparent transition duration-200 ease-in-out">
      <div
        style={{ margin: "30px" }}
        className="w-full items-center justify-between transition duration-500 ease-in-out flex"
      >
        <svg
          style={{ color: "white", width: "40px", height: "40px" }}
          viewBox="0 0 24 24"
          class="h-5 w-5 space-kit-1a134qk"
        >
          <g
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
          >
            <path d="M13.5 6.748a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5zM21 .748a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5zM21 13.498a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5zM13.5 18.748a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5zM3 18.748a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5zM3.75 2.998a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5zM16.151 7.848l3.26-3.26M16.794 12.292l2.285 2.285M13.5 14.248v4.5M10.851 13.147L4.59 19.408M10.001 9.149L5.61 6.514"></path>
          </g>
        </svg>
        <a
          className="outline-none transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-7 text-sm h-10 pl-4 pr-2 gap-0 font-semibold bg-white text-black hover:bg-white/90 focus-visible:ring-4 focus-visible:ring-white/30 focus-visible:outline-none focus-visible:bg-white/90 disabled:hover:bg-white inline-flex items-center border justify-center select-none rounded-full disabled:cursor-not-allowed disabled:opacity-70 transition ease-in-out duration-200"
          target="_blank"
          href="/docs"
        >
          <span>Docs</span>
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
  );
};
