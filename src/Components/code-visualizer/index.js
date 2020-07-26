import React, { useState, useEffect } from "react";

import Header from "../header";
import CodeEditor from "../code-editor";
import Visualizer from "../visualizer";
import Controls from "../controls";
import build from "../../Api/Build";

import useStep from "../../Hooks/useSteps";

import "./style.css";

const CodeVisualizer = ({ match }) => {
  const controlSteps = useStep(0);
  const [code, setCode] = useState("");
  const [title, setTitle] = useState("");
  const [records, setRecords] = useState([]);

  //HANDLE HOTKEYS
  useEffect(() => {
    const keyPress = (e) => {
      if (e.ctrlKey && e.key === "Enter") {
        buildCode();
      }
    };
    window.addEventListener("keydown", keyPress);
    return () => {
      window.removeEventListener("keydown", keyPress);
    };
  });

  const buildCode = () =>
    build(
      code,
      setRecords,
      controlSteps.setStep,
      controlSteps.setMaxSteps,
      controlSteps.setPaused
    );

  return (
    <div className="App">
      <Header title={title} setTitle={setTitle} />
      <CodeEditor code={code} setCode={setCode} />
      <div className="visualizer">
        <Visualizer records={records} {...controlSteps} />
        {/* <Visualizer records={records} step={controlSteps.step} /> */}
      </div>
    </div>
  );
};

export default CodeVisualizer;
