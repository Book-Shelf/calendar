import CalendarHeader from './CalendarHeader';
import React, {useState} from 'react';
import "./AccountSettings.css";

function AccountSettings() {

  const [buttonUserBgColor, setButtonUserBgColor] = useState("#2c3e50");
  const [buttonEmailBgColor, setButtonEmailBgColor] = useState("#2c3e50");
  const [buttonPassBgColor, setButtonPassBgColor] = useState("#2c3e50");
  const [buttonTimeBgColor, setButtonTimeBgColor] = useState("#2c3e50");

  const buttonUserStyle={
    background: `${buttonUserBgColor}`    
  }

  const buttonEmailStyle={
    background: `${buttonEmailBgColor}`    
  }

  const buttonPassStyle={
    background: `${buttonPassBgColor}`    
  }

  const buttonTimeStyle={
    background: `${buttonTimeBgColor}`    
  }

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
                        <div className="input-wrapper">
                          <p className="username-container">
                            <span className="username-text" style={{
                              paddingLeft: `8px`,
                              fontSize: `20px`
                            }}>
                              Kaprioszka
                            </span>
                            <button className="usernameButton"
                              type="button" style={buttonUserStyle}
                              onMouseEnter={() => setButtonUserBgColor("#1e2b37")}
                              onMouseLeave={() => setButtonUserBgColor("#2c3e50")}
                            >
                              Edit
                            </button>
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
                          Email Address
                        </label>
                        <div className="input-wrapper">
                          <p className="username-container">
                            <span className="username-text" style={{
                              paddingLeft: `8px`,
                              fontSize: `20px`
                            }}>
                              Kaprioszka
                            </span>
                            <button className="usernameButton"
                              type="button" style={buttonEmailStyle}
                              onMouseEnter={() => setButtonEmailBgColor("#1e2b37")}
                              onMouseLeave={() => setButtonEmailBgColor("#2c3e50")}
                            >
                              Edit
                            </button>
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
                          Password
                          <span className="sub_help">
                            (You can change your password here)
                          </span>
                        </label>
                        <div className="input-wrapper">
                          <p className="username-container">
                            <button className="usernameButton"
                              type="button" style={buttonPassStyle}
                              onMouseEnter={() => setButtonPassBgColor("#1e2b37")}
                              onMouseLeave={() => setButtonPassBgColor("#2c3e50")}
                            >
                              Edit
                            </button>
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
                              Kaprioszka
                            </span>
                            <button className="usernameButton"
                              type="button" style={buttonEmailStyle}
                              onMouseEnter={() => setButtonTimeBgColor("#1e2b37")}
                              onMouseLeave={() => setButtonTimeBgColor("#2c3e50")}
                            >
                              Edit
                            </button>
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