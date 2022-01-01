import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { MainMenu } from './MainMenu';
import { DropDownMenu } from './DropDownMM';

function CalendarHeader(props) {
    const [bgColour, setBgColour] = useState("transparent")
    const buttonStyles={
        background:`${bgColour}`
    }
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div id="navHeader" className="navbHeader" role="banner" style={{height: "48px", 'line-height': "48px"}}>
            <div id="HeaderLeftRegion" className="LeftHeader" style={{width: "100%"}}>
                <div className="Logo">
                    <Link to={props.page}>
                        <div id="Logobut" className="LogoButton"
                            type="button"
                        >
                            <span className="WebTitleLogo">Plan </span>
                            <span className="WebTitleLogo" style={{color: "#000000"}}>it!</span>
                        </div>
                    </Link>
                </div>
            </div>
            <div id="HeaderRightRegion" className="rightHeader">
                <div className="Account">
                    <button id="AccMenu" className="AccountMenuButton" 
                        style={buttonStyles} type="button"
                        onMouseEnter={() => setBgColour("#AB1B23")}
                        onMouseLeave={() => setBgColour("transparent")}
                        onClick={() => setShowMenu(true)}
                    >
                        <span className="UserAcc" style={{display: "inline-block", 'font-size': "16px"}}> Konto </span>
                    </button>
                    <MainMenu show={showMenu} onClickOutside={() => setShowMenu(false)} menu={<DropDownMenu />}/>
                </div>
            </div>
        </div>
  );

}

export default CalendarHeader;