let workerModule = require("worker-loader?name=outputWorker.js!./worker.js");

let t0 = performance.now();
let worker = new workerModule();
let data = {
    M1: 75,
    M2: 2,
    Ned: -9000,
    UC: 1,
    concrete: 20,
    rho: 2,
    l0: 3
};

for (let i = 1; i < 10; i++) {
    data.Ned = -i * 1000;
    worker.postMessage(data);
}


// Event handler when worker has finished.
worker.onmessage = function (e) {
    let t1 = performance.now();
    console.log("time", t1 -t0);
    console.log("output", e.data)
};

// Note: dropping the amount of iterations in the vanilla_mkap.min.js does seem to increase the iterations time.
// Probably due to not finding valid convergence.