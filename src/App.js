import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

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
    switchNameHandler = () => {
        //Don't do this: this.state.person[0].name = 'Andrew';
        this.setState({
            counter: 2,
            person: [
                { name: 'Andrew', age: '25'},
                { name: 'Ash', age: '35'}
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
            <button onClick={this.switchNameHandler}>Switch Name</button>
            <Person name={this.state.person[0].name} age={this.state.person[0].age}/>
            <Person name={this.state.person[1].name} age={this.state.person[1].age}> My Hobbies: Coding </Person>
        </div>
    );

    //return(<div className="App"><h1>Hello!</h1></div>);
    //Above code is equal to below
   //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello!'));

  }
}

export default App;
