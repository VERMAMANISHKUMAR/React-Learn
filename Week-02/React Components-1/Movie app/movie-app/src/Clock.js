import { useState } from 'react';

 function Clock({ color, time }) {
  const [currentColor] = useState(() => color);

  return (
    <h1 style={{ color: currentColor }}>
      {time}
    </h1>
  );
}

export default Clock;

