import React from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

import { ReactComponent as BackSvg } from "../../Assets/icons/back.svg";
import { ReactComponent as ForwardSvg } from "../../Assets/icons/forward.svg";
import { ReactComponent as PauseSvg } from "../../Assets/icons/pause.svg";
import { ReactComponent as PlaySvg } from "../../Assets/icons/play.svg";
import { ReactComponent as SkipBackSvg } from "../../Assets/icons/skip-back.svg";
import { ReactComponent as SkipForwardSvg } from "../../Assets/icons/skip-forward.svg";

const Controls = ({
  step,
  paused,
  loop,
  maxSteps,
  speed,
  dispatchSteps,
  ...props
}) => {
  // console.log(step, paused, loop, maxSteps, speed, dispatchSteps);
  return (
    <div className="visualizer-controls">
      <div
        className="visualizer-control-button"
        onClick={() => dispatchSteps({ step: 0, paused: true })}
      >
        <SkipBackSvg className="visualizer-control-svg" />
      </div>

      {paused ? (
        <div
          className="visualizer-control-button"
          onClick={() => {
            if (step !== maxSteps) dispatchSteps({ paused: false });
          }}
        >
          <PlaySvg className="visualizer-control-svg" />
        </div>
      ) : (
        <div
          className="visualizer-control-button"
          onClick={() => dispatchSteps({ paused: true })}
        >
          <PauseSvg className="visualizer-control-svg" />
        </div>
      )}

      <div
        className="visualizer-control-button"
        onClick={() => dispatchSteps({ step: maxSteps - 1, paused: true })}
      >
        <SkipForwardSvg className="visualizer-control-svg" />
      </div>

      <div
        className="visualizer-control-option"
        onClick={() =>
          dispatchSteps({ step: Math.max(step - 1, 0), paused: true })
        }
      >
        <BackSvg className="visualizer-control-svg" />
      </div>
      <div>
        <span className="visualizer-control-label">
          {("00000" + Math.min(step + 1, maxSteps)).slice(
            -maxSteps.toString().length
          )}
          /{maxSteps}
        </span>
      </div>
      <div
        className="visualizer-control-option"
        onClick={() =>
          dispatchSteps({ step: Math.min(step + 1, maxSteps), paused: true })
        }
      >
        <ForwardSvg className="visualizer-control-svg" />
      </div>

      <div className="visualizer-control-range">
        <span className="visualizer-control-label visualizer-control-range-label">
          Speed
        </span>
        <InputRange
          maxValue={-20}
          minValue={-500}
          value={-speed}
          onChange={(value) => dispatchSteps({ speed: -value })}
        />
      </div>
      {/* <div className="visualizer-control-option">
        <Settings className="visualizer-control-svg" />
      </div> */}
    </div>
  );
};

export default Controls;
