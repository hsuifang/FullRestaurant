import React from "react";

import {
  AboutUs,
  // Chef,
  // FindUs,
  // Footer,
  // Gallery,
  Header
  // Intro,
  // Laurels,
  // SpecialMenu
} from "./container";
import { Navbar } from "./components";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
    </div>
  );
}
// <SpecialMenu />
// <Chef />
// <Intro />
// <Laurels />
// <Gallery />
// <FindUs />
// <Footer />

export default App;
