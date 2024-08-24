import React, { useState, useEffect } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([
    { task: 'Buy groceries', time: new Date().toLocaleString() },
    { task: 'Clean house', time: new Date().toLocaleString() }
  ]); // State for todos array
  const [newTodo, setNewTodo] = useState(''); // State for the input value
  const [dateTime, setDateTime] = useState(new Date().toLocaleString()); // State for current date and time

  // Function to handle the input change
  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  // Function to add the new todo item
  const addTodo = () => {
    if (newTodo.trim() !== '') { // Prevent adding empty tasks
      const newTask = { task: newTodo, time: new Date().toLocaleString() };
      setTodos([...todos, newTask]);
      setNewTodo(''); // Clear the input after adding
    }
  };

  // Update the dateTime state every second
  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date().toLocaleString());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1>Todo List</h1>
      <p>Current Date and Time: {dateTime}</p> {/* Display the current date and time */}
      <input 
        type="text" 
        value={newTodo} 
        onChange={handleInputChange} 
        placeholder="Enter a new task"
      />
      <button onClick={addTodo}>Add Todo</button>

      <ol>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.task} - <small>{todo.time}</small>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default TodoList;
