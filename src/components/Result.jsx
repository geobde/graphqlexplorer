import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { twilight } from "react-syntax-highlighter/dist/esm/styles/prism";

export const Result = ({ message, isReady }) => {
  if (!isReady) return null;

  return (
    <span style={{ width: "70vw" }} className="text-white text-center mt-16">
      <SyntaxHighlighter language="graphql" style={twilight}>
        {message}
      </SyntaxHighlighter>
    </span>
  );
};
