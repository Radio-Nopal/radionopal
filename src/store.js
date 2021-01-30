import React, { createContext, useReducer } from 'react';

const initialState = {
  playing: false,
  volume: 0.9
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
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
