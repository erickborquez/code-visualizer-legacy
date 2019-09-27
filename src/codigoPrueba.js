/* eslint-disable no-undef */

let array = new Array1D([1, 3, 4, 5], 'array1');
let array2 = new Array1D([1, 3, 4, 5], 'array2');

let records = new AlgorithmCanvas();

array.highlight({ element: 1, color: 'red' }, { elements: [0, 5], color: 'green' })

records.watch(array, array2);
records.draw();
records.draw();
records.end();
