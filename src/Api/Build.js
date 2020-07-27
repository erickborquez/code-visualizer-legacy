let worker = new Worker(process.env.PUBLIC_URL + "/worker.js");

const build = async (code) =>
  new Promise((resolve, reject) => {
    let startingTime = new Date().getTime();
    worker = new Worker(process.env.PUBLIC_URL + "/worker.js");
    worker.onmessage = (m) => {
      if (m.data.length !== 0) {
        console.log(`builded in ${new Date().getTime() - startingTime}ms`);
        resolve(m.data);
      }
      worker.terminate();
    };
    worker.onerror = (e) => {
      reject(e);
      worker.terminate();
    };
    worker.postMessage(code);
  });

export default build;
