import CalendarHeader from '../CalendarHeader';
import React, { useState } from 'react';
import "./AccountSettings.css";
import { ChangeName } from './ChangeName';
import { EditButton } from './EditButton';
import { ChangePassword } from './ChangePassword';
import { ChangeTime } from './ChangeTime';

const getTimeZone = (times) => {
  const selectedItem = times.filter((item) => item.selected)

  return { 
    title: selectedItem[0].title,
    id: selectedItem[0].id 
  };
}

function AccountSettings() {
  const [times, setTimes] = useState([
    {
      id: 0,
      title: "Central European Time",
      selected: true
    },
    {
      id: 1,
      title: "Eastern European Time",
      selected: false
    },
    {
      id: 2,
      title: "Western European Time",
      selected: false
    },
    {
      id: 3,
      title: "Greenwich Mean Time",
      selected: false
    }
  ])

  const [changeName, setChangeName] = useState(false);
  const [changeEmail, setChangeEmail] = useState(false);
  const [changePass, setChangePass] = useState(false);
  const [changeTime, setChangeTime] = useState(false);
  const [username, setUsername] = useState("Kaprioszka");
  const [email, setEmail] = useState("Kaprioszka@gmail.com");
  const [timezone, setTimezone] = useState(getTimeZone(times));

  const resetThenSet = (id) => {
    const temp = [...times];
    console.log(id)
  
    temp.forEach((item) => item.selected = false);
    temp[id].selected = true;
  
    setTimes(temp);
  }

  return (
    <div className="App">
      <CalendarHeader page="/Calendar" />
      <div className="main_content">
        <div className="settings_view" >
          <div className="container_settings">
            <h1>Account</h1>
            <article className="profile">
              <div className="account_info">
                <div className="account_username">
                  <div className="formgroup">
                    <div className="account_block">
                      <label style={{
                        lineHeight: `40px`,
                        fontWeight: `600`,
                        marginBottom: `5px`,
                        display: `block`,
                        fontSize: `14px`
                      }}>
                        Your Username
                        <span className="sub_help">
                          (This is how users will see you)
                        </span>
                      </label>
                      <div className="input-wrapper" style={{
                        display: `${changeName ? "none" : "block"}`
                      }}>
                        <p className="username-container">
                          <span className="username-text" style={{
                            paddingLeft: `8px`,
                            fontSize: `20px`
                          }}>
                            {username}
                          </span>
                          <EditButton 
                            handleOnClick={() => setChangeName("true")} 
                          />
                        </p>
                      </div>
                      <ChangeName 
                        type="text" 
                        isChanging={changeName} 
                        handleCancelClick={() => setChangeName(false)} 
                        setState={setUsername}
                        state={username}
                        placeholder="Enter username" 
                      />
                    </div>
                  </div>
                </div>
                <div className="account_email">
                  <div className="formgroup">
                    <div className="account_block">
                      <label style={{
                        lineHeight: `40px`,
                        fontWeight: `600`,
                        marginBottom: `5px`,
                        display: `block`,
                        fontSize: `14px`
                      }}>
                        Email Address
                      </label>
                      <div className="input-wrapper" style={{ display: `${changeEmail ? "none" : "block"}` }}>
                        <p className="username-container">
                          <span className="username-text" style={{
                            paddingLeft: `8px`,
                            fontSize: `20px`
                          }}>
                            {email}
                          </span>
                          <EditButton handleOnClick={() => setChangeEmail("true")} />
                        </p>
                      </div>
                      <ChangeName 
                        type="email"
                        isChanging={changeEmail}
                        handleCancelClick={() => setChangeEmail(false)}
                        placeholder="example@gmail.com"
                        setState={setEmail}
                        state={email}
                      />
                    </div>
                  </div>
                </div>
                <div className="account_timezone">
                  <div className="formgroup">
                    <div className="account_block">
                      <label style={{
                        lineHeight: `40px`,
                        fontWeight: `600`,
                        marginBottom: `5px`,
                        display: `block`,
                        fontSize: `14px`
                      }}>
                        Timezone
                        <span className="sub_help">
                          (Chosen timezone)
                        </span>
                      </label>
                      <div className="input-wrapper" style={{ display: `${changeTime ? "none" : "block"}` }}>
                        <p className="username-container">
                          <span className="username-text" style={{
                            paddingLeft: `8px`,
                            fontSize: `20px`
                          }}>
                            {timezone.title}
                          </span>
                          <EditButton handleOnClick={() => setChangeTime(true)} />
                        </p>
                      </div>
                      <ChangeTime 
                        times={times} 
                        setTimes={setTimes} 
                        isChanging={changeTime}
                        handleCancelClick={() => {
                          setChangeTime(false);
                          const selectedItem = times.filter((item) => item.selected)
                          const temp = [...times];

                          temp.forEach((item) => item.selected = false);
                          temp[timezone.id].selected = true;
                          setTimes(temp);
                        }}
                        handleSaveClick={() => {
                          setTimezone(getTimeZone(times));
                          setChangeTime(false);
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="account_password">
                  <div className="formgroup">
                    <div className="account_block">
                      <label style={{
                        lineHeight: `40px`,
                        fontWeight: `600`,
                        marginBottom: `5px`,
                        display: `block`,
                        fontSize: `14px`
                      }}>
                        Password
                        <span className="sub_help">
                          (You can change your password here)
                        </span>
                      </label>
                      <div className="input-wrapper" style={{ display: `${changePass ? "none" : "block"}` }}>
                        <p className="username-container">
                          <EditButton handleOnClick={() => setChangePass(true)} />
                        </p>
                      </div>
                      <ChangePassword isChanging={changePass} handleCancelClick={() => setChangePass(false)} />
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountSettings;