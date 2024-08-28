import React, { useState, useEffect } from "react";

const MultipleEffectsComponent = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);

  // First useEffect: Updates the document title
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]); // Only runs when `count` changes

  // Second useEffect: Fetches data from an API
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/3")
      .then(response => response.json())
      .then(json => setData(json));
  }, [2]); // Only runs once after the initial render

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <h3>Fetched Data:</h3>
      {data && (
        <div>
          <h4>{data.title}</h4>
          <p>{data.body}</p>
        </div>
      )}
    </div>
  );
};

export default MultipleEffectsComponent;
