import { useState, useEffect } from 'react'

const useStep = (startingStep = 0, lastStep = 0) => {
    const [step, setStep] = useState(startingStep);
    const [speed, setSpeed] = useState(100);
    const [paused, setPaused] = useState(true);
    const [maxSteps, setMaxSteps] = useState(lastStep);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!paused)
                setStep(Math.min(step + 1, maxSteps));
        }, speed)
        return () => clearInterval(interval);
    }
    )

    return [step, setStep,maxSteps, setMaxSteps, speed, setSpeed, paused, setPaused];
}

export default useStep;