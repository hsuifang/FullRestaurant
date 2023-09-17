import React from "react";

import {
  AboutUs,
  Chef,
  // FindUs,
  // Footer,
  // Gallery,
  Header,
  Intro,
  // Laurels,
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
    </div>
  );
}
// <Laurels />
// <Gallery />
// <FindUs />
// <Footer />

export default App;
