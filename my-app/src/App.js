import React, { Component } from 'react';
import Todos from './components/Todos';
import Header from './components/layout/header';
import AddTodos from './components/addTodo';

import './App.css';


class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'let some sea',
        completed: false

      }, {
        id: 2,
        title: 'above the wish',
        completed: false
      }, {
        id: 3,
        title: 'killer of sin',
        completed: false

      }


    ]

  }

  // change the state, id is binded in the todoitem.js 
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  }

  delete = (id)=>{
      this.setState({
        todos: this.state.todos.filter((todo)=>{
            return todo.id !== id;
        })
      });
  }

  // add todo
  addTodo = (title)=>{
    const newTodo = {
        id:4,
        title: title,
        completed: false

    }

      this.setState({todos: [...this.state.todos, newTodo]})
  }


  render() {
    return (
      <div className="App">
       <div className='container'>
          <Header />
          <AddTodos addTodo = {this.addTodo} />
          <Todos todos={this.state.todos} markComplete={this.markComplete} delete={this.delete} />
       </div>
        
      </div>
    );
  }
}

export default App;
