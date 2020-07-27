import { useEffect, useReducer } from "react";

const useStep = (startingStep = 0, lastStep = 0, loop = false) => {
  const [state, dispatch] = useReducer(
    (state, newState) => {
      return { ...state, ...newState };
    },
    {
      step: startingStep,
      speed: 300,
      paused: true,
      maxSteps: lastStep,
      loop: loop,
    }
  );

  useEffect(() => {
    let destroyer = () => null;
    let { step, paused, speed, maxSteps } = state;
    if (!paused) {
      const nextStep = Math.min(step + 1, maxSteps - 1);
      const updateStep = setTimeout(
        () =>
          dispatch({
            step: nextStep,
            paused: nextStep === maxSteps - 1 && !loop,
          }),
        speed
      );
      destroyer = () => clearTimeout(updateStep);
    }
    return destroyer;
  }, [state, lastStep, loop]);

  return [state, dispatch];
};

export default useStep;
