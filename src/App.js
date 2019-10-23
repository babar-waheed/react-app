import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      //JSX Restrictions
      //class can't be used. React is converting the html behind the scene.
      //JSX must have one root element
      <div className="App">
        <h1>I'm a React App</h1>
        <Person name="Paul" age="23"/>
        <Person name="John" age="34"> My Hobbies: Coding </Person>
      </div>
    );

    //return(<div className="App"><h1>Hello!</h1></div>);
    //Above code is equal to below
   //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello!'));

  }
}
console.log(React);

export default App;
