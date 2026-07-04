import React from 'react'
import { useState } from 'react';
import './App.css'

const App = () => {
  const [showPassword, setshowPassword] = useState(false);
  return (
    <div className='container'>
      <h1>Show / Hide Password</h1>

      <input type={showPassword?"text":"password"} placeholder='Enter your password'/>

      <button onClick={()=>{
        setshowPassword(!showPassword)
      }}>{showPassword?"Hide":"show"}</button>
    </div>
  )
}

export default App  
