import React, { useReducer } from 'react';

// Step 1: Define the initial state object with a 'count' property set to 0.
const initialState = { count: 0 };

// Step 2: Define the reducer function, which takes the current state and an action as arguments.
// The reducer determines how the state should be updated based on the action type.
function reducer(state, action) {
  switch (action.type) {
    // Step 3: Handle the 'increment' action by returning a new state object
    // with the 'count' property incremented by 1.
    case 'increment':
      return { count: state.count + 1 };
    
    // Step 4: Handle the 'decrement' action by returning a new state object
    // with the 'count' property decremented by 1.
    case 'decrement':
      return { count: state.count - 1 };
    
    // Step 5: If the action type doesn't match any case, throw an error.
    default:
      throw new Error();
  }
}

// Step 6: Define the Counter component, which will manage the counter functionality.
function Counter() {
  // Step 7: Use the useReducer hook to manage the component's state.
  // Pass the reducer function and the initial state as arguments to useReducer.
  // The hook returns the current state and a dispatch function.
  const [state, dispatch] = useReducer(reducer, initialState);

  // Step 8: Return the component's JSX, which includes a paragraph displaying the current count,
  // and two buttons to increment and decrement the count.
  return (
    <>
      {/* Step 9: Display the current count by accessing the 'count' property of the state object. */}
      <p>Count: {state.count}</p>

      {/* Step 10: Attach an onClick event to the '+' button that dispatches an 'increment' action when clicked. */}
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>

      {/* Step 11: Attach an onClick event to the '-' button that dispatches a 'decrement' action when clicked. */}
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </>
  );
}

export default Counter;
// The Counter component can now be used in your React application.
