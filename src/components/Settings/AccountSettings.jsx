import CalendarHeader from '../CalendarHeader';
import React, {useState} from 'react';
import "./AccountSettings.css";
import { ChangeName } from './changeName';
import { EditButton } from './EditButton';

function AccountSettings() {
  const [changeName, setChangeName] = useState(false);
  const [changeEmail, setChangeEmail] = useState(false);
  const [username, setUsername] = useState("Kaprioszka");
  const [email, setEmail] = useState("Kaprioszka@gmail.com");

  return (
      <div className="App">
        <CalendarHeader page="/Calendar"/>
        <div className="main_content">
          <div className="settings_view" >
            <div className="container_settings">
              <h1>Account</h1>
              <article className="profile">
                <div className="account_info">
                  <div className="account_username">
                    <div className="formgroup">
                      <div className="username_block">
                        <label for="username" style={{
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
                            <EditButton handleOnClick={() => setChangeName("true")} />
                          </p>
                        </div>
                        <ChangeName isChanging={changeName} handleCancelClick={() => setChangeName(false)} text={username} />
                      </div>
                    </div>
                  </div>
                  <div className="account_username">
                    <div className="formgroup">
                      <div className="username_block">
                        <label for="username" style={{
                          lineHeight: `40px`,
                          fontWeight: `600`,
                          marginBottom: `5px`,
                          display: `block`,
                          fontSize: `14px`
                        }}>
                          Email Address
                        </label>
                        <div className="input-wrapper" style={{display: `${changeEmail ? "none" : "block"}`}}>
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
                        <ChangeName isChanging={changeEmail} handleCancelClick={() => setChangeEmail(false)} text={email} />
                      </div>
                    </div>
                  </div>
                  <div className="account_username">
                    <div className="formgroup">
                      <div className="username_block">
                        <label for="username" style={{
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
                        <div className="input-wrapper">
                          <p className="username-container">
                          <EditButton />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="account_username">
                    <div className="formgroup">
                      <div className="username_block">
                        <label for="username" style={{
                          lineHeight: `40px`,
                          fontWeight: `600`,
                          marginBottom: `5px`,
                          display: `block`,
                          fontSize: `14px`
                        }}>
                          Time?
                          <span className="sub_help">
                            (Chosen time)
                          </span>
                        </label>
                        <div className="input-wrapper">
                          <p className="username-container">
                            <span className="username-text" style={{
                              paddingLeft: `8px`,
                              fontSize: `20px`
                            }}>
                              Heuropejiski
                            </span>
                            <EditButton />
                          </p>
                        </div>
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