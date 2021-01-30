import React, { useContext } from 'react';
import { store } from '../../store.js';
import './Player.scss';

const Player = () => {
  const { state, dispatch } = useContext(store);
  const { playing } = state;

  const handlePlayerClick = () => {
    if (!playing) {
      try {
        document.getElementById('audio-player').play();
      } catch (e) {
        return;
      }
      dispatch({ type: 'playing', payload: true });
    } else {
      try {
        document.getElementById('audio-player').pause();
      } catch (e) {
        return;
      }
      dispatch({ type: 'playing', payload: false });
    }
  };

  return (
    <button className={`player ${playing ? 'player--playing' : ''}`} onClick={handlePlayerClick}>
      <div className="player__border" />
      <svg />
    </button>
  );
};

export default Player;
