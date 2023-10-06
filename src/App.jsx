import React from "react";
import Navbar from "./components/navbar";
import Content from "./components/content";
import Details from "./components/details";
import Features from "./components/features";
import Plan from "./components/plan";
import GlobalNetwork from "./components/globalNetwork";
import Stories from "./components/stories";
import Subscription from "./components/subscription";
function App() {
  return (
    <div className=" space-y-10 font-abc sm:bg-yellow-300 md:bg-green-300 lg:bg-pink-300 xl:bg-blue-300 2xl:bg-red-300">
      {/* sm:bg-yellow-300 md:bg-green-300 lg:bg-pink-300 xl:bg-blue-300 2xl:bg-red-300 */}
      <Navbar />
      <Content />
      <Details />
      <Features />
      <Plan />
      <GlobalNetwork />
      <Stories />
      <Subscription />
    </div>
  );
}

export default App;
