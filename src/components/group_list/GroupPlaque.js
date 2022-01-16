import React from 'react'
import {Link} from 'react-router-dom';

export default function GroupPlaque( props ) {
    return (
        <div style={{padding: 2}}>
            <div style={{backgroundColor: 'white', height: 60, width: 240, borderRadius: 10}}>
                <div style={{float: 'right', padding: 10}}>
                    {props.groupInstance.status}
                </div>
                <div style={{height: 30}}>
                    <span>
                        <input type="checkbox" className="group_toggle" style={{minWidth: 30, height: 30, margin: 15}}/>
                    </span>
                    <span>
                        <div style={{float: 'left', margin: 15}}>
                            <Link to="FullUserList">
                                <button style={{minWidth: 80, height: 30}}>
                                    {props.groupInstance.name}
                                </button>
                            </Link>
                        </div>
                    </span>
                </div>
            </div>
        </div>
    )
}
