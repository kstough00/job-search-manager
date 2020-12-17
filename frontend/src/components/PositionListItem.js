import React from 'react'
import { Link } from 'react-router-dom'
import { FaTrash } from "react-icons/fa"
import { deletePosition } from '../redux/actions/positionActions'
import { connect } from "react-redux";

export default function PositionListItem({ position, deletePosition }) {
    const deletePosition = () => {

    }
    return (
        <div>
            <ul>
                <h4><Link to="/position/:id"> {position.title}</Link></h4> Company: {position.company} - ${position.salary}
                <FaTrash onClick={ deletePosition } style={{ cursor: "pointer" }} />
            </ul>
        </div>
    )
}

export default connect(null, {deletePosition})(PositionListItem)
