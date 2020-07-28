export const firstExample = `
const canvas = new AlgorithmCanvas();
const myArray = new Array1D([1,2,3], 'First example');
canvas.watch(myArray);
canvas.draw();
myArray.update([1,2,3,4]);
canvas.draw();
canvas.end();
`;

export const secondExample = `
const canvas = new AlgorithmCanvas();
const myArray = new Array1D([1,2,3,4], 'First example');
canvas.watch(myArray);
canvas.draw();
for(let i = 0; i < 4; i++){
  myArray.select(i);
  canvas.draw();
}
canvas.end();
`;
export const thirdExample = `
const canvas = new AlgorithmCanvas();
const arrayStructure = new Array1D([], 'First example');
canvas.watch(arrayStructure);
const elements = [3,6,4,1,2,-1];
arrayStructure.update(elements);
canvas.draw();

let minIndex = 0, maxIndex = 0;
for(let i = 0; i < elements.length; i++){
  arrayStructure.select(i);
  if(elements[i] < elements[minIndex]){
    minIndex = i;
  }
  if(elements[i] > elements[maxIndex]){
    maxIndex = i;
  }
  canvas.draw();
}
arrayStructure.select(minIndex, '#00f');
arrayStructure.select(maxIndex, '#f00');
canvas.draw();

canvas.end();
`;
