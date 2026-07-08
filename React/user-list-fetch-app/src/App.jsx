import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css'

function App() {
  const [User, setUser] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [Error, setError] = useState("");

  async function fetchUsers() {
    try{
      const response =await fetch("https://jsonplaceholder.typicode.com/users");
      const data=await response.json();
      setUser(data);
      setLoading(false);
    }catch(error){
      seterror("Something went wrong!")
      setLoading(false)
    }
    
  }

  useEffect(()=>{
    fetchUsers()
  },[])

  if(Loading){
    return(
      <h2>Loading...</h2>
    )
  }

  if(Error){
    return(
      <h2>{error}</h2>
    )
  }

  return (
    <div className='container'>
      <h1>User List</h1>

      {
        User.map((user)=>{
          return(
          <div className='card' key={user.id}>
            <h2>{user.name}</h2>
            <p><strong>Email: </strong>{user.email}</p>
            <p><strong>City: </strong>{user.address.city}</p>
          </div>
          )
        })
      }
    </div>
  )
}

export default App
