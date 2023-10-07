import React from "react";
import Navbar from "./components/navbar";
import Content from "./components/content";
import Details from "./components/details";
import Features from "./components/features";
import Plan from "./components/plan";
import GlobalNetwork from "./components/globalNetwork";
import Stories from "./components/stories";
import Subscription from "./components/subscription";
import Footer from "./components/footer";
function App() {
  return (
    <div className="space-y-10 font-abc">
      <Navbar />
      <Content />
      <Details />
      <Features />
      <Plan />
      <GlobalNetwork />
      <Stories />
      <Subscription />
      <Footer />
    </div>
  );
}

export default App;
