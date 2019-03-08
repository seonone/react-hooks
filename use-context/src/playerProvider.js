import React, { useState } from "react";
import { PlayerContext } from "./playerContext";

const PlayerProvider = ({ children }) => {
  const setVolume = volume => {
    setPlayerState(prevState => {
      return { ...prevState, volume };
    });
  };
  const start = () => {
    setPlayerState(prevState => {
      return { ...prevState, isPlaying: true };
    });
  };
  const stop = () => {
    setPlayerState(prevState => {
      return { ...prevState, isPlaying: false };
    });
  };

  const state = {
    volume: 80,
    isPlaying: false,
    setVolume,
    start,
    stop
  };

  const [playerState, setPlayerState] = useState(state);

  return (
    <PlayerContext.Provider value={playerState}>
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerProvider;
