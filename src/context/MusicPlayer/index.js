import React, { useState, useEffect } from 'react';

const MusicPlayerContext = React.createContext();

export function MusicPlayerProvider({ children }) {
  const [value, setValue] = useState({});
  const [musicPlayerActive, setMusicPlayerActive] = useState(false);
  const [musicPlayerPlaying, setMusicPlayerPlaying] = useState(false);

  function play(song) {
    setMusicPlayerActive(true);
    setMusicPlayerPlaying(true);
  }

  function pause() {
    setMusicPlayerPlaying(false);
  }

  function stop() {
    setMusicPlayerPlaying(false);
    setMusicPlayerActive(false);
  }

  useEffect(() => {
    function togglePlaying() {
      setMusicPlayerPlaying((playing) => !playing);
    }

    function toggle() {
      togglePlaying();
      setMusicPlayerActive((active) => !active);
    }

    setValue({
      active: musicPlayerActive,
      playing: musicPlayerPlaying,
      play,
      pause,
      stop,
      toggle,
      togglePlaying
    });
  }, [musicPlayerActive, musicPlayerPlaying]);

  return <MusicPlayerContext.Provider children={children} value={value} />;
}

export default MusicPlayerContext;
