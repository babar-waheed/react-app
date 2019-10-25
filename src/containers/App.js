import React, { Component } from 'react';
import Style from '../containers/App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';
import AuthContext from '../context/auth-context';

class App extends Component {

    constructor(props){

        console.log('[App.js] constructor()', props);

        super(props);
        this.state = {
            counter: 0,
            persons: [
                { id: 1, name: 'Paul', age: 45},
                { id: 2, name: 'John', age: 40},
                { id: 3, name: 'Andrew', age: 35},
                { id: 4, name: 'Babs', age: 36}
            ],
            showPersons: false,
            showCockpit: true,
            changeNameCounter: 0,
            authenticated: false
        };
    }

    componentDidMount() {
        console.log('[App.js componentDidMount]');
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('[App.js shouldComponentUpdate]');
        return true;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[App.js componentDidUpdate]');
    }

    toggleHandler = () => {
        const personsCount = this.state.persons.length;
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
        !doesShow ? this.setState({counter: personsCount}) : this.setState({counter: 0});
    };

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
        this.setState({counter: persons.length});
    };

    nameChangeHandler = (event, id) => {

        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });
        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;
        this.setState((prevState, props) => {
            return {
                persons: persons,
                changeNameCounter: prevState.changeNameCounter + 1
            }

        });

    };

    loginHandler = () => {
        console.log('here');
        this.setState({authenticated: true})
    };

    render() {

        console.log('[App.js] render()');

        let persons = null;
        if(this.state.showPersons){
            persons = <Persons
            persons={this.state.persons}
            deletePerson={this.deletePersonHandler}
            changeName={this.nameChangeHandler}/>

        }

        return (
            <Aux>
                <button onClick={() => this.setState({showCockpit : false})}
                    className={Style.bgRed}
                    >Remove Cockpit
                </button>
                <AuthContext.Provider value={{
                        authenticated: this.state.authenticated,
                        login: this.loginHandler
                    }}
                >
                    {this.state.showCockpit ?
                        <Cockpit
                            title={this.props.appTitle}
                            counter={this.state.counter}
                            toggleHandler={this.toggleHandler}
                        /> : null
                    }
                    {persons}
                </AuthContext.Provider>
            </Aux>
        );
    }
}

export default withClass(App, Style.App);
