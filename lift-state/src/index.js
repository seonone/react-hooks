import React from "react";
import ReactDOM from "react-dom";
//
import usePlayerState from "./usePlayerState";
import Player from "./components/Player";
import Controls from "./components/Controls";

import "./styles.css";

function App() {
  const props = usePlayerState();
  return (
    <div className="App">
      <Player {...props} />
      <hr />
      <Controls {...props} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
