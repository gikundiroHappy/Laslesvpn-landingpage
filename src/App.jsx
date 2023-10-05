import React from "react";
import Navbar from "./components/navbar";
import Content from "./components/content";
import Details from "./components/details";
import Features from "./components/features";
import Plan from "./components/plan";
function App() {
  return (
    <div className=" space-y-10 font-abc ">
      <Navbar />
      <Content />
      <Details />
      <Features />
      <Plan />
    </div>
  );
}

export default App;
