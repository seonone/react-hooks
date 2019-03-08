import React, { useContext } from "react";
import { PlayerContext } from "../playerContext";

const Player = props => {
  const context = useContext(PlayerContext);
  const { volume, isPlaying } = context;

  return (
    <ul>
      <li>{isPlaying ? "Playing" : "Stopped"}</li>
      <li>Vol: {volume}</li>
    </ul>
  );
};

export default Player;
