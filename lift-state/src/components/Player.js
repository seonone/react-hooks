import React from "react";

const Player = props => {
  const { volume, isPlaying } = props;

  return (
    <ul>
      <li>{isPlaying ? "Playing" : "Stopped"}</li>
      <li>Vol: {volume}</li>
    </ul>
  );
};

export default Player;
