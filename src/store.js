import React, { createContext, useReducer } from 'react';

const initialState = {
  playing: false,
  volume: 0.9,
  nowPlaying: '',
  lastTweet: ''
};

const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'playing':
        return { ...state, playing: action.payload };
      case 'volume':
        return { ...state, volume: action.payload };
      case 'nowPlaying':
        return { ...state, nowPlaying: action.payload };
      case 'lastTweet':
        return { ...state, lastTweet: action.payload };
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
