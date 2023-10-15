const CheckIcon = () => {
  return (

    <button
    type="button"
    className="invert-theme bg-gs-gray-400 text-sm gap-1.5 justify-start text-gs-background-1000 rounded-full flex items-center h-8 origin-right overflow-hidden ease-in font-medium px-[9px] disabled:opacity-50 hover:bg-gs-gray-600"
    data-state="closed"
    style={{ background: "rgb(209, 213, 219)", width: "32px" }}
  >
     <svg
      style={{ width: "32px" }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
    </svg>
  </button>


   
  );
};

export default CheckIcon;
