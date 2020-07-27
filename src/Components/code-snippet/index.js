import React from "react";

import TextEditor from "react-ace";

import "brace/mode/javascript";
import "brace/theme/monokai";

import "./style.css";
const CodeSnippet = ({ children, ...props }) => {
  return (
    <div className="code-snippet__container">
      <TextEditor
        className="code-snippet"
        mode="javascript"
        theme="monokai"
        width="100%"
        height="30rem"
        showGutter={false}
        showPrintMargin={false}
        highlightActiveLine={false}
        cursorStart={-1}
        value={children}
        readOnly
      />
    </div>
  );
};

export default CodeSnippet;
