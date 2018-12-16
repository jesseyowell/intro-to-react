import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component {
  constructor(props) {
    super(props);
  
  this.state = {

      todos: [

        { description: "Walk the cat", isCompleted: true },
        { description: "Feed the baby", isCompleted: false },
        { description: "Eat the beans", isCompleted: false }

      ]
  };
}
  



  render() {
    return (
      <div className="App">
        <ul>
           { /* Below we are sending the state values to props, to be used in the ToDo component */ }

            { this.state.todos.map( (todo, index) =>
              <ToDo key={ index } description={ todo.description } isCompleted={ todo.isCompleted } />
            )}
        </ul> 
      </div>
    );
  }
}

export default App;
