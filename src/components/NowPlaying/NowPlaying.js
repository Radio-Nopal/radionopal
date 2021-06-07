import React, { useContext, useEffect } from 'react';
import { io } from 'socket.io-client';
import { store } from '../../store.js';

const twoHoursLater = new Date();
twoHoursLater.setHours(twoHoursLater.getHours() + 1);

const calendarUrl = `https://www.googleapis.com/calendar/v3/calendars/${
  process.env.REACT_APP_CALENDAR_ID
}/events?key=${
  process.env.REACT_APP_API_KEY
}&timeMin=${new Date().toISOString()}&timeMax=${twoHoursLater.toISOString()}&timeZone=America/Mexico_City`;

const NowPlaying = () => {
  const { state, dispatch } = useContext(store);
  const { nowPlaying } = state;

  useEffect(() => {
    const socket = io(process.env.REACT_APP_MENSAJITO_SOCKET_URL, {
      transports: ['websocket', 'polling', 'flashsocket']
    });
    socket.on('estacion', (msg) => {
      console.log(msg.includes('nopalradio'));
      console.log(msg);
      dispatch({ type: 'isOnline', payload: msg.includes('nopalradio') });
    });
    fetch(calendarUrl)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: 'nowPlaying', payload: data.items[0]?.summary });
      })
      .catch((err) => {
        console.error('Oh no, error occured: ', err);
      });
  }, []);

  return <>{nowPlaying}</>;
};

export default NowPlaying;
