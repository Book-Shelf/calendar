import React from 'react'
import GroupPlaque from './GroupPlaque'

export default function GroupList( props ) {
    return (
        <div style={{overflow: 'auto', height: `Calc(100vh - 48px)`, width: 'auto', float: 'left', backgroundColor: '#C71F28'}}>
            {props.groupInstances.map((groupInstance, index) => {
                return <GroupPlaque key={index} groupInstance={groupInstance} />
            })}
        </div>
    )
}
