import React from 'react'
import { useState } from 'react'


//update state of array of obj
function MyComponent5() {
    const [cars, setcars] = useState([]);
    const [caryear, setcaryear] = useState(new Date().getFullYear());
    const [carmake, setcarmake] = useState("");
    const [carmodel, setcarmodel] = useState("");

    function handleAddChange(){
        const newcar= {year: caryear, make: carmake, Model: carmodel}
        setcars(c=> [...c,  newcar])

        setcaryear(new Date().getFullYear());
        setcarmake("");
        setcarmodel("")

    }

    function handleRemoveChange(index){
        setcars(c=> c.filter((_,i) => i!==index))
    }


    function handleYearChange(event){
        setcaryear(event.target.value)
    }

    function handleMakeChange(event){
        setcarmake(event.target.value)
    }

    function handleModelChange(event){
        setcarmodel(event.target.value)
    }

  return (
    <div>
      <h2>
        List of Car Objects
      </h2>
      <ul>
        {cars.map((car,index)=> <li key={index} onClick={()=>handleRemoveChange(index)}>
            {car.year} {car.make} {car.Model}
        </li>)} 
      </ul>
      <input type='number' value={caryear} onChange={handleYearChange} ></input> <br></br>
      <input type='text' value={carmake} onChange={handleMakeChange} placeholder='Enter Car Make' ></input> <br></br>
      <input type='text' value={carmodel} onChange={handleModelChange} placeholder='Enter Car Model' ></input> <br></br>

      <button onClick={handleAddChange}>Add Car</button>
    </div>
  )
}

export default MyComponent5
