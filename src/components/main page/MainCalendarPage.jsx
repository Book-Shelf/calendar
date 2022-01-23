import React from 'react'
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { INITIAL_EVENTS, createEventId } from './event-utils'
import CalendarHeader from "../CalendarHeader";
import GroupList from "../group_list/GroupList";
import EventPopup from '../popup/EventPopup'
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { Card } from 'react-bootstrap'

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
    popupOpen: false,
    weekendsVisible: true,
    selectInfo: null,
    currentEvents: [],
    eventInstance: INITIAL_EVENTS /*{
      name: 'event1',
      description: 'some event',
      date_info: '12.03.2022 15:00 - 13.03.2022 03:00'
    }*/,
    colors: [{id: 0, name: 'red'}, {id: 1, name: 'green'}, {id: 2, name: 'blue'}],
    tooltip: false,
    eventTitle: "",
    eventDescription: "",
    eventStart: "",
    eventEnd: "",
    groupInstances: [
      {id: 0, name: 'group1', status: 'a'}, 
      {id: 1, name: 'group2', status: 'm'}, 
      {id: 2, name: 'group3', status: 'u'}, 
      {id: 3, name: 'group4', status: 'u'}, 
      {id: 4, name: 'group5', status: 'a'}
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
        {this.state.tooltip && (
          <div style={{position: "absolute", top: "50%", left: "50%", marginRight: "-50%", transform: "translate(-50%, -50%)", zIndex: "100"}}>
            <Card>
              <Card.Body>
                <Card.Title>{this.state.eventTitle}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Start: {this.state.eventStart}<br/> End: {this.state.eventEnd}</Card.Subtitle>
                <hr className="mt-2 mb-3"/>
                <Card.Text style={{fontStyle: "italic"}}>{this.state.eventDescription}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        )}
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
            eventColor='red'
            eventMouseEnter={(event) => this.onEventHover(event)}
            eventMouseLeave={(event) => this.onEventHoverExit(event)}
            /* you can update a remote database when these fire:
            eventAdd={function(){}}
            eventChange={function(){}}
            eventRemove={function(){}}
            */
          />
          <div className="Grouplist-wrapper" style={{float: "right"}}>
            <GroupList groupInstances={this.state.groupInstances} toParentHandler={this.handleCheckboxData} />
          </div>
          <EventPopup 
            trigger={this.state.popupOpen} 
            onClose={this.onPopupClose} 
            setNewEvent={this.createNewEvent}
            groups={this.state.groupInstances}
            colors={this.state.colors}
          />
        </div>
      </div>
    )
  }

  onEventHover = (event) => {

    let tmpStart = formatDate(event.event.start, {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    })
    let tmpEnd = formatDate(event.event.end, {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    })
    this.setState({
      tooltip: true,
      eventTitle: event.event.title,
      eventDescription: event.event.extendedProps.description || "No description",
      eventStart: tmpStart,
      eventEnd: tmpEnd || "Rest of the day"
    })
  }

  onEventHoverExit = (event) => {
    this.setState({tooltip: false})
  }

  handleWeekendsToggle = () => {
    this.setState({
      weekendsVisible: !this.state.weekendsVisible
    })
  }


  onPopupClose = () => {
    this.setState({
      popupOpen : false,
    })
  }

  createNewEvent = (data) => {
    let selectInfo = this.state.selectInfo;
    let calendarApi = selectInfo.view.calendar;

    if (data.title && data.groupId) {
      calendarApi.addEvent({
        id: createEventId(),
        title: data.title,
        description: data.description,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        eventGroupId: data.groupId,
        allDay: selectInfo.allDay,
        color: data.color
      })
    }
    
    this.setState({
      selectInfo: null,
    })
  }

  handleDateSelect = (selectInfo) => {
    window.myEventArray = (this.calendar.current.getApi().getEvents())
    this.setState({
      popupOpen : true,
      selectInfo: selectInfo
    })
    let calendarApi = selectInfo.view.calendar;
    calendarApi.unselect() // clear date selection
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

