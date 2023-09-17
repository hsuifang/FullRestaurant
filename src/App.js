import React from "react";

import {
  AboutUs,
  Chef,
  // FindUs,
  // Footer,
  Gallery,
  Header,
  Intro,
  Laurels,
  SpecialMenu
} from "./container";
import { Navbar } from "./components";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
    </div>
  );
}
// <FindUs />
// <Footer />

export default App;
