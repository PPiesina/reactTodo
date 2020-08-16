import {useState, useEffect} from "react"
import Axios from 'axios';

function useTodos() {

const [todos, setTodos] = useState([])

  useEffect(() => {

    Axios.get('http://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => setTodos(res.data))
  },[])
  

  function addTodo(newTodo){
      Axios.post('https://jsonplaceholder.typicode.com/todos',{
        title: newTodo.title,
        completed: false,
        id : newTodo.id
      }).then(res => {console.log('ok',[...todos, res.data]);
          setTodos([...todos, res.data])})
        .catch(e => console.log('error', e))
  };

  function markComplete(id) {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }));
  }

  function delTodo(id) {
    Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => setTodos(todos.filter(todo => todo.id !== id)));
  }

  return {
    addTodo,
    todos,
    markComplete,
    delTodo
  }

}

export default useTodos