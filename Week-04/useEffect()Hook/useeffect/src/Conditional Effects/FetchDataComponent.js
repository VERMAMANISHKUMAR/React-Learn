import React, { useState, useEffect } from "react";

const FetchDataComponent = () => {
  const [data, setData] = useState(null);
  const [id, setId] = useState(1);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(json => setData(json));
  }, [id]); // Effect depends on `id`

  return (
    <div>
      <h1>Post Data</h1>
      {data && (
        <div>
          <h2>{data.title}</h2>
          <p>{data.body}</p>
        </div>
      )}
      <button onClick={() => setId(id + 1)}>Next Post</button>
    </div>
  );
};

export default FetchDataComponent;
