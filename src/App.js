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
        ],
        showPerson: false
    };

    toggleHandler = () => {
        const doesShow = this.state.showPerson;
        this.setState({showPerson: !doesShow});
    };

    deletePersonHandler = (personIndex) => {
        const person = this.state.person;
        person.splice(personIndex, 1);
        this.setState({person: person});
    };

    render() {

        let person = null;

        if(this.state.showPerson){
            person = (
                <div>
                    { this.state.person.map((person, index) => {
                            return <Person
                                click={() => this.deletePersonHandler(index)}
                                name={person.name}
                                age={person.age}
                            />
                        }
                    )}
                </div>
            )
        }
        return (
        //JSX Restrictions
        //class can't be used. React is converting the html behind the scene.
        //JSX must have one root element
        <div className="App">
            <h1>I'm a React App {this.state.counter}</h1>
            <button onClick={this.toggleHandler}>Toggle Person</button>
            {person}
        </div>
    );

    //return(<div className="App"><h1>Hello!</h1></div>);
    //Above code is equal to below
   //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello!'));

  }
}

export default App;
