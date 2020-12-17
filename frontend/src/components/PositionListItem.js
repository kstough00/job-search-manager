import React from 'react'
import {Link} from 'react-router-dom'

export default function PositionListItem({ position }) {
    return (
        <div>
            <ul>
                <h5><Link to="/position/:id"> {position.title}</Link></h5> - {position.company} - ${position.salary}
            </ul>
        </div>
    )
}
