import React, {useState} from 'react';

export function EditButton(props) {

    const [buttonBgColor, setButtonBgColor] = useState("#2c3e50");

    return (
        <button className="usernameButton"
            type="button" style={{background: `${buttonBgColor}`}}
            onMouseEnter={() => setButtonBgColor("#1e2b37")}
            onMouseLeave={() => setButtonBgColor("#2c3e50")}
            onClick={props.handleOnClick}
        >
            Edit
        </button>

    );
}