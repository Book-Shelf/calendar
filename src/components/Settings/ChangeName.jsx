import React, {useState} from "react";
import { useInput } from "./settingsUtils"

export function ChangeName(props) {

    const [buttonSaveBgColor, setButtonSaveBgColor] = useState("#2c3e50");
    const [buttonCancelBgColor, setButtonCancelBgColor] = useState("#2c3e50");
    const newState = useInput(props.state);

    return (
        <div className="ChangeUsername" style={{
            display: `${props.isChanging ? "inline-block" : "none"}`}}>
              <input className="username_input" 
                type={props.type}
                placeholder={props.placeholder}
                {...newState}
              />
              <button className="input_Button" style={{
                background: `${buttonSaveBgColor}`}}
                onMouseEnter={() => setButtonSaveBgColor("#1e2b37")}
                onMouseLeave={() => setButtonSaveBgColor("#2c3e50")}
                onClick={() => {
                  if (newState.value !== props.state && 
                      newState.value !== "") {
                    props.setState(newState.value);
                  }
                  props.handleCancelClick();
                }}
              >
                Save</button>
              <button className="input_Button" style={{
                marginLeft: `2px`, 
                background: `${buttonCancelBgColor}`}}
                onMouseEnter={() => setButtonCancelBgColor("#1e2b37")}
                onMouseLeave={() => setButtonCancelBgColor("#2c3e50")}
                onClick={props.handleCancelClick}
              >
                Cancel</button>
        </div>
    )
}