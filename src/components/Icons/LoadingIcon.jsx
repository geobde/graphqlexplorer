const LoadingIcon = () => {
  return (
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
  );
};

export default LoadingIcon;
