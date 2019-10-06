import React, { useState, useEffect } from 'react';
import './Styles/App.css'
import CodeEditor from './Components/CodeEditor';
import Visualizer from './Components/Visualizer';
import build from './Api/Build';
import Header from './Components/Header'

import useStep from './Hooks/useSteps';
import fetchCode from './Api/FetchCode';



function App() {

  // eslint-disable-next-line no-unused-vars
  const [step, setStep, maxSteps, setMaxSteps, speed, setSpeed, paused, setPaused] = useStep(0);
  const [code, setCode] = useState(fetchCode('mineSweeper')[0].code);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const keyPress = (e) => {
      if (e.ctrlKey && e.key === 'Enter') {
        buildCode();
      } else if (e.ctrlKey && e.key.toLowerCase() === 's') {
        e.preventDefault();
        console.log("Saving data locally...")
      }
    }
    window.addEventListener("keydown", keyPress);
    return () => {
      window.removeEventListener("keydown", keyPress);
    }
  })


  const buildCode = () => build(code, setRecords, setStep, setMaxSteps, setPaused);

  return (
    <div className="App">

      <Header />
        <CodeEditor code={code} setCode={setCode} />
        {/*
        <button onClick={() => buildCode()}>Build!</button>
        <button onClick={() => setStep(Math.min(step + 1, maxSteps))}>Next step bb</button>
        <button onClick={() => setPaused(!paused)}>Toggle Pause</button>
        <p>Actual step: {step}</p>
        */}
        <Visualizer records={records} step={step} />
    </div>
  );
}

export default App;
