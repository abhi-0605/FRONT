import React from 'react'
import { useState } from 'react'

//update state of obj in react

function MyComponent3() {
    const [car, setcar] = useState({year:2024, make:"ford", model:"mustang"});

    function handleYearChnage(event){
        setcar(c => ({...c ,year:event.target.value}))
    }
    function handleMakeChnage(event){
        setcar(c=> ({...car,make:event.target.value}))
    }
    function handleModelChnage(event){
        setcar(c=> ({...car,make:event.target.value}))
    }

  return (
    <div>
      <p>Your favorite Car is : {car.year} {car.make} {car.model} </p>

      <input type='number' value={car.year} onChange={handleYearChnage} ></input> <br/>
      <input type='text' value={car.make}onChange={handleMakeChnage} ></input> <br/>
      <input type='text' value={car.model} onChange={handleModelChnage} ></input> <br/>
    </div>
  )
}

export default MyComponent3
