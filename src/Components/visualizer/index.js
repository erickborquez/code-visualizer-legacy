import React from "react";
import Array1D from "../data-structures/array-1d";
import Array2D from "../data-structures/array-2d";
import "./style.css";
import Controls from "../controls";

const generateRandomKey = (i) => {
  return `key-${i}=${new Date().getTime()}`;
};

const Visualizer = ({
  records,
  showControls = true,
  step,
  buildCode = () => null,
  ...props
}) => {
  const structures = records.map((s) => {
    s = s[step];
    let struct;
    switch (s.type) {
      case "Array1D":
        struct = (
          <Array1D
            key={generateRandomKey(s.name)}
            elements={s.elements}
            name={s.name}
          ></Array1D>
        );
        break;
      case "Array2D":
        struct = (
          <Array2D
            key={generateRandomKey(s.name)}
            elements={s.elements}
            name={s.name}
          ></Array2D>
        );
        break;
      default:
        break;
    }
    return struct;
  });

  return (
    <div className="visualizer">
      {showControls && (
        <Controls step={step} buildCode={buildCode} {...props} />
      )}
      <div className="visualizer-structures">{structures}</div>
    </div>
  );
};

export default Visualizer;
