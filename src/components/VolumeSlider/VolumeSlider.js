import React, { useContext } from 'react';
import { FaVolumeUp, FaVolumeOff, FaVolumeDown } from 'react-icons/fa';
import { store } from '../../store.js';
import './VolumeSlider.scss';

const VolumeSlider = () => {
  const { state, dispatch } = useContext(store);
  const { volume } = state;
  const mute = () => {
    const volumeLevel = volume > 0.1 ? 0 : 1;
    dispatch({ type: 'volume', payload: volumeLevel });
  };
  return (
    <div className="volume-slider flex">
      <button className="volume-slider__speaker mr-2 float-left hidden md:block" onClick={mute}>
        {volume < 0.1 ? (
          <FaVolumeOff size="1.5em" />
        ) : volume < 0.5 ? (
          <FaVolumeDown size="1.5em" />
        ) : (
          <FaVolumeUp size="1.5em" />
        )}
      </button>
      <input
        className="volume-slider__slider mt-1 hidden md:block"
        type="range"
        min={0.0}
        max={1}
        step={0.01}
        value={volume}
        onChange={(event) => {
          document.getElementById('audio-player').volume = volume;
          dispatch({ type: 'volume', payload: event.target.value });
        }}
      />
    </div>
  );
};

export default VolumeSlider;
