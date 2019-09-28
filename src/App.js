import React, { useState, useEffect } from 'react';
import './Styles/App.css';
import CodeEditor from './Components/CodeEditor';
import Visualizer from './Components/Visualizer';
import build from './Components/Build';
import useStep from './Hooks/useSteps';




function App() {


  const [code, setCode] = useState(`
  /* eslint-disable no-undef */

  /////// BUBBLE SORT 
  
  const records = new AlgorithmCanvas();
  const arrayStructure = new Array1D([], 'bubblesort');
  records.watch(arrayStructure);
  
  const bubblesort = (array) => {
      arrayStructure.update(array);
      records.draw();
      for (let i = 1; i < array.length; i++) {
          arrayStructure.selectFixed(j => j > array.length - i, 'lul', 'rgba(100,100,100,.4)', 'grey')
          for (let j = 0; j < array.length - i; j++) {
              arrayStructure.select([j, j + 1], 'rgba(0,250,253,.3)');
              records.draw();
              if (array[j] > array[j + 1]) {
                  let aux = array[j];
                  array[j] = array[j + 1];
                  array[j + 1] = aux;
                  arrayStructure.select([j, j + 1], 'rgba(0,100,180,.3)');
                  records.draw();
              }
          }
      }
  }
  
  bubblesort([5, 4, 3, 2, 1, 34, 5, 2, 3, 52, 1]);
  records.end();
  `);

  useEffect(() => {

  })

  const [records, setRecords] = useState([]);
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
