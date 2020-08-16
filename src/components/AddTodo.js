import React, {useContext} from 'react'
// import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid';



function AddTodo({addTodo}) {
    const [newTodo, setNewTodo] = React.useState({
        title : "",
        id : ""
    });

    function onChange(e){
        const {name, value} = e.target
        setNewTodo(prevState => ({
            ...prevState,
            [name] : value,
            id : uuidv4()
        }))
    }

    function onSubmit(e){
        e.preventDefault();
        addTodo(newTodo);
        setNewTodo({
            title : "",
            id : ""
        });
    }

    return (
        <form style={{ display: 'flex' }} onSubmit={onSubmit}>
            <input
                type="text" 
                name="title"
                placeholder="Add Todo"
                style={{ flex: '10', padding: '5px' }}
                value={newTodo.title}
                onChange={onChange}
            />
            <input 
                type="submit" 
                value="Submit" 
                className="btn"
                style={{flex: '1'}}
            />
        </form>
    )
}

export default AddTodo
