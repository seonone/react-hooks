import React from "react";

export const PlayerContext = React.createContext({
  isPlaying: false,
  volume: 80,
  setVolume: () => {},
  start: () => {},
  stop: () => {}
});
