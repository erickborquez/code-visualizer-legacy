let worker = new Worker(process.env.PUBLIC_URL + "/worker.js");

const build = (code, setRecord, setStep, setMaxSteps, setPaused) => {
  console.log("bulding...");
  let startingTime = new Date().getTime();
  worker = new Worker(process.env.PUBLIC_URL + "/worker.js");
  worker.onmessage = (m) => {
    if (m.data.length !== 0) {
      setPaused(true);
      setStep(0);
      setMaxSteps(m.data[0].length - 1);
      setRecord(m.data);
      console.log(`builded in ${new Date().getTime() - startingTime}ms`);
    }
    worker.terminate();
  };
  worker.onerror = (e) => {
    console.log(e);
    worker.terminate();
  };
  worker.postMessage(code);
};

export default build;
