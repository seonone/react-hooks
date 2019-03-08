import React, { useState } from "react";
import ReactDOM from "react-dom";
//
import TitleBrowser from "./components/TitleBrowser";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <TitleBrowser />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
