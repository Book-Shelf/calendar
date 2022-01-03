import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import CalendarHeader from './CalendarHeader';
import React, { useState } from "react";


// const events = [
//   {
//     id: 1,
//     title: 'event 1',
//     start: '2022-01-01T10:00:00',
//     end: '2022-01-01T12:00:00',
//   },
//   {
//     id: 2,
//     title: 'event 2',
//     start: '2021-12-29T13:00:00',
//     end: '2021-12-30T18:00:00',
//   },
//   { id: 3, title: 'event 3', start: '2021-06-17', end: '2021-06-20' },
// ];


function FullCalendarApp() {

  const [events, setEvents] = useState([]);

  return (
    <div className="App">
      <div id="calHeader" className="basicHeader">
        <CalendarHeader page="/Calendar"/>
      </div>
      <div className="calendar">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            center: 'dayGridMonth,timeGridWeek,timeGridDay new',
          }}
          customButtons={{
              new: {
                text: 'new',
                click: () => {
                  var sdateStr = prompt('Enter a start date in YYYY-MM-DD format');
                  var edateStr = prompt('Enter a end date in YYYY-MM-DD format');
                  var titleStr = prompt('Enter a title of your event');
                  var sdate = new Date(sdateStr + 'T00:00:00');
                  var edate = new Date(edateStr + 'T00:00:00')

                  if (!isNaN(sdate.valueOf()) && !isNaN(edate.valueOf())) {

                    setEvents(events.concat({title: titleStr, start: sdate, end: edate}))
                  }
                },
              },
            }
          }
          events={events}
          eventColor="red"
          nowIndicator
          dateClick={(e) => console.log(e.dateStr)}
          eventClick={(e) => console.log(e.event.id)}
          editable={true}
          selectable={true}
          dayMaxEvents={true}
        />
      </div>
    </div>
  );
}

export default FullCalendarApp;