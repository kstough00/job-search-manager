import React from 'react'
import PositionListItem from './PositionListItem'

export default function Home() {
    return (
        <div>
            <h1>Home</h1>
            New Positions: {PositionListItem.call.length}
        </div>
    )
}
