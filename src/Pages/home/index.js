import React, { useState, useEffect } from "react";

// import { Tree } from "react-data-structures";
import {
  minesweeper,
  firstExample,
  secondExample,
  thirdExample,
} from "../../Assets/code-examples/home-codes";

import CodeVisualizer from "../../Components/code-visualizer";
// import Header from "../../Components/header";

import "./style.css";
import "../../Shared/fonts.css";
import "../../Shared/utilities.css";
import CodeSnippet from "../../Components/code-snippet";

const data = {
  code: minesweeper,
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
          <h2>Code visualizer</h2>
          <p>
            Code visualizer improve algorithms and data structures understanding
            with visualization of data structures with minimum change to the
            code. Write an algorithm, add some lines of code and you're ready to
            go.
            <br />
            <a href="https://github.com/ErickJoestar/code-visualizer">
              Code visualizer
            </a>{" "}
            is an open source project, anyone can contribute writing an
            algorithm, fixing bugs or improving the application, you just need a
            github account.
          </p>
          <h3> How it works</h3>
          <p>
            There are three main aspects in code visulizer, the{" "}
            <b>Algorithm canvas</b>, the <b>Strutures</b> and the{" "}
            <b>Selections</b>.
            <br /> The algorithm canvas is an object that is in charge to{" "}
            <i>draw</i> content on the visualizer, i will recibe a structure and{" "}
            <i>watch</i> for changes.
            <br /> There are multiple data structures in code visualizer, first
            we have the array in one dimension or two dimensions, to create an{" "}
            <i>structure</i> you just need to create a new instance of the
            requested class, then you give it an inivial value and a name.
          </p>

          <CodeSnippet height="20rem">{firstExample}</CodeSnippet>
          <p>
            When you are done writing your code and drawing to the canvas you
            can build it to visualizer in the visualizator, just click on the
            wrench icon to <b>build</b> it, if everything goes correctly you
            will see your structures in the visualizator.
            <br /> In the top part you will see the <b>controls</b>, how many
            steps you code generated and modify the speed that it's reproduced
          </p>
          <CodeVisualizer
            code={firstExample}
            showEditor={false}
            className="home__section__visualizer boxShadow"
          />
          <h3>Selections</h3>
          <p>
            Visualizing data structure is not enough to undertand what an
            algorithm is doing, to improve the experience you can <b>select</b>{" "}
            some elements in the data structure, for example lets say that you
            want to iterate through each one of the elements on the array and
            show to the user where you are in determinated step, you can
            highligt the elements with the <i>select</i> method on the
            structure. <br />
            Here is an example.
          </p>
          <CodeSnippet height="25rem">{secondExample}</CodeSnippet>
          <CodeVisualizer
            code={secondExample}
            showEditor={false}
            className="home__section__visualizer boxShadow"
          />
          <p>
            If you didn't notice the selection have a default style, wich is a
            lighter background, but if you want multiple selections with
            different colors you need something more advaned, you can pass as
            second argument the background color of the element and as third
            argument the color of the font.
            <br /> This code iterate through the array and then select the
            highest among all with red and the the minimum with blue.
          </p>
          <CodeSnippet height="55rem">{thirdExample}</CodeSnippet>
          <CodeVisualizer
            code={thirdExample}
            showEditor={false}
            className="home__section__visualizer boxShadow"
          />
        </section>
      </main>
    </>
  );
};
export default Home;
