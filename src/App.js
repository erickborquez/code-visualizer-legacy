import React, { useState, useEffect } from 'react';
import './Styles/App.css';
import CodeEditor from './Components/CodeEditor';
import Visualizer from './Components/Visualizer';
import build from './Components/Build';
import useStep from './Hooks/useSteps';




function App() {


  const [code, setCode] = useState(`

  const records = new AlgorithmCanvas();
  const bombMatrix = new Array2D([[1,0,1],[0,1,0],[1,0,1]],'original');
  const mines = new Array2D([[]],'modified');
  records.watch(bombMatrix,mines);
  
  const isValidPos = (x,y,limX,limY) => {
      return x >= 0 && y >= 0 && x < limX && y < limY;
  }
  
  const xMov = [0,1,1,1,0,-1,-1,-1];
  const yMov = [-1,-1,0,1,1,1,0,-1];
  
  const minesweeper = (matrix) =>{
     let bombs = matrix.map(a => a.map(e => 0));
     mines.update(bombs);
     for(let i = 0; i < matrix.length; i ++){
         for(let j = 0; j <matrix[0].length; j++){
             mines.selectFixed([i,j]);
             bombMatrix.selectFixed([i,j]);
             records.draw();
             for(let mov = 0; mov < 9; mov++){
                 let posX = j + xMov[mov];
                 let posY = i + yMov[mov];
                 if(isValidPos(posX, posY, matrix[0].length,matrix.length)){
                     bombMatrix.select([posY,posX],'rgba(20,100,200,.5');
                     records.draw();
                     if(matrix[posY][posX] == 1){
                          bombs[i][j]++;
                          bombMatrix.select([posY,posX],'rgba(20,100,230,1');
                          records.draw();
                     }
                 }
             }
         }
     }
     mines.update(bombs);
     
     records.draw();
  }
  
  
  minesweeper(bombMatrix.elements); 
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
