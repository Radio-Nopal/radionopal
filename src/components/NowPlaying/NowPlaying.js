import React, { useContext, useEffect } from 'react';
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
