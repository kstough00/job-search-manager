import React from 'react'
import {Link} from 'react-router-dom'

export default function Nav() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home </Link>
                </li>
                <li>
                    <Link to="/positions">Positions </Link>
                </li>
                <li>
                    <Link to="/positions/new">Add applied Position </Link>
                </li>
            </ul>
        </div>
    )
}
