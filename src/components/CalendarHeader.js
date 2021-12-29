import React, {useState} from 'react';


function CalendarHeader() {
    const [bgColour, setBgColour] = useState("transparent")
    const buttonStyles={
        background:`${bgColour}`
    }
    return (
        <div id="navHeader" className="navbHeader" role="banner" style={{height: "48px", 'line-height': "48px"}}>
            <div id="HeaderLeftRegion" className="LeftHeader" style={{width: "100%"}}>
            </div>
            <div id="HeaderRightRegion" className="rightHeader">
                <div class="Account">
                    <button id="AccMenu" className="AccountMenuButton" 
                        style={buttonStyles} aria-expanded="false" type="button"
                        aria-label="Account menu" aria-controls="Accm_main_body"
                        onMouseEnter={() => setBgColour("#AB1B23")}
                        onMouseLeave={() => setBgColour("transparent")}
                    >
                        <span className="UserAcc" style={{display: "inline-block", 'font-size': "16px"}}> Konto </span>
                    </button>
                    <div id="Accm_main_body" className="Accm_dropdownbodyexpanded">
                    </div>
                </div>
            </div>
        </div>
  );

}

export default CalendarHeader;