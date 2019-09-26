let worker = new Worker(process.env.PUBLIC_URL + '/worker.js');

const build = (code,setSteps) => {
    console.log('bulding...');
    let startingTime = new Date().getTime();
    worker = new Worker(process.env.PUBLIC_URL + '/worker.js');
    worker.onmessage = m => {
        setSteps(m.data);
        worker.terminate();
        console.log(`builded in ${new Date().getTime() - startingTime}ms`);
    }
    worker.onerror = e => {
        console.log(e);
        worker.terminate();
    }
    worker.postMessage(code);
}

export default build;