import React, { useState, useEffect } from 'react';
import './Styles/App.css';
import CodeEditor from './Components/CodeEditor';
import Visualizer from './Components/Visualizer';
import build from './Components/Build';
import useStep from './Hooks/useSteps';




function App() {


  const [code, setCode] = useState(`

  const records = new AlgorithmCanvas();
  const matrix = new Array2D([[1,2,4],[3,4],[5,6]],'tests');
  records.watch(matrix);
  records.draw();
  records.end();
  
  `);

  useEffect(() => {

  })

  const [records, setRecords] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [step, setStep, maxSteps, setMaxSteps, speed, setSpeed, paused, setPaused] = useStep(0);
  useEffect(() => {
    const keyPress = (e) => {
      if (e.ctrlKey && e.key === 'Enter') {
        buildCode();
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
      <CodeEditor code={code} onCodeChange={(code) => setCode(code)} />
      <button onClick={() => buildCode()}>Build!</button>
      <button onClick={() => setStep(Math.min(step + 1, maxSteps))}>Next step bb</button>
      <button onClick={() => setPaused(!paused)}>Toggle Pause</button>
      <p>Actual step: {step}</p>
      <Visualizer records={records} step={step} />
    </div>
  );
}

export default App;
