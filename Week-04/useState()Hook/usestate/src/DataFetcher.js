import React, { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null); // Store fetched data
  const [isLoading, setIsLoading] = useState(false); // Track loading state
  const [error, setError] = useState(null); // Store any errors
  
  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null); // Clear previous errors
     
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const fetchedData = await response.json();
        setData(fetchedData);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching data:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Render content based on data, loading, or error states
  return (
    <div>
      <h1>Data Fetcher</h1>
      {isLoading ? (
        <div>Loading data...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : data ? (
        <ul>
          {data.map((user) => (
            <li key={user.id}>
              {/* Replace 'title' with the correct property from data */}
              ID: {user.id} - Name: {user.name}
            </li>
          ))}
        </ul>
      ) : (
        <div>No data found.</div>
      )}
      <button onClick={() => fetchData()}>Refetch Data</button>
    </div>
  );
}

export default DataFetcher;