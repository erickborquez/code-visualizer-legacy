import React, { useState, useEffect } from 'react';
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from './Components/Header'
import CodeEditor from './Components/CodeEditor';
import Visualizer from './Components/Visualizer';
import Controls from './Components/Controls';
import build from './Api/Build';

import useStep from './Hooks/useSteps';
//import fetchCode from './Api/FetchCode';
import { colletIdsAndDocs } from './utilities.js'


import { firestore } from './firebase';


import './Styles/CodeVisualizer.css'



const CodeVisualizer = ({ match, dbContent }) => {

  // eslint-disable-next-line no-unused-vars
  const [step, setStep, maxSteps, setMaxSteps, speed, setSpeed, paused, setPaused] = useStep(0);
  const [code, setCode] = useState(dbContent || '');
  const [records, setRecords] = useState([]);
  const [title, setTitle] = useState("Untitled");

  useEffect(() => {
    console.log("Effect...");
    if (match.params.cid !== undefined && dbContent === undefined) {
      const codeId = match.params.cid;
      const fetchData = async () => {
        const docSnapshot = await firestore.collection('code').doc(codeId.toString()).get();
        const content = colletIdsAndDocs(docSnapshot);
        setCode(content.code);
        setTitle(content.title);
      }
      fetchData();
    }
  }, [dbContent, match.params.cid]);


  useEffect(() => {
    const keyPress = (e) => {
      if (e.ctrlKey && e.key === 'Enter') {
        buildCode();
      } else if (e.ctrlKey && e.key.toLowerCase() === 's') {
        e.preventDefault();
        saveData();
      }
    }
    window.addEventListener("keydown", keyPress);
    return () => {
      window.removeEventListener("keydown", keyPress);
    }
  });



  const buildCode = () => build(code, setRecords, setStep, setMaxSteps, setPaused);

  const saveData = async () => {
    try {
      const docReference = await firestore.collection('code').add({
        code: code,
        title: title,
        user: {
          displayName: "Eeeerick",
          uid: "123123123",
          username: "jejox"
        }
      });
      let docContent = await docReference.get();
      console.log(colletIdsAndDocs(docContent))
    } catch (e) {
      console.error('uhhh error');
    }
  }

  return (
    <div className="App">
      <Header title={title} setTitle={setTitle} />
      <CodeEditor code={code} setCode={setCode} />
      <div className='visualizer'>
        <Controls step={step} setStep={setStep} maxSteps={maxSteps} speed={speed} setSpeed={setSpeed} paused={paused} setPaused={setPaused} />
        <Visualizer records={records} step={step} />
      </div>
    </div>
  );
}

export default CodeVisualizer;
