import React from "react";

const Controls = props => {
  const { volume, isPlaying, setVolume, start, stop } = props;

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
