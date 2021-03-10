import React, { useContext, useEffect } from 'react';
import { getLastTweet } from '../../util/getLastTweet/getLastTweet';
import { store } from '../../store.js';

const LastTweet = () => {
  const { state, dispatch } = useContext(store);
  const { lastTweet } = state;

  useEffect(() => {
    getLastTweet((data) => {
      dispatch({ type: 'lastTweet', payload: data[0].tweet });
    });
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: lastTweet }}></div>;
};

export default LastTweet;
