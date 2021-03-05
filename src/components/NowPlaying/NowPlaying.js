import React, { useContext, useEffect } from 'react';
import { getLastTweet } from '../../util/getLastTweet/getLastTweet';
import { store } from '../../store.js';

const NowPlaying = () => {
  const { state, dispatch } = useContext(store);
  const { nowPlaying } = state;

  useEffect(() => {
    getLastTweet((data) => {
      dispatch({ type: 'nowPlaying', payload: data[0].tweet });
    });
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: nowPlaying }}></div>;
};

export default NowPlaying;
