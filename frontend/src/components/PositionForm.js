import React, {Component} from 'react';

export default class PositionForm extends Component {
    state = {
        title: "",
        company: "",
        salary: "",
    };
    submit = e => {
        e.preventDefault()

    }
    render() {
        return (
            <div>
            <h1>Add applied Position</h1>
            <form onSubmit={this.submit}>
                Title: <input onChange={e => this.setState({title: e.target.value})} 
                type="text" value={this.state.title}/>
                Company: <input onChange={e => this.setState({company: e.target.value})}
                type="text" value={this.state.company}/>
                Salary: <input onChange={e => this.setState({salary: e.target.value})}
                type="text" value={this.state.salary}/>
                <input type="submit" value="create position" />
            </form>
        </div>
        )
    }
}