import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    const trimmedInput = input.trim();
    if (trimmedInput) {
      setTodos([...todos, trimmedInput]);
      setInput('');
    }
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <div className="container">
        <h1>React To-Do List</h1>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task..."
        />
        <button onClick={addTodo} id="addTaskButton">Add Task</button>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <span onClick={() => removeTodo(index)}>×</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;