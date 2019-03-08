import React, { useState } from "react";

const usePlayerState = () => {
  const [volume, setVolume] = useState(80);
  const [isPlaying, setPlaying] = useState(false);

  const stop = () => {
    setPlaying(false);
  };

  const start = () => {
    setPlaying(true);
  };

  return {
    volume,
    setVolume,
    isPlaying,
    start,
    stop
  };
};

export default usePlayerState;
