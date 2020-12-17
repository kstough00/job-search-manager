import React from 'react'

export default function PositionListItem({ position }) {
    return (
        <div>
            <ul>
                <h5>{position.title}</h5> - {position.company} - ${position.salary}
            </ul>
        </div>
    )
}
