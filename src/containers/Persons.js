import React, { Component } from 'react';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import { connect } from "react-redux"
import * as actionTypes from "../store/actions"

class Persons extends Component {
    render() {
        return (
            <div>
                <AddPerson personAdded={(person) => this.props.onPersonAdd(person)} />
                {this.props.persons.map(person => (
                    <Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        clicked={() => this.props.onPersonDelete(person.id)} />
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        persons: state.persons
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onPersonAdd: (person) => dispatch({ type: actionTypes.PERSON_ADD, person: person }),
        onPersonDelete: (id) => dispatch({ type: actionTypes.PERSON_DELETE, id: id })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Persons);