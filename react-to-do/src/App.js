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

      ],
      newTodoDescription:''
  };
}
  
  handleSubmit(e) {
    e.preventDefault();
    if ( !this.state.newTodoDescription ) { return }
    console.log('handleSubmit called');
    const newTodo = { description: this.state.newTodoDescription, isCompleted: false };
    this.setState({ todos: [...this.state.todos, newTodo], newTodoDescription: '' });
  }

  handleChange(e) {
    this.setState({ newTodoDescription: e.target.value });
  }


  toggleComplete(index) {
    const todos = this.state.todos.slice();
    const todo = todos[index];
    todo.isCompleted = todo.isCompleted ? false : true;
    this.setState({ todos: todos });
  }

  render() {
    return (
      <div className="App">
        <ul>
           { /* Below we are sending the state values to props, to be used in the ToDo component */ }

            { this.state.todos.map( (todo, index) =>
              <ToDo key={ index } description={ todo.description } isCompleted={ todo.isCompleted } toggleComplete={ () => this.toggleComplete(index) } />
            )}
        </ul> 
        <form onSubmit={ (e) => this.handleSubmit(e) }>
          <input type="text" value={ this.state.newTodoDescription } onChange={ (e) => this.handleChange(e) } />
          <input type="submit" />
        </form>  
      </div>
    );
  }
}

export default App;
