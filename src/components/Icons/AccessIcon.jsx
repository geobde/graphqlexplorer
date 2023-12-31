const AccessIcon = () => {
  return (
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
  );
};

export default AccessIcon;
