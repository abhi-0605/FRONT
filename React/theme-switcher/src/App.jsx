import React from 'react'
import { useState } from 'react';
import './App.css'

const App = () => {
  const [Dark, setDark] = useState(false);
  return (
    <div className={`container ${Dark?"dark":"light"}`}>
      <h1>{Dark?"Dark Mode":"Light Mode"}</h1>
      <button onClick={()=>{
        setDark(!Dark)
      }}>Switch Theme</button>
    </div>
  )
}

export default App
