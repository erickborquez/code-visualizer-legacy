import React, { useState, useEffect } from "react";

import CodeEditor from "../code-editor";
import Visualizer from "../visualizer";
import build from "../../Api/build";

import useStep from "../../Hooks/useSteps";

import "./style.css";

let totalScale = 1000;

const CodeVisualizer = ({
  code: initialCode = "",
  className,
  buildOnLoad = true,
  showEditor = true,
}) => {
  const [code, setCode] = useState(initialCode);
  const [width, setWidth] = useState(
    showEditor ? [totalScale / 2, totalScale / 2] : [0, totalScale]
  );
  const [stepsState, dispatchSteps] = useStep(0, 0, false);
  const [records, setRecords] = useState([]);
  const [canUpdateWidth, setCanUpdateWidth] = useState(true);
  const [ignoreDrag, setIgnoreDrag] = useState(true);

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

  const buildCode = async () => {
    try {
      const records = await build(code);
      setRecords(records);
      dispatchSteps({ step: 0, maxSteps: records[0].length });
    } catch (e) {
      console.log("Error", e);
    }
  };
  /// Build on first load

  useEffect(() => {
    if (buildOnLoad) buildCode();
  }, []);

  const handleDrag = (e) => {
    if (!canUpdateWidth || e.clientX === 0) return;
    if (ignoreDrag) {
      setIgnoreDrag(false);
      return;
    }
    setCanUpdateWidth(false);
    const totalWidth = window.innerWidth;
    const ratio = e.clientX / totalWidth;
    const left = Math.floor(totalScale * ratio);
    setWidth([left, totalScale - left]);

    setTimeout(() => setCanUpdateWidth(true), 5);
  };

  const handleDragEnd = () => {
    setIgnoreDrag(true);
    if (width[0] < 100) setWidth([0, totalScale]);
    if (totalScale - width[0] < 100) setWidth([totalScale, 0]);
  };

  const handleDoubleClick = () => {
    setWidth([totalScale / 2, totalScale / 2]);
  };

  return (
    <div
      className={`code-visualizer ${className}`}
      style={{ gridTemplateColumns: `${width[0]}fr min-content ${width[1]}fr` }}
    >
      {showEditor && (
        <>
          <CodeEditor code={code} setCode={setCode} />
          <div
            className="code-visualizer__edit-width"
            onDrag={handleDrag}
            onDragEnd={handleDragEnd}
            draggable
            onDoubleClick={handleDoubleClick}
          />
        </>
      )}
      <Visualizer
        records={records}
        {...stepsState}
        dispatchSteps={dispatchSteps}
        loop={false}
      />
    </div>
  );
};

export default CodeVisualizer;
