import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { twilight } from "react-syntax-highlighter/dist/esm/styles/prism";

export const Result = ({ message, isReady }) => {
  if (!isReady) return null;

  return (
    <span className="w-full max-w-lg gap-2 px-2 text-white text-center mt-16">
      <SyntaxHighlighter language="graphql" style={twilight}>
        {message}
      </SyntaxHighlighter>
    </span>
  );
};
