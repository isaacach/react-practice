import { useState, useEffect } from 'react';

export default function useCounter(initialCount) {
  const [count, setCount] = useState(initialCount);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  useEffect(() => {
    console.log(count);
  }, [count]);

  return { count, increment, decrement };
}