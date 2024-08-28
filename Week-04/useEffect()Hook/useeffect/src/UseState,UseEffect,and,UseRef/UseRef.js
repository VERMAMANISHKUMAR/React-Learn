// Importing necessary modules from React
import React, { useState, useEffect, useRef } from 'react';

// Functional component that tracks the current and previous count values
function PreviousValueExample() {
  // useState hook to manage the count state, initialized to 0
  const [count, setCount] = useState(0);

  // useRef hook to store the previous count value between renders
  const prevCountRef = useRef();

  // useEffect hook runs after every render, updating the previous count value
  useEffect(() => {
    // Assigning the current count to prevCountRef.current after each render
    prevCountRef.current = count;
  });

  // Accessing the previous count value stored in prevCountRef
  const prevCount = prevCountRef.current;

  return (
    <div>
      {/* Displaying the current count value */}
      <h1>Current Count: {count}</h1>
      
      {/* Displaying the previous count value */}
      <h2>Previous Count: {prevCount}</h2>
      
      {/* Button to increment the count value by 1 */}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

// Exporting the component to be used in other parts of the application
export default PreviousValueExample;
