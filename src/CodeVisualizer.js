/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Redirect } from "react-router-dom";


import Header from './Components/Header'
import CodeEditor from './Components/CodeEditor';
import Visualizer from './Components/Visualizer';
import Controls from './Components/Controls';
import build from './Api/Build';

import useStep from './Hooks/useSteps';
import { colletIdsAndDocs } from './utilities.js'

import { firestore } from './firebase';

import './Styles/CodeVisualizer.css'
import { auth } from './firebase';



const CodeVisualizer = ({ match }) => {

  const controlSteps = useStep(0);
  const [code, setCode] = useState('');
  const [title, setTitle] = useState('');
  const [records, setRecords] = useState([]);
  const [docReference, setDocReference] = useState(null);
  const [docSnapshot, setDocSnapshot] = useState(null);
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {

    const getCodeContent = async (codeId) => {
      const docReference = await firestore.collection('code').doc(codeId.toString());
      const docSnapshot = await docReference.get();
      setDocReference(docReference);
      setDocSnapshot(docSnapshot);
      if (!docSnapshot.exists) {
        throw new Error("The document doesn't exists!!!");
      } else {
        const content = colletIdsAndDocs(docSnapshot);
        setCode(content.code);
        setTitle(content.title);
      }
    }

    const codeId = match.params.cid;
    if (codeId === undefined) {
      setTitle("Untitled");
    } else {
      getCodeContent(codeId);
    }
  }, [])




  //HANDLE HOTKEYS
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



  const buildCode = () => build(code, setRecords, controlSteps.setStep, controlSteps.setMaxSteps, controlSteps.setPaused);

  const saveData = async () => {
    const {uid, displayName, email, photoURL} = auth.currentUser || {};

    if (docSnapshot === null) {
      try {
        console.log("Creating new fileeee");
        const docReference = await firestore.collection('code').add({
          code: code,
          title: title,
          user: {
            uid,
            displayName,
            email,
            photoURL
          }
        });
        setDocSnapshot(await docReference.get());
        setDocReference(docReference);
        setRedirect(true);
      } catch (e) {
        console.error('uhhh error');
      }
    } else {
      docReference.update({
        code: code,
        title: title
      })
    }

  }

  return (
    <div className="App">
      {redirect ? <Redirect to={`/code/${docReference.id}`} /> : null}
      <Header title={title} setTitle={setTitle} />
      <CodeEditor code={code} setCode={setCode} />
      <div className='visualizer'>
        <Controls {...controlSteps} />
        <Visualizer records={records} step={controlSteps.step} />
      </div>
    </div>
  );
}

export default CodeVisualizer;
