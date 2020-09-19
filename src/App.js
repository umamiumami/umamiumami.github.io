import React, { Fragment } from "react";

import Header from "./components/Header";
import Menu from "./components/Menu";
import Photos from "./components/Photos";
import Hours from "./components/Hours";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Fragment>
      <Header />
      <div id="main">
        <Menu />
        <Photos />
        <Hours />
        <Contact />
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;
