import React from 'react'
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { INITIAL_EVENTS, createEventId } from './event-utils'
import CalendarHeader from "../CalendarHeader";
import GroupList from "../group_list/GroupList";
import EventPopup from '../popup/EventPopup';
import { Button, Card, Row } from 'react-bootstrap';
import "./MainCalendarPage.css";

export default class DemoApp extends React.Component {
  constructor(props) {
    super(props)
    this.calendar = React.createRef();
    this.state.groupInstances.forEach(element => {
      element.checked = true;
    });
    this.state.eventInstance.forEach(element => {
      element.display = "auto";
    });
  }

  editEvent = {
    title: '',
    description: ''
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
    tooltip: false,
    clickX: 0,
    clickY: 0,
    eventTitle: "",
    eventDescription: "",
    eventStart: "",
    eventEnd: "",
    groupInstances: [
      { id: 0, name: 'group1', status: 'a', color: "#ff0000" },
      { id: 1, name: 'group2', status: 'm', color: "#ff0000" },
      { id: 2, name: 'group3', status: 'u', color: "#222344" },
      { id: 3, name: 'group4', status: 'u', color: "#ff0000" },
      { id: 4, name: 'group5', status: 'a', color: "#ff0000" }
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
          <div style={{
            position: "absolute",
            top: this.state.clickY + "px",
            left: this.state.clickX + "px",
            transform: "translate(-50%, -50%)",
            transition: "all 250ms ease-in-out",
            overflow: "hidden",
            zIndex: "100"
          }}
          >
            <Card>
              <Card.Body style={{ maxWidth: "300px", maxHeight: "400px", overflow: "auto" }}>
                <div className="Card-content">
                  <button className="close" style={{
                    cursor: "pointer",
                    position: "absolute",
                    display: "block",
                    padding: "2px 5px",
                    lineHeight: "20px",
                    right: "5px",
                    top: "5px",
                    fontSize: "30px",
                    background: "transparent"
                  }}
                    onClick={() => {
                      this.setState({ tooltip: false })
                    }}
                  >
                    &times;
                  </button>
                </div>
                <Card.Title>{this.state.eventTitle}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Start: {this.state.eventStart}<br /> End: {this.state.eventEnd}</Card.Subtitle>
                <hr className="mt-2 mb-3" />
                <div style={{ overflow: "auto" }}>
                  <Card.Text style={{ fontStyle: "italic", fontSize: "14px" }}>{this.state.eventDescription}</Card.Text>
                </div>
                <Row>
                  <Button onClick={() => {
                    this.setState({ tooltip: false }, this.setState({ tooltipEdit: true }))
                  }}
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => {
                      if (window.confirm(`Are you sure you want to delete the event '${this.state.eventTitle}'?`)) {
                        this.state.clickedEvent.remove();
                        this.setState({ tooltip: false });
                      }
                    }}
                    style={{ marginLeft: "5px" }}
                  >
                    Delete</Button>
                </Row>
              </Card.Body>
            </Card>
          </div>
        )}
        {this.state.tooltipEdit && (
          <div style={{
            position: "absolute",
            top: this.state.clickY + "px",
            left: this.state.clickX + "px",
            transform: "translate(-50%, -50%)",
            transition: "all 250ms ease-in-out",
            overflow: "hidden",
            zIndex: "100"
          }}
          >
            <Card>
              <Card.Body style={{ maxWidth: "300px", maxHeight: "400px", overflow: "auto" }}>
                <div className="Card-content">
                  <button className="close" style={{
                    cursor: "pointer",
                    position: "absolute",
                    display: "block",
                    padding: "2px 5px",
                    lineHeight: "20px",
                    right: "5px",
                    top: "5px",
                    fontSize: "30px",
                    background: "transparent"
                  }}
                    onClick={() => {
                      this.setState({ tooltipEdit: false })
                    }}
                  >
                    &times;
                  </button>
                </div>
                <form className="event-input">
                  <label htmlFor='ev-ed-title'>Title</label>
                  <input 
                    id="ev-ed-title" 
                    className="event-in-title ed-title"
                    type="text"
                    placeholder={this.state.eventTitle}
                    onChange={(e) => {
                      this.editEvent.title = e.target.value
                    }}
                  />
                </form>
                <Row>
                  <Button onClick={() => {
                    if (window.confirm(`Are you sure you want to save changes?`)) {
                      if (this.editEvent.title || this.editEvent.description) {
                        if (this.editEvent.title) {
                          this.state.currentEvents.map((event) => {
                            if (event._def.defId === this.state.clickedEvent._def.defId){
                              event._def.title = this.editEvent.title
                              return event
                            }
                            return event
                          })
                        }
                        this.setState({ tooltipEdit: false }, () => {this.editEvent.title = ''; this.editEvent.description = ''})
                      } else {
                        this.setState({ tooltipEdit: false }, () => {this.editEvent.title = ''; this.editEvent.description = ''})
                      }
                    }
                  }}
                  >
                    Save
                  </Button>
                  <Button
                    onClick={() => {
                      if (window.confirm(`Are you sure you want to cancel editing?`)) {
                        this.setState({ tooltipEdit: false }, this.setState({ tooltip: true}))
                      }
                    }}
                    style={{ marginLeft: "5px" }}
                  >
                    Cancel</Button>
                </Row>
              </Card.Body>
            </Card>
          </div>
        )}
        <CalendarHeader page="/Calendar" />
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
          // eventColor='blue'
          // eventMouseEnter={(event) => this.onEventHover(event)}
          // eventMouseLeave={(event) => this.onEventHoverExit(event)}
          /* you can update a remote database when these fire:
          eventAdd={function(){}}
          eventChange={function(){}}
          eventRemove={function(){}}
          */
          />
          <div className="Grouplist-wrapper" style={{ float: "right" }}>
            <GroupList
              groupInstances={this.state.groupInstances}
              toParentHandler={this.handleCheckboxData}
              addNewGroup={this.handleNewGroup}
              handleChangeColor={this.handleChangedColor}
            />
          </div>
          <EventPopup
            trigger={this.state.popupOpen}
            onClose={this.onPopupClose}
            setNewEvent={this.createNewEvent}
            groups={this.state.groupInstances}
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
    this.setState({ tooltip: false })
  }

  handleWeekendsToggle = () => {
    this.setState({
      weekendsVisible: !this.state.weekendsVisible
    })
  }

  handleChangedColor = (groupInstancesNewColor, groupId, color) => {

    this.state.currentEvents.map(item => {
      if (item.extendedProps.eventGroupId === groupId) {
        item._def.ui.backgroundColor = color;
        item._def.ui.borderColor = color;
        console.log(item)
        this.forceUpdate()
        return item
      }
      return item
    });

    this.setState({
      groupInstances: groupInstancesNewColor
    }, () => console.log(this.state.groupInstances));
  }

  handleNewGroup = (newGroupInstances) => {
    this.setState({
      groupInstances: newGroupInstances
    })
  }


  onPopupClose = () => {
    this.setState({
      popupOpen: false,
    })
  }

  createNewEvent = (data) => {
    let selectInfo = this.state.selectInfo;
    let calendarApi = selectInfo.view.calendar;
    console.log(data)

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
      popupOpen: true,
      selectInfo: selectInfo
    })
    let calendarApi = selectInfo.view.calendar;
    calendarApi.unselect() // clear date selection
  }

  handleEventClick = (clickInfo) => {
    // eslint-disable-next-line no-restricted-globals
    let tmpStart = formatDate(clickInfo.event.start, {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    })
    let tmpEnd = formatDate(clickInfo.event.end, {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    })
    this.setState({
      tooltip: true,
      eventTitle: clickInfo.event.title,
      eventDescription: clickInfo.event.extendedProps.description || "No description",
      eventStart: tmpStart,
      eventEnd: tmpEnd || "Rest of the day",
      clickX: clickInfo.jsEvent.clientX + 200,
      clickY: clickInfo.jsEvent.clientY,
      clickedEvent: clickInfo.event
    })
  }

  handleEvents = (events) => {
    this.setState({
      currentEvents: events
    })
  }

  handleCheckboxData = (data) => {
    console.log(this.state.currentEvents)
    let nEvents = this.state.currentEvents.map((e) => {
      let tmp = e
      tmp.setProp('display', (data.find(element => { return element.name === e.extendedProps.eventGroupId && element.checked === true }) !== undefined) ? 'auto' : 'none');
      return tmp;
    })
    this.setState({ groupInstances: data, eventInstance: nEvents })
    this.calendar.current.render()
  }

  renderEventContent(eventInfo) {
    // console.log(eventInfo.event.display)
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

