import React, { use } from 'react'
import { useState } from 'react'
import './App.css'

function App() {
  const [On,setOn]=useState(false);
  return (
    <div className='container'>
      <h1>Toggle Button</h1>
      <h2>Status:{On?"ON":"OFF"}</h2>
      <button onClick={()=>{
        setOn(!On)
      }}>Toggle</button>
    </div>
  )
}

export default App
