import React, { useState, useEffect } from 'react';

function TimerComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, []); // Empty array means the effect runs only once

  return <div>Count: {count}</div>;
}

export default TimerComponent;
