import React from 'react'
import { useState } from 'react'


function MyComponent() {
    const [name, setname] = useState("");
    const [age, setage] = useState(0);
    const [isEmployed, setisEmployed] = useState(false);

    const updatename = () => {
        setname("ram")
        
    }

    const incrementAge =() =>{
        setage(age+1)
    }

    const toogleemp = () => {
        setisEmployed(!isEmployed)
    }

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updatename}>Set Name</button>

      <p>Age: {age}</p>
      <button onClick={incrementAge}>Inc Age</button>

      <p>is Employed: {isEmployed?"YES":"NO" }</p>
      <button onClick={toogleemp}>Toogle Status</button>
    </div>
  )
}

export default MyComponent
