export const minesweeper = `/* /* Minesweeper
This algorithm recibes an 2 dimensional array with 0's and 1's representing
the position of the bombs, then creates a 2 dimensional array with the
classic minesweeper layout, with the amount of bobms aroud each cell.
*/
const records = new AlgorithmCanvas();
const bombMatrix = new Array2D(
  [
    [1, 0, 1],
    [0, 1, 0],
    [1, 0, 1],
  ],
  "Bombs position"
);
const mines = new Array2D([[]], "Map layout");
records.watch(bombMatrix, mines);

const isValidPos = (x, y, limX, limY) => {
  return x >= 0 && y >= 0 && x < limX && y < limY;
};

const xMov = [0, 1, 1, 1, 0, -1, -1, -1];
const yMov = [-1, -1, 0, 1, 1, 1, 0, -1];

const minesweeper = (matrix) => {
  let bombs = matrix.map((a) => a.map((e) => 0));
  mines.update(bombs);
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      mines.selectFixed([i, j]);
      bombMatrix.selectFixed([i, j]);
      records.draw();
      for (let mov = 0; mov < 9; mov++) {
        let posX = j + xMov[mov];
        let posY = i + yMov[mov];
        if (isValidPos(posX, posY, matrix[0].length, matrix.length)) {
          bombMatrix.select([posY, posX], "rgba(20,100,200,.5");
          records.draw();
          if (matrix[posY][posX] === 1) {
            bombs[i][j]++;
            mines.select([i, j], "rgba(200,100,50,1");
            bombMatrix.select([posY, posX], "rgba(200,100,50,1");
            records.draw();
          }
        }
      }
    }
  }

  records.draw();
};

minesweeper(bombMatrix.elements);
records.end();`;

export const firstExample = `
const canvas = new AlgorithmCanvas();
const myArray = new Array1D([1,2,3], 'How it works');
canvas.watch(myArray);
canvas.draw();
myArray.update([1,2,3,4]);
canvas.draw();
canvas.end();
`;

export const secondExample = `
const canvas = new AlgorithmCanvas();
const myArray = new Array1D([1,2,3,4], 'Selections');
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
const arrayStructure = new Array1D([], 'Selections');
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
