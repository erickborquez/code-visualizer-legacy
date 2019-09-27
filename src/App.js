import React, { useState, useEffect } from 'react';
import './Styles/App.css';
import CodeEditor from './Components/CodeEditor';
import Visualizer from './Components/Visualizer';
import build from './Components/Build';




function App() {


  const [code, setCode] = useState(`
  let array = new Array1D([1, 3, 4, 5], 'array1');
  let array2 = new Array1D([1, 3, 4, 5], 'array2');
  
  let records = new AlgorithmCanvas();
  
  array.highlight({ element: 1, color: 'red' }, { elements: [0, 5], color: 'green' })
  
  records.watch(array, array2);
  records.draw();
  records.draw();
  records.end();
  
  `);


  const [records, setRecords] = useState([]);
  const [actualStep, setStep] = useState(0);

  useEffect(() => {
    const keyPress = (e) => {
      if (e.ctrlKey && e.key === 'Enter') {
        build(code, setRecords, setStep);
      }
    }
    window.addEventListener("keydown", keyPress);
    return () => {
      window.removeEventListener("keydown", keyPress);
    }
  })


  return (
    <div className="App">
      <CodeEditor code={code} onCodeChange={(code) => setCode(code)} />
      <button onClick={() => build(code, setRecords, setStep)}>Build!</button>
      <button onClick={() => setStep(actualStep + 1)}>New step bb</button>
      <Visualizer records={records} step={actualStep % (records.length)} />
    </div>
  );
}

export default App;
