import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import './EventPopup.css';
import Dropdown from './Dropdown';
import {Row} from 'react-bootstrap';

export default function EventPopup(props) {
  
  const filterGroups = () => {
    const temp = [...props.groups];
    const filltered = temp.filter((value, index, arr) => (value.status !== "u"))

    return filltered
  }
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [groups, setGroups] = useState(filterGroups());
  const resetThenSet = (id) => {
    const temp = [...groups];
    temp.forEach((item) => {
      item.selected = false;
      
      if (item.id === id) {
        item.selected = true;
      }
    });

    setGroups(temp);
  }

  const unselect = () =>  {
    const temp = [...groups];

    temp.forEach((item) => item.selected = false);

    setGroups(temp);
  }
  
  const getGroupId = () => {
    let id = ""
    groups.forEach((item) => {
      if (item.selected) {
        id = item.name
      }
    })

    return id;
  }

  const getColorId = () => {
    let id = ""
    groups.forEach((item) => {
      if (item.selected) {
        id = item.color
      }
    })

    return id;
  }

  return (
    <Popup
      open={props.trigger}
      position="right center"
      onClose={props.onClose}
      modal
      nested
    >
      {close => (
        <div className="popup-wrapper">
          <button className="close" onClick={close}>
            &times;
          </button>
          <div className="header"> Create new event </div>
          <div className="content" style={{marginLeft: "10px"}}>
            {' '}
            <form className="event-input">
              <label htmlFor='ev-title'>Title</label>
              <input id="ev-title" className="event-in-title" type="text" placeholder='Event Title' onChange={(e) => setTitle(e.target.value)} />
              <label htmlFor='ev-desc'>Description</label>
              <textarea id="ev-desc" className="event-in-desc" 
                placeholder="Description..."
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
              <label htmlFor='ev-group'>Group and event color</label>
              <Row>              
              <div style={{marginLeft: "14px"}}>
                <Dropdown
                  title="Select group"
                  list={groups}
                  resetThenSet={resetThenSet}
                  updateList={() => setGroups(filterGroups())}
                  
                />
              </div>
              </Row>
            </form>
          </div>
          <div style={{float: "left", marginTop: "20px", marginLeft: "14px", marginBottom: "20px"}}>
            <button
              className="button-popup"
              onClick={() => {
                props.setNewEvent({
                  title,
                  description,
                  groupId: getGroupId(),
                  color: getColorId()
                });
                setTitle('');
                unselect();
                close();
              }}
            >
              Save
            </button>
            
            <button
              className="button-popup button"
              style={{marginLeft: "20px"}}
              onClick={() => {
                setTitle('');
                unselect();
                close();
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
}