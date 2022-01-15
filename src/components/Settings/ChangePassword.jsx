import React, {useState} from "react";
import { useInput } from "./settingsUtils"

export function ChangePassword(props) {
    const currentProps = useInput();
    const newProps = useInput();
    const reNewProps = useInput();
    const [buttonSaveBgColor, setButtonSaveBgColor] = useState("#2c3e50");
    const [buttonCancelBgColor, setButtonCancelBgColor] = useState("#2c3e50");

    return (
        <div className="ChangePassword" style={{
            display: `${props.isChanging ? "grid" : "none"}`}}>
                <div className="password-wrapper">
                    <div className="label-input">
                        <label className="password_label" for="curr_pass">Current Password</label>
                        <input id="curr_pass" className="password_input" type="password"
                            {...currentProps} placeholder="Enter current password" />
                    </div>
                </div>
                <div className="new-password-wrapper" style={{display: `flex`}}>
                    <div className="label-input">
                        <label className="password_label" for="new_pass">New Password</label>
                        <input id="new_pass" className="password_input" type="password" 
                            {...newProps} placeholder="Enter new password" />
                    </div>
                    <div className="label-input" style={{paddingLeft: `20px`}}>
                        <label className="password_label" for="re_new_pass">Confirm Password</label>
                        <input id="re_new_pass" className="password_input" type="password"
                            {...reNewProps} placeholder="Re-enter new password" />
                    </div>
                </div>
                <div className="input_Buttons">
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
        </div>
    )
}