import React, { Component } from 'react';

import './AddPerson.css';

class AddPerson extends Component {
    state = {
        person: {
            id: "",
            name: "",
            age: ""
        }
    }

    changeHandler = (e) => {
        const newPerson = { ...this.state.person, [e.target.name]: e.target.value, id: Math.random() };
        this.setState({ person: newPerson })
    }
    render() {
        return (
            <div className="AddPerson">
                <input type="text" placeholder="Name" name="name" value={this.state.person.name} onChange={this.changeHandler} />
                <input type="number" placeholder="Age" name="age" value={this.state.person.age} onChange={this.changeHandler} />
                <button onClick={() => this.props.personAdded(this.state.person)}>Add Person</button>
            </div>
        );
    }
}
export default AddPerson;