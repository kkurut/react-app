import React, { useState } from 'react';
import Header from './components/header';
import AgeInput from './components/age-input';
import './App.scss';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const toggleTodo = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const removeTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const [count, setCount] = useState(0);

 
  return (
    <div className="app-container">
      <Header></Header>
      <AgeInput />
      <div>
        <p>Вы нажали {count} раз</p>
        <button onClick={() => setCount(count + 1)}>
          Нажми меня
        </button>
      </div>
      <h1>To-do List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new task"
      />
      <button className="button" onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            {todo.text}
            <div>
              <button className="button" onClick={() => toggleTodo(index)}>
                {todo.completed ? 'Undo' : 'Complete'}
              </button>
              <button className="button" onClick={() => removeTodo(index)}>
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Export the App component
export default App;
