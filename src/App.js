import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      { name: 'Bobs', age: 28},
      { name: 'Benis', age: 22},
      { name: 'Vegana', age: 50}
    ],
  }

  switchNameHandler = (newName) => {
    //console.log('Was clicked!');
    // DONT DO THIS: this.state.persons[0].name= 'Manuel';
    this.setState({
      persons: [
        { name: newName, age: 28},
        { name: 'Benis', age: 22},
        { name: 'Vegana', age: 30}
      ]
    }
  )
}

nameChangedHandler= (event) =>{
  this.setState({
    persons: [
      { name: 'Igor', age: 28},
      { name: event.target.value, age: 22},
      { name: 'Vegana', age: 30}
    ]
  }
)
}
  render() {
  return (
    <div className="App">
      <h1> Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name
      </button>
      <Person 
      name={this.state.persons[0].name} 
      age={this.state.persons[0].age} />
      <Person 
      name={this.state.persons[1].name} 
      age={this.state.persons[1].age}
      click={this.switchNameHandler.bind(this, 'Igor')}
      changed={this.nameChangedHandler}>My Hobbies: Drinking</Person>
      <Person 
      name={this.state.persons[2].name} 
      age={this.state.persons[2].age} />
    </div>
  );
  //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
  }
}

export default App;
