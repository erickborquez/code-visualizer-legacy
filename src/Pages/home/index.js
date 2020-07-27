import React, { useState, useEffect } from "react";

import { Tree } from "react-data-structures";
import { firstExample } from "../../Assets/code-examples/home-codes";

import CodeVisualizer from "../../Components/code-visualizer";
// import Header from "../../Components/header";

import "./style.css";
import "../../Shared/fonts.css";
import "../../Shared/utilities.css";
import CodeSnippet from "../../Components/code-snippet";

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

let count = 0;

const Home = () => {
  const [tree, setTree] = useState({ root: { value: "0", children: [] } });
  useEffect(() => {
    if (count > 10) return;
    setTimeout(() => {
      const treeCopy = JSON.parse(JSON.stringify(tree));
      const parent = Object.keys(treeCopy)[
        Math.floor(Math.random() * Object.keys(treeCopy).length)
      ];
      treeCopy[count] = { value: count, children: [] };
      treeCopy[parent].children.push(count);
      count++;
      setTree(treeCopy);
    }, 1);
  }, [tree]);
  return (
    <>
      <main className="home">
        <CodeVisualizer {...data} className="home__code-visualizer" />

        <section className="home__section">
          <h2>Introduction</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero iste
            iure ratione aperiam reprehenderit dolore ipsa architecto enim
            facilis quam corrupti odio rerum repudiandae voluptates voluptate,
            mollitia velit, laudantium debitis? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Eveniet, provident magnam voluptatibus
            delectus libero accusantium odit minus, pariatur doloremque
            perferendis reiciendis debitis maiores ex ipsa autem ea, atque
            similique. Eveniet?
          </p>
          <CodeSnippet>{firstExample}</CodeSnippet>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero iste
            iure ratione aperiam reprehenderit dolore ipsa architecto enim
            facilis quam corrupti odio rerum repudiandae voluptates voluptate,
            mollitia velit, laudantium debitis? Lorem ipsum dolor sit amet
            consectetur adipisicing elit.
          </p>
          <CodeVisualizer
            code={firstExample}
            showEditor={false}
            className="home__section__visualizer boxShadow"
          />
        </section>
      </main>
    </>
  );
};
export default Home;
