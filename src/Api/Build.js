let worker = new Worker(process.env.PUBLIC_URL + '/worker.js');

const build = (record, setRecord, setStep, setMaxSteps, setPaused) => {
    console.log('bulding...');
    let startingTime = new Date().getTime();
    worker = new Worker(process.env.PUBLIC_URL + '/worker.js');
    worker.onmessage = m => {
        setRecord(m.data);
        setStep(0);
        setMaxSteps(m.data[0].length - 1);
        setPaused(true);
        worker.terminate();
        console.log(`builded in ${new Date().getTime() - startingTime}ms`);
    }
    worker.onerror = e => {
        console.log(e);
        worker.terminate();
    }
    worker.postMessage(record);
}

export default build;