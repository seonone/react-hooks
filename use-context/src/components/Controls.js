import React, { useContext } from "react";
import { PlayerContext } from "../playerContext";

const Controls = props => {
  const context = useContext(PlayerContext);
  const { volume, isPlaying, setVolume, start, stop } = context;

  const togglePlay = () => {
    if (isPlaying) stop();
    else start();
  };

  return (
    <div>
      <button onClick={() => togglePlay()}>
        {isPlaying ? "Stop" : "Play"}
      </button>
      <br />
      <input
        type="range"
        value={volume}
        onChange={e => setVolume(e.target.value)}
      />
    </div>
  );
};

export default Controls;
