import React, {Component} from 'react';
import Person from "./Person/Person";

class Persons extends Component{

    // static getDerivedStateFromProps(props, state){
    //     console.log('[Persons.js getDerivedStateFromProps]');
    //     return state;
    // }

    //UNSAFE componentWillReceiveProps
    //UNSAFE componentWillUpdate

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('[Persons.js shouldComponentUpdate]');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js getSnapshotBeforeUpdate]');
        return {message: "getSnapshotBeforeUpdate"};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js componentDidUpdate]', snapshot);
    }

    render() {
        console.log('[Persons.js render()]');
        return this.props.persons.map((person, index) => {
            return <Person
                click={() => this.props.deletePerson(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                change={(event) => this.props.changeName(event, person.id)}
            />
        })
    }
}

export default Persons;