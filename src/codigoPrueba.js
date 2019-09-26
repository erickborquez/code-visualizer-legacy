/* eslint-disable no-undef */

let array = new Array1D([1, 3, 4, 5]);
let history = new AlgorithmCanvas();

array.highlight({ element: 1, color: 'red' }, { elements: [0, 5], color: 'green' })

history.watch(array, array);
history.draw();
console.log(history.steps[0].changes[1]);
