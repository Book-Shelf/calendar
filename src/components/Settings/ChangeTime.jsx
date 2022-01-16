import React, {useState} from "react";
import Dropdown from './Dropdown';


export function ChangeTime(props) {

    const [buttonSaveBgColor, setButtonSaveBgColor] = useState("#2c3e50");
    const [buttonCancelBgColor, setButtonCancelBgColor] = useState("#2c3e50");
    const resetThenSet = (id) => {
        const temp = [...props.times];

        temp.forEach((item) => item.selected = false);
        temp[id].selected = true;

        props.setTimes(temp);
    }

    return (
        <div className="ChangeTime" style={{
            display: `${props.isChanging ? "inline-flex" : "none"}`}}>
                <Dropdown
                    title="Select timezone"
                    list={props.times}
                    resetThenSet={resetThenSet}
                />
                <button className="input_Button" style={{
                    background: `${buttonSaveBgColor}`}}
                    onMouseEnter={() => setButtonSaveBgColor("#1e2b37")}
                    onMouseLeave={() => setButtonSaveBgColor("#2c3e50")}
                    onClick={props.handleSaveClick}
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