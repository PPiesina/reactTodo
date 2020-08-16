import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import Header from './components/layout/Header';
import './App.css';
import useTodos from './customHooks/useTodo'

function App() {
 
  const {
    addTodo,
    todos,
    markComplete,
    delTodo
  } = useTodos()

  return (
    <Router>
    <div className="App">
      <div className="container">
      <Header />
      <Route exact path="/" render={props => (
        <>

            <AddTodo addTodo={addTodo} />
           
          <Todos todos={todos} markComplete={markComplete} delTodo={delTodo}/>
        </>
      )} />
      <Route path="/about" component={About} />

      
      </div>
    </div>
    </Router>
  );
}
export default App;
