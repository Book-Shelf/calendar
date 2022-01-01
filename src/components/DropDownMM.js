import {Link} from 'react-router-dom';
import React, {useState} from 'react';

export function DropDownMenu() {
    const [color1, setColor1] = useState("#1C1C1B");
    const [color2, setColor2] = useState("#1C1C1B");
    
    const menuStyle = {
        background: `#1C1C1B`,
        'font-size': `14px`,
        position: `absolute`,
        right: '0',
        top: '48px',
        width: `auto`,
        height: `auto`,
        'font-family': `inherit`,
        'box-sizing': `border-box`,
        'z-index': `2`,
        display: `flex`,
        'border-spacing': `0`,
        'flex-direction': `column`
    };

    return (
        <div id="dropdownAcc_main_body" className="Accm_dropdownbodyexpanded" style={menuStyle}>
           <Link to="/Calendar/AccountSettings" className="ddm_ele"
                style={{background: `${color1}`}}
                onMouseEnter={() => setColor1("#403F3D")}
                onMouseLeave={() => setColor1("#1C1C1B")}
            >
                <span className="ddButton">
                    Ustawienia
                </span>
            </Link>
            <Link to="/" className="ddm_ele"
                style={{background: `${color2}`}}
                onMouseEnter={() => setColor2("#403F3D")}
                onMouseLeave={() => setColor2("#1C1C1B")}
            >
                <span className="ddButton">
                    Wyloguj
                </span>
            </Link>
        </div>
    );
};