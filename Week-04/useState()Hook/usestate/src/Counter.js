import React, { useState } from 'react';

function Counter() {
  // Declare a state variable `count` and a function `setCount` to update it
  const [count, setCount] = useState(0);

  // Function to handle the increment
  const increment = () => {
    setCount(count + 2); // Update the state
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={increment}>Click me</button>
    </div>
  );
}

export default Counter;
