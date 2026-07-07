import React from 'react'
import './App.css'
import { useState } from 'react';



function App() {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [message, setmessage] = useState("");

  function handleLogin(){
    if(Username==='' || Password===''){
      setmessage("Enter Username and Password")
    }else if(Username==='admin' && Password==='12345'){
      setmessage("Login Successful")
      setUsername("")
      setPassword("")
    }else{
      setmessage("Invalid Username or Password")
    }
  }

  return (
    <div className='container'>
      <div className='login-box'>
      <h1>Login Form</h1>

      <input
        type='text'
        placeholder='Enter Username'
        value={Username}
        onChange={(e)=>{
          setUsername(e.target.value)
        }}
      />

      <br/><br/>

      <input
        type='password'
        placeholder='Enter Password'
        value={Password}
        onChange={(e)=>{
          setPassword(e.target.value)
        }}
      />

      <br/><br/>
      <button className='btn' onClick={handleLogin}>Login</button>

      <p>{message}</p>
    </div>
    </div>
  )
}

export default App
