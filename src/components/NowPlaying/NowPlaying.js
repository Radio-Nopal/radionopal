import React, { useContext } from 'react';
import { store } from '../../store.js';
import './NowPlaying.scss';

const NowPlaying = () => {
  const { state } = useContext(store);
  const { playing } = state;

  return (
    <>
      <div className="now-playing py-4 w-1/5">
        {playing && <span className="now-playing__on"></span>}
        Estás escuchando
        <br />
        <span className="font-noah-medium">defensa personal</span>
      </div>
      <div className="now-playing__info w-1/5">
        @maranadalba y @eupempes magna aliqua Quis ipsum gravida
      </div>
    </>
  );
};

export default NowPlaying;
