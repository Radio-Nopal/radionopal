import React /*, { useEffect, useState } */ from 'react';
import { useHistory } from 'react-router-dom';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import esLocale from '@fullcalendar/core/locales/es';

// const calendarUrl = `https://www.googleapis.com/calendar/v3/calendars/${process.env.REACT_APP_CALENDAR_ID}/events?key=${process.env.REACT_APP_API_KEY}`;

/*
{ title: 'event 1', date: '2021-02-09' },
{ title: 'event 2', date: '2021-02-02' }
*/

const Calendar = () => {
  const history = useHistory();
  /*
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch(calendarUrl)
      .then((response) => response.json())
      .then((data) => {
        //   console.log(data);
        const eventsz = data.items
          .filter((item) => item.summary && item.summary.includes('iscel'))
          .map((event) => ({
            //start: event.start.dateTime,
            //end: event.end.dateTime,
            title: event.summary
          }));
        // console.log(eventsz);
        setEvents(eventsz);
      })
      .catch((err) => {
        console.log(events);
        console.error('Oh no, error occured: ', err);
      });
  }, []);
  */
  //console.log(events);
  return (
    <FullCalendar
      locale={esLocale}
      plugins={[dayGridPlugin, interactionPlugin, googleCalendarPlugin]}
      weekends={false}
      initialView="dayGridWeek"
      googleCalendarApiKey={process.env.REACT_APP_API_KEY}
      eventTimeFormat={{
        hour: '2-digit',
        minute: '2-digit',
        meridiem: false
      }}
      eventClick={(arg) => {
        arg.jsEvent.preventDefault();
        console.log(arg);
        if (arg.event._def.extendedProps.location) {
          history.push(`/${arg.event._def.extendedProps.location}`);
        }
      }}
      events={{
        googleCalendarId: process.env.REACT_APP_CALENDAR_ID,
        className: 'gcal-event'
      }}
    />
  );
};

export default Calendar;
