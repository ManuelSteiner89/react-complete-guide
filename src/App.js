import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  render() {
  return (
    <div className="App">
      <h1> Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <Person name="Igor" age="99"/>
      <Person name="Benis" age="69">My Hobbies: Rubbing</Person>
      <Person name="Vegana" age="12"/>
    </div>
  );
  //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
  }
}

export default App;
