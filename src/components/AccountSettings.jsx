import CalendarHeader from './CalendarHeader';
import "./AccountSettings.css";

function AccountSettings() {
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
                            <button className="usernameButton">
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
                            <button className="usernameButton">
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
                            <span className="username-text" style={{
                              paddingLeft: `8px`,
                              fontSize: `20px`
                            }}>
                              Kaprioszka
                            </span>
                            <button className="usernameButton">
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
                            <button className="usernameButton">
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