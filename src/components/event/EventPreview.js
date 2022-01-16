import React from 'react'

export default function EventPreview( props ) {
    return (
        <span>
            <div style={{backgroundColor: 'gray', borderRadius: 20, float: 'left'}}>
                <h3 style={{padding: 5}}>{props.eventInstance.name}</h3>
                <p style={{padding: 5}}>{props.eventInstance.description}</p>
                <p style={{padding: 5}}>{props.eventInstance.date_info}</p>
            </div>
        </span>
    )
}
