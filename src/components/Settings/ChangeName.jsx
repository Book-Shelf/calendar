import React, {useState} from "react";

export function ChangeName(props) {

    const [buttonSaveBgColor, setButtonSaveBgColor] = useState("#2c3e50");
    const [buttonCancelBgColor, setButtonCancelBgColor] = useState("#2c3e50");

    return (
        <div className="ChangeUsername" style={{
            display: `${props.isChanging ? "inline-block" : "none"}`}}>
              <input className="username_input" type="text" placeholder={props.text} />
              <button className="input_Button" style={{
                background: `${buttonSaveBgColor}`}}
                onMouseEnter={() => setButtonSaveBgColor("#1e2b37")}
                onMouseLeave={() => setButtonSaveBgColor("#2c3e50")}
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