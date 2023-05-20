import React from "react";

// Import all Component in containners

import {
  Footer,
  Header,
  Blog,
  Possibility,
  Features,
  WhatGPT3,
} from "./containers";

// imports all components in components
import { Artical, Brand, CTA, Navbar, Feature } from "./components";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg ">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
