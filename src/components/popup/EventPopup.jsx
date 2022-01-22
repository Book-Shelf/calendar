import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import './EventPopup.css';
import Dropdown from './Dropdown';

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

    temp.forEach((item) => item.selected = false);
    temp[id].selected = true;

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

  return (
    <Popup
      open={props.trigger}
      position="right center"
      onClose={props.onClose}
      modal
      nested
    >
      {close => (
        <div className="kaput">
          <button className="close" onClick={close}>
            &times;
          </button>
          <div className="header"> Create new event </div>
          <div className="content">
            {' '}
            <input type="text" onChange={(e) => setTitle(e.target.value)} />
            <input type="text" onChange={(e) => setDescription(e.target.value)} />

            <Dropdown
                    title="Select group"
                    list={groups}
                    resetThenSet={resetThenSet}
                />
          </div>
          <div className="actions">
            <button
              className="button"
              onClick={() => {
                props.setNewEvent({
                  title,
                  description,
                  groupId: getGroupId()
                });
                setTitle('');
                unselect();
                close();
              }}
            >
              Save
            </button>
            
            <button
              className="button"
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