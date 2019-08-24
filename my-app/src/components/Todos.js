import React, { Component } from 'react';
import TodoItems from './Todoitem';
import PropTypes from 'prop-types';


class Todos extends Component {

  render() {
    return this.props.todos.map((todo) => (
      <TodoItems key={todo.id} todo={todo}
       markComplete = {this.props.markComplete}
       delete = {this.props.delete}
       />
    ));
  }

}

// defines the type of prop, in this case it is of type array
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired
}

export default Todos;

