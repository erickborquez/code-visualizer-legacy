import React,{useState} from 'react';
import './Styles/App.css';
import CodeEditor from './Components/CodeEditor';
import Visualizer from './Components/Visualizer';



function App() {

  let worker = new Worker(process.env.PUBLIC_URL + '/worker.js');
  worker.onmessage = m =>{
    console.log(`message recibed!`);
  }
  worker.onerror = e =>{
    console.log(`error recibed :(`);
  }

  const build = (code) =>{
    worker.terminate();
    worker = new Worker(process.env.PUBLIC_URL + '/worker.js');
    worker.postMessage(code);
  }
  const [code, setCode] = useState('aaa');

  return (
    <div className="App">
      <CodeEditor code={code} onCodeChange = {(code) => setCode(code)}/>
      <button onClick={() => build(code)}>Build!</button>
    </div>
  );
}

export default App;
