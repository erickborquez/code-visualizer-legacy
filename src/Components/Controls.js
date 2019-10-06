import React from 'react';
import { ReactComponent as BackSvg } from '../SVGs/back.svg'
import { ReactComponent as ForwardSvg } from '../SVGs/forward.svg'
import { ReactComponent as PauseSvg } from '../SVGs/pause.svg'
import { ReactComponent as PlaySvg } from '../SVGs/play.svg'
import { ReactComponent as SkipBackSvg } from '../SVGs/skip-back.svg'
import { ReactComponent as SkipForwardSvg } from '../SVGs/skip-forward.svg'




const Controls = props => {
    const { step, setStep, maxSteps, speed, setSpeed, paused, setPaused } = props;
    return (
        <div className="visualizer-controls">
            <div className="visualizer-control-button" onClick={() => {
                setStep(Math.max(step - 1, 0))
                setPaused(true);
            }}>
                <BackSvg className="visualizer-control-svg" />
            </div>
            <div className="visualizer-control-button" onClick={() => {
                setStep(Math.min(step + 1, maxSteps))
                setPaused(true);
            }}>
                <ForwardSvg className="visualizer-control-svg" />
            </div>
            <div className="visualizer-control-button" onClick={() => setPaused(true)}>
                <PauseSvg className="visualizer-control-svg" />
            </div>
            <div className="visualizer-control-button">
                <PlaySvg className="visualizer-control-svg" onClick={() => setPaused(false)} />
            </div>
            <div className="visualizer-control-button">
                <SkipBackSvg className="visualizer-control-svg" onClick={() => {
                    setStep(0)
                    setPaused(true);
                }} />
            </div>
            <div className="visualizer-control-button">
                <SkipForwardSvg className="visualizer-control-svg" onClick={() => {
                    setStep(maxSteps)
                    setPaused(true);
                }} />
            </div>


        </div >
    )
}

export default Controls;