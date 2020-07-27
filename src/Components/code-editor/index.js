/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import AceEditor from "react-ace";
import Select from "react-select";

import "../../Shared/utilities.css";

import "./style.css";

import "brace/snippets/javascript";
import "brace/ext/language_tools";
import "brace/mode/javascript";
import "brace/theme/monokai";
import "brace/mode/c_cpp";

const CodeEditor = ({ code, setCode, showControls = true, ...props }) => {
  const [mode, setMode] = useState("javascript");
  const [fontSize, setFontSize] = useState(14);
  const [theme, setTheme] = useState("monokai");

  const options = {
    code: [
      { value: "javascript", label: "Javascript" },
      { value: "python", label: "Python" },
      { value: "c_cpp", label: "C++" },
    ],
    theme: [
      { value: "monokai", label: "Monokai" },
      { value: "github", label: "Github" },
      { value: "tomorrow", label: "Tomorrow" },
      { value: "kuroir", label: "Kuroir" },
      { value: "twilight", label: "Twilight" },
    ],
    fontSize: [
      { value: "10", label: "10" },
      { value: "12", label: "12" },
      { value: "14", label: "14" },
      { value: "16", label: "16" },
      { value: "20", label: "20" },
      { value: "30", label: "30" },
      { value: "40", label: "40" },
    ],
  };
  const handleModeChange = (e) => {
    const mode = e.value;
    import(`brace/mode/${mode}`).then(() => setMode(mode));
  };
  const handleThemeChange = (e) => {
    const theme = e.value;
    import(`brace/theme/${theme}`).then(() => setTheme(theme));
  };
  return (
    <div className="editor">
      {showControls && (
        <div className="option">
          <div className="option-controls">
            <Select
              onChange={handleModeChange}
              isSearchable={false}
              blurInputOnSelect={true}
              options={options.code}
              className="option-select option-select__code"
              classNamePrefix="option-select"
              defaultValue={{ value: "javascript", label: "Javascript" }}
              components={{
                DropdownIndicator: () => null,
                IndicatorSeparator: () => null,
              }}
            />
            <Select
              onChange={handleThemeChange}
              isSearchable={false}
              blurInputOnSelect={true}
              options={options.theme}
              className="option-select option-select__theme"
              classNamePrefix="option-select"
              defaultValue={{ value: "monokai", label: "Monokai" }}
              components={{
                DropdownIndicator: () => null,
                IndicatorSeparator: () => null,
              }}
            />
            <Select
              onChange={(e) => setFontSize(e.value)}
              isSearchable={false}
              blurInputOnSelect={true}
              options={options.fontSize}
              className="option-select option-select__font-size"
              classNamePrefix="option-select"
              defaultValue={{ value: "14", label: "14" }}
              components={{
                DropdownIndicator: () => null,
                IndicatorSeparator: () => null,
              }}
            />
          </div>
          <div className="option-name">
            <h3 className="option-name__local-name">Algorithm Visualizer</h3>
          </div>
        </div>
      )}

      <AceEditor
        value={code}
        mode={mode.toLowerCase()}
        fontSize={`${fontSize}px`}
        theme={theme.toLocaleLowerCase()}
        showPrintMargin={false}
        scrollMargin={[10, 0, 0, 0]}
        onChange={(code) => setCode(code)}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: Infinity }}
        enableBasicAutocompletion={true}
        setOptions={{ useSoftTabs: false }}
        enableLiveAutocompletion={true}
        enableSnippets={true}
        className={"code-editor"}
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default CodeEditor;
