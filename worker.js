function processData(arraySize) {
    const array = createRandomArray(arraySize);
    array.sort((a, b) => a - b); // Sorting the array
    return array;
}

function createRandomArray(size) {
    const array = [];
    for (let i = 0; i < size; i++) {
        array.push(Math.random());
    }
    return array;
}

self.addEventListener('message', function(event) {
    const { type, arraySize } = event.data;
    if (type === 'processData') {
        const sortedArray = processData(arraySize);
        self.postMessage(sortedArray);
    }
});
