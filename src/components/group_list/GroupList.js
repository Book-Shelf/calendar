import React from 'react'
import GroupPlaque from './GroupPlaque'

export default function GroupList( props ) {
    return (
        <span>
            <div style={{overflow: 'auto', height: 600, width: 'auto', float: 'left', borderRadius: 10, backgroundColor: '#C71F28'}}>
                {props.groupInstances.map((groupInstance, index) => {
                    return <GroupPlaque key={index} groupInstance={groupInstance} />
                })}
            </div>
        </span>
    )
}
