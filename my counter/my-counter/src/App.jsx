import { useState } from 'react'
import './App.css'

function Count() {
  const [count, setCount] = useState(0)

  // Set background color based on count
  const bgStyle = {
    backgroundColor: count > 5 ? 'red' : 'white',
    minHeight: '100vh', // make it cover the full page height
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }

  return (
    <div style={bgStyle}>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}

export default Count

