import React from "react";

import CodeVisualizer from "../../Components/code-visualizer";
// import Header from "../../Components/header";

import "./style.css";

const data = {
  code: `const records = new AlgorithmCanvas();
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
  records.end();`,
  build: true,
  link: "",
  description: "",
};

const Home = () => {
  return (
    <>
      {/* <Header /> */}
      <main className="home">
        <CodeVisualizer {...data} />
        <div className="fill" />
      </main>
    </>
  );
};
export default Home;
