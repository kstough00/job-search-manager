import React from 'react'
import { connect } from 'react-redux'
import { getPositions } from '../redux/actions/positionActions'

class PositionIndex extends React.Component {
    componentDidMount() {
        this.props.getPositions();
    }
    render() {
        return (
            <div>
                <h1>My applied Positions</h1>
            </div>
        )
    }
}

const mapStateToProps = ({ positions }) => {
    return {
        positions: positions.all,
    };
};

export default connect(mapStateToProps, { getPositions })(PositionIndex);