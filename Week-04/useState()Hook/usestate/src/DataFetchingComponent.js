import React, { useState, useEffect } from 'react';

function DataFetchingComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from an API
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []); // Empty array means this effect runs only once after the initial render

  return (
    <div>
      {data ? <div>Data: {JSON.stringify(data)}</div> : <div>Loading...</div>}
    </div>
  );
}

export default DataFetchingComponent;
