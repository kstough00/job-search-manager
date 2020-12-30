import React, { Component } from 'react'; //imports react library from react
import { createPosition } from "../redux/actions/positionActions"; //action is imported to make use of that action and so we can export an action as well
import { connect } from 'react-redux' //we need this because we are connecting this component to the redux store

class PositionForm extends Component {
    state = {
        title: "",
        company: "",
        salary: "",
    }; //this is a state contructor. it sets state for us to use later

    submit = (e) => {
        e.preventDefault();
        this.props.createPosition(this.state)
        this.setState({
            title: "",
            company: "",
            salary: "",
        });
        this.props.history.push("/positions"); //this redirects the user to the position show page after creation is complete
    };
    
    render() {
        return (
            <div>
                <h1>Add Position</h1>
                    <form onSubmit={this.submit}>
                     Title: {" "}
                     <input
                        onChange={e => this.setState({ title: e.target.value })} 
                        type="text"
                        value={this.state.title} 
                     />
                     Company: {" "}
                     <input
                        onChange={e => this.setState({ company: e.target.value })}
                        type="text"
                        value={this.state.company} 
                     />
                     Salary: {" "}
                     <input
                        onChange={e => this.setState({ salary: e.target.value })}
                        type="text"
                        value={this.state.salary}
                     />
                        <input type="submit" value="Add position" />
                    </form>
            </div>
        )
    }
}

export default connect(null, { createPosition })(PositionForm);