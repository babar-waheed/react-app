import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

//Stateful vs Stateless Components
//Stateful manages state in both class based / functional based hooks
//Stateless Person.js is stateless component also called dumps,
// presentational components. Its a good practice to use Stateless components.

class App extends Component {
    //Understanding and Using State
    //Whilst props allow you to pass data down the component tree (and hence trigger an UI update), state is used to change the component, well, state from within. Changes to state also trigger an UI update.
    state = {
        counter: 1,
        person: [
            { name: 'Paul', age: '28'},
            { name: 'John', age: '29'}
        ]
    };
    //You can find a list of supported events here: https://reactjs.org/docs/events.html#supported-events
    //Mouse Events, Pointer Events, Form events etc..
    switchNameHandler = (counter = 0, name1, name2) => {
        //Don't do this: this.state.person[0].name = 'Andrew';
        this.setState({
            counter: counter,
            person: [
                { name: name1, age: '28'},
                { name: name2, age: '29'}
            ]
        })
    };

    changeNameHandler = (event, counter = 5) => {
        //Don't do this: this.state.person[0].name = 'Andrew';
        this.setState({
            counter: counter,
            person: [
                { name: 'Paul', age: '28'},
                { name: event.target.value, age: '29'}
            ]
        })
    };

    render() {
        return (
        //JSX Restrictions
        //class can't be used. React is converting the html behind the scene.
        //JSX must have one root element
        <div className="App">
            <h1>I'm a React App {this.state.counter}</h1>
            <button onClick={this.switchNameHandler.bind(this, '2', 'Andrew', 'Ash')}>Switch Name</button>
            <Person
                name={this.state.person[0].name}
                age={this.state.person[0].age}
            />
            <Person
                name={this.state.person[1].name}
                age={this.state.person[1].age}
                click={this.switchNameHandler.bind(this, '3', 'Ash', 'Andrew')}
                change={this.changeNameHandler}
            >
                My Hobbies: Coding
            </Person>
        </div>
    );

    //return(<div className="App"><h1>Hello!</h1></div>);
    //Above code is equal to below
   //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello!'));

  }
}

export default App;
