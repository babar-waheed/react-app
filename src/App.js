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
        persons: [
            { id: 1, name: 'Paul', age: '28'},
            { id: 2, name: 'John', age: '29'}
        ],
        showPersons: false
    };

    toggleHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    };

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        //Or const persons = this.state.persons.slice();
        //const persons = this.state.persons; //Bad practice since its a reference type
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
        console.log(this.state);
    };

    nameChangeHandler = (event, id) => {
        //find the index
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });
        //create an object
        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;
        this.setState({persons: persons});

        // console.log(persons)
    };



    render() {

        let persons = null;

        if(this.state.showPersons){
            persons = (
                <div>
                    { this.state.persons.map((person, index) => {
                            return <Person
                                click={() => this.deletePersonHandler(index)}
                                name={person.name}
                                age={person.age}
                                key={person.id}
                                change={(event) => this.nameChangeHandler(event, person.id)}
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
            {persons}
        </div>
    );

    //return(<div className="App"><h1>Hello!</h1></div>);
    //Above code is equal to below
   //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello!'));

  }
}

export default App;
