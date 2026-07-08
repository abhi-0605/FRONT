import React from 'react'
import { useState } from 'react'


function Counter() {
    const [Count, setCount] = useState(0);

    const inc = () => {
        setCount(Count+1);
    }
    const dec = () => {
        setCount(Count-1);
    }
    const reset = () => {
        setCount(0);
    }
  return (
    <div className='counter-container'>
      <p className='count-display'>{Count}</p>
      <button className='counter-btn' onClick={inc}>+</button>
      <button className='counter-btn' onClick={dec}>-</button>
      <button className='counter-btn' onClick={reset}>reset</button>
    </div>
  )
}

export default Counter
