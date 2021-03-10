import React, { useRef, useEffect, memo } from 'react';
import { useHistory } from 'react-router-dom';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import esLocale from '@fullcalendar/core/locales/es';

const Calendar = ({ view }) => {
  const history = useHistory();
  const calendarRef = useRef();

  useEffect(() => {
    changeView(view);
  }, [view]);

  const changeView = (view) => {
    const API = getApi();

    API && API.changeView(view);
  };

  const getApi = () => {
    const { current: calendarDom } = calendarRef;

    return calendarDom ? calendarDom.getApi() : null;
  };
  return (
    <FullCalendar
      locale={esLocale}
      plugins={[dayGridPlugin, interactionPlugin, googleCalendarPlugin]}
      weekends={false}
      ref={calendarRef}
      // defaultView={view}
      initialView={view}
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

export default memo(Calendar);
