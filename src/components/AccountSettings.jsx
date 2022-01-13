import CalendarHeader from './CalendarHeader';
import "./AccountSettings.css";

function AccountSettings() {
  return (
      <div className="App">
        <CalendarHeader page="/Calendar"/>
        <div className="SettingSection" style={{ display: `flex`}}>
          <div className="SettingsColumn" style={{
            width: `100%`,
            height: `100%`,
            alignItems: `center`,
            paddingLeft: `200px`,
            paddingRight: `200px`,
            display: `flex`,
            flexDirection: `column`
          }}>
            <h1>Ustawienia</h1>
            <form>
              <label for="userName" style={{paddingRight: `5px`}}>Nazwa uzytkownika:</label>
              <input type="text" id="userName" name="userName"></input><br></br><br></br>
              <label for="password" style={{paddingRight: `5px`}}>Haslo:</label>
              <input type="password" id="password" name="password"></input>
            </form>
            <button style={{position: `relative`, top: `10px`}}>Zapisz</button>

          </div>
        </div>  
      </div>
    );
  }

  export default AccountSettings;