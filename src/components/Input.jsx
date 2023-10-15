export const Input = ({
  placeholder = "",
  value = "",
  prefix,
  suffix,
  ...rest
}) => {
  return (
    <div className="mb-5 flex items-center justify-center w-full max-w-lg gap-2 px-2 divide-x divide-zinc-600 shadow-lg min-h-12 bg-zinc-900 rounded-3xl shadow-black/40 z-10">
      {prefix}
      <div className="flex items-center self-end flex-1 min-w-0">
        <div
          className="relative w-full flex items-center transition-all duration-300 min-h-full h-fit"
          style={{ height: "41px" }}
        >
          <div className="relative flex flex-1 min-w-0 self-start">
            <input
             {...rest}
              value={value}
              type="text"
              className="flex-[1_0_50%] min-w-[50%] disabled:opacity-80 text-white bg-transparent border-0 shadow-none resize-none outline-none ring-0 disabled:bg-transparent selection:bg-teal-300 selection:text-black placeholder:text-zinc-400 [scroll-padding-block:0.75rem] pl-3 py-3 sm:min-h-[15px] sm:leading-6 text-base md:text-sm"
              placeholder={placeholder}
              style={{ height: "41px !important" }}
            />
          </div>
        </div>
      </div>
      {suffix}
    </div>
  );
};
