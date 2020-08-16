import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

function Todos({todos, markComplete, delTodo}) {


  return (
    <div>
     { todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} markComplete={markComplete} delTodo={delTodo}/>
         ))
     }
    </div>
  );
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

export default Todos;
