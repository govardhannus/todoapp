import React from 'react';
import './App.css';
import AddTodo from './Components/AddTodo'
import TodoList from './Components/TodoList'
import TodoCount from './Components/TodoCount'

function App() {
  return (
    <div className="header">
      <div className="card">
        <AddTodo/>
        <TodoList/>
        <TodoCount/>
    </div>
    </div>
     );
}

export default App;
