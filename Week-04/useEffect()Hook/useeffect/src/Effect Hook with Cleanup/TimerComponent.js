import React, { useState, useEffect } from "react";

const TimerComponent = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);

    // Cleanup function to clear the interval
    return () => clearInterval(interval);
  }, []); // Empty dependency array, runs only on mount and unmount

  return (
    <div>
      <p>Timer: {seconds} seconds</p>
    </div>
  );
};

export default TimerComponent;
