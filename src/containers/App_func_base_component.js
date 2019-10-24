import React, { useState } from 'react';
import './App.css';
import Person from './Persons/Persons';

const App = (props) => {

    const [personState, setPersonState] = useState({
        person: [
            { name: 'Paul', age: '28'},
            { name: 'John', age: '29'}
        ]
    });

    const [counterState, setCounterState] = useState({
        counter: 1
    });

    const switchNameHandler = () => {
        setPersonState({
            person: [
                { name: 'Andrew', age: '25'},
                { name: 'Ash', age: '35'}
            ]
        })
        setCounterState({counter: 2});
    };

    return (
        <div className="App">
            <h1>I'm a React App {counterState.counter}</h1>
            <button onClick={switchNameHandler}>Switch Name</button>
            <Person
                name={personState.person[0].name}
                age={personState.person[0].age}/>
            <Person
                name={personState.person[1].name}
                age={personState.person[1].age}>
                My Hobbies: Coding
            </Person>
        </div>
    );
};

export default App;




