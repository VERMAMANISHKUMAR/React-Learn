import { useState, useEffect } from 'react';
import Clock from './Clock.js';
import "../src/styles.css";

function useTime() {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

function Main() {
  const time = useTime();
  const [color, setColor] = useState('green',);
 

  useEffect(() => {
    
  }, [color]);

  return (
    <div>
      <p>
        Pick a color:{' '}
        <select value={color} onChange={e => setColor(e.target.value)}>
          <option value="red">red</option>
          <option value="green">green</option>
          <option value="blue">blue</option>
          <option value="alpha">alpha</option>
          <option value="yellow">yellow</option>
        </select>
      </p>
      <Clock color={color} time={time.toLocaleTimeString()} />
    </div>
  );
}

export default Main;
