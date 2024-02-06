function processDataWithoutWorker() {
    const arraySize = document.getElementById('arraySize').valueAsNumber;
    const startTime = performance.now();
    const array = createRandomArray(arraySize);
    array.sort((a, b) => a - b); 
    const endTime = performance.now();
    displayResult('Without Worker', endTime - startTime);
}

function processDataWithWorker() {
    const arraySize = document.getElementById('arraySize').valueAsNumber;
    const startTime = performance.now();
    const worker = new Worker('worker.js');
    worker.postMessage({ type: 'processData', arraySize });
    worker.onmessage = function(event) {
        const endTime = performance.now();
        displayResult('With Worker', endTime - startTime);
        worker.terminate();
    };
}

function displayResult(method, time) {
    const output = document.getElementById('output');
    output.textContent = `${method}: ${time.toFixed(2)} milliseconds`;
}

function createRandomArray(size) {
    const array = [];
    for (let i = 0; i < size; i++) {
        array.push(Math.random());
    }
    return array;
}
