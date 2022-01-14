import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { MainMenu } from './MainMenu';
import { DropDownMenu } from './DropDownMM';


function HPButton(props) {
    const [bgColour, setBgColour] = useState("transparent");
    const buttonStyles={
        background:`${bgColour}`,
        width: 'auto',
        height: `inherit`
    };

    return( 
        <div id="HPButton" className="HomePageButton" 
            style={buttonStyles} type="button"
            onMouseEnter={() => setBgColour("#AB1B23")}
            onMouseLeave={() => setBgColour("transparent")}
        >
            <span className="HPButtonTxt" 
                style={{
                    display: "inline-block",
                    fontSize: "16px",
                    color: `#ffffff`,
                    height: `inherit`,
                    whiteSpace: `nowrap`,
                    paddingRight: `10px`,
                    paddingLeft: `10px`
                }}> 
                    {props.text} 
                </span>
        </div>
    );
};

function NotLoggedMenu(props) {
    return (
        <div className="SignIn" style={{
            display: `flex`,
            width: `auto`,
            height: `inherit`,
            color: `#ffffff`,
        }}>
            <Link to="/">
                <HPButton text="Zaloguj się" />
            </Link>
            <Link to="/SignUp">
                <HPButton text="Zarejestruj się" />
            </Link>
        </div>
    );
};

function LoggedMenu() {
    const [bgColour, setBgColour] = useState("transparent")
    const buttonStyles={
        background:`${bgColour}`
    }
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className="Account">
                <button id="AccMenu" className="AccountMenuButton" 
                    style={buttonStyles} type="button"
                    onMouseEnter={() => setBgColour("#AB1B23")}
                    onMouseLeave={() => setBgColour("transparent")}
                    onClick={() => setShowMenu(true)}
                >
                    <span className="UserAcc" style={{display: "inline-block", fontSize: "16px"}}> Konto </span>
                </button>
            <MainMenu show={showMenu} onClickOutside={() => setShowMenu(false)} menu={<DropDownMenu />}/>
        </div>
    );
};

function CalendarHeader(props) {

    const isLogged = (props.page !== "/");

    return (
        <div id="navHeader" className="navbHeader" role="banner" style={{height: "48px", lineHeight: "48px"}}>
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
                {isLogged ? <LoggedMenu /> : <NotLoggedMenu />}
            </div>
        </div>
  );

};

export default CalendarHeader;