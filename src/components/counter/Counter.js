import { useState } from 'react';

const Counter = ({ color, age }) => {
  const [counterValue, setCounterValue] = useState(0)

  return (
    <>
      <h1 style={{ color: color }}>{color} Counter Example {age}</h1>
      <p>{counterValue}</p>
      <button onClick={() => setCounterValue(counterValue + 1)}>+</button>
      <button onClick={() => setCounterValue(counterValue - 1)}>-</button>
    </>
  )
}

export default Counter;