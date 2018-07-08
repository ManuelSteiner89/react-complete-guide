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
    otherState: 'some other value',
    showPersons: false
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
/*gets merged with the other state
  does not mean gets replaced the whole state,
  only  showPersons only
  */
togglePersonsHandler = () => {
  const doesShow = this.state.showPersons;
  
  this.setState({showPersons: !doesShow});
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
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border  : '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };


  return (
    <div className="App">
      <h1> Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button 
        style={style}
        onClick={() => this.togglePersonsHandler()}>Toggle Persons</button>
        {
          /* showPersons is a boolean,  assigned as false initialy 
          ? checks the condition, regullary js construct
          then decide what do to if its true
          in the end you call React.createElement(),
          but you dont call it explicit  since you render the content
          behinde the scenes
          */
           this.state.showPersons ?
          <div>
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
          /* null means render nothing*/
          : null
        }
  
    </div>
  );
  //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
  }
}

export default App;
