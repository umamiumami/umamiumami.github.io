import React, { Fragment } from "react";

import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

function App() {
  return (
    <Fragment>
      <Header />
      <div id="main">
        <Menu />
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;
