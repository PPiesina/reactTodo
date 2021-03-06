import React from 'react';
import PropTypes from 'prop-types';

function TodoItem({todo, markComplete, delTodo}) {
    const {id, title, completed} = todo;

    return (
        <div style={getStyle(todo)}>
            <p>
                <input type="checkbox" onChange={markComplete.bind(this, id)} /> {''}
                {title}
                <button type="checkbox" style={btnStyle} onClick={delTodo.bind(this, id)}>x</button>
            </p>
        </div>
    )
}
function getStyle(todo) {
    return {
        backgroundColor: '#f4f4f4',
        padding: '10px',
        borderBottom: '1px #ccc dotted',
        textDecoration: todo.completed ? 'line-through' : 'none'
    }
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

export default TodoItem
