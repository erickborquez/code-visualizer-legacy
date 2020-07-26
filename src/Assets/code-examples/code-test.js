/* eslint-disable no-undef */

/////// BUBBLE SORT
/*
const records = new AlgorithmCanvas();
const arrayStructure = new Array1D([], 'bubblesort');
records.watch(arrayStructure);

const bubblesort = (array) => {
    arrayStructure.update(array);
    records.draw();
    for (let i = 1; i < array.length; i++) {
        arrayStructure.selectFixed(j => j > array.length - i, 'lul', 'rgba(100,100,100,.4)', 'grey')
        for (let j = 0; j < array.length - i; j++) {
            arrayStructure.select([j, j + 1], 'rgba(0,0,180,.3)');
            records.draw();
            if (array[j] > array[j + 1]) {
                let aux = array[j];
                array[j] = array[j + 1];
                array[j + 1] = aux;
                arrayStructure.select([j, j + 1], 'rgba(0,0,180,.3)');
                records.draw();
            }
        }
    }
}

bubblesort([5, 4, 3, 2, 1, 34, 5, 2, 3, 52, 1]);
records.end();

*/

// ARRAY2D TESTS

//MINESWEEPER{
const records = new AlgorithmCanvas();
const bombMatrix = new Array2D(
  [
    [1, 0, 1],
    [0, 1, 0],
    [1, 0, 1],
  ],
  "original"
);
const mines = new Array2D([[]], "modified");
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
            bombMatrix.select([posY, posX], "rgba(20,100,230,1");
            records.draw();
          }
        }
      }
    }
  }
  mines.update(bombs);

  records.draw();
};

minesweeper(bombMatrix.elements);
records.end();
