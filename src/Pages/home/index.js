import React from "react";

import CodeVisualizer from "../../Components/code-visualizer";
import Header from "../../Components/header";

import "./style.css";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <CodeVisualizer />
        <div className="fill" />
      </main>
    </>
  );
};
export default Home;
