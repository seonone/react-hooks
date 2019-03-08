import React, { useContext } from "react";
import ReactDOM from "react-dom";
//
import PlayerProvider from "./playerProvider";
import Player from "./components/Player";
import Controls from "./components/Controls";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <PlayerProvider>
        <Player />
        <hr />
        <Controls />
      </PlayerProvider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
