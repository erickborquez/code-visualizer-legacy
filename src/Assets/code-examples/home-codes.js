export const firstExample = `
const canvas = new AlgorithmCanvas();
const array1d = new Array1D([], 'Example');
canvas.watch(array1d);
array1d.update([1,2,3,4]);
for(let i = 0; i < 4; i++){
  array1d.select(i);
  canvas.draw();
}
canvas.end();
`;
