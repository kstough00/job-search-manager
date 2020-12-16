import React from 'react'

export default function PositionListItem({ position }) {
    return (
        <div>
            {position.title} - {position.company} - ${position.salary}
        </div>
    )
}
