import React, { useState, useEffect } from 'react';
import './Styles/App.css';
import CodeEditor from './Components/CodeEditor';
import Visualizer from './Components/Visualizer';
import build from './Components/Build';




function App() {


  const [code, setCode] = useState('let array = new Array1D();\nlet history = new algorithmCanvas();');
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    const keyPress = (e) => {
      if (e.ctrlKey && e.key === 'Enter') {
        build(code, setSteps);
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
      <button onClick={() => build(code, setSteps)}>Build!</button>
      <Visualizer steps={steps} />
    </div>
  );
}

export default App;
