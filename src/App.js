import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      //JSX Restrictions
      //class can't be used. React is converting the html behind the scene.
      //JSX must have one root element
      <div className="App">
        <h1>I'm a React App</h1>
      </div>
    );

    //return(<div className="App"><h1>Hello!</h1></div>);
    //Above code is equal to below
   //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello!'));

  }
}
console.log(React);

export default App;
