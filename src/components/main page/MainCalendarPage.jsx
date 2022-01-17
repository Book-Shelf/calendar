import React from 'react'
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { INITIAL_EVENTS, createEventId } from './event-utils'
import CalendarHeader from "../CalendarHeader";
import GroupList from "../group_list/GroupList";
import EventPreview from "../event/EventPreview";

export default class DemoApp extends React.Component {
constructor(props){
  super(props)
  this.calendar = React.createRef();
  this.state.groupInstances.forEach(element => {
    element.checked=true;
  });
  this.state.eventInstance.forEach(element => {
    element.display="auto";
  });
}
  state = {
    weekendsVisible: true,
    currentEvents: [],
    eventInstance: INITIAL_EVENTS /*{
      name: 'event1',
      description: 'some event',
      date_info: '12.03.2022 15:00 - 13.03.2022 03:00'
    }*/,
    groupInstances: [
      {name: 'group1', status: 'a'}, 
      {name: 'group2', status: 'm'}, 
      {name: 'group3', status: 'u'}, 
      {name: 'group4', status: 'u'}, 
      {name: 'group5', status: 'u'}, 
      {name: 'group6', status: 'a'}, 
      {name: 'group7', status: 'u'}, 
      {name: 'group8', status: 'm'}, 
      {name: 'group9', status: 'm'}, 
      {name: 'group10', status: 'm'}, 
      {name: 'group11', status: 'a'}, 
      {name: 'group12', status: 'm'}, 
      {name: 'group13', status: 'u'}, 
      {name: 'group14', status: 'u'}, 
      {name: 'group15', status: 'u'}, 
      {name: 'group16', status: 'a'}, 
      {name: 'group17', status: 'u'}, 
      {name: 'group18', status: 'm'}, 
      {name: 'group19', status: 'm'}
    ]
  }
 
  render() {
    return (
      <div className='demo-app' style={{
				width: "100%",
				position: "absolute",
				top: "0",
				left: "0",
				margin: "0",
			}}>
        <CalendarHeader page="/Calendar"/>
        <div className='demo-app-main'>
          <FullCalendar
          ref={this.calendar}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            initialView='dayGridMonth'
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={this.state.weekendsVisible}
            initialEvents={/*INITIAL_EVENTS*/this.state.eventInstance} // alternatively, use the `events` setting to fetch from a feed
            select={this.handleDateSelect}
            eventContent={this.renderEventContent} // custom render function
            eventClick={this.handleEventClick}
            eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
            /* you can update a remote database when these fire:
            eventAdd={function(){}}
            eventChange={function(){}}
            eventRemove={function(){}}
            */
          />
          <div className="Grouplist-wrapper" style={{float: "right"}}>
            <GroupList groupInstances={this.state.groupInstances} toParentHandler={this.handleCheckboxData} />
          </div>
        </div>
      </div>
    )
  }

  handleWeekendsToggle = () => {
    this.setState({
      weekendsVisible: !this.state.weekendsVisible
    })
  }

  handleDateSelect = (selectInfo) => {
    window.myEventArray = (this.calendar.current.getApi().getEvents())
    let title = prompt('Please enter a new title for your event')
    let calendarApi = selectInfo.view.calendar

    calendarApi.unselect() // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      })
    }
  }

  handleEventClick = (clickInfo) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove()
    }
  }

  handleEvents = (events) => {
    this.setState({
      currentEvents: events
    })
    console.log(events)
  }
  handleCheckboxData = (data) => {
    console.log(this.state.currentEvents)
    let nEvents = this.state.currentEvents.map((e)=>{
      let tmp=e
      tmp.setProp('display',(data.find(element => {return element.name === e.extendedProps.eventGroupId && element.checked === true})!==undefined)?'auto':'none');
      return tmp;
    })
    this.setState({groupInstances:data,eventInstance:nEvents})
    console.log(this.state)
    this.calendar.current.render()
  }
  renderEventContent(eventInfo) {
  console.log(eventInfo.event.display)
  if (eventInfo.event.extendedProps.eventGroupId === "group1") {
   // eventInfo.event.setProp('display','none')

  }
  
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}

}

