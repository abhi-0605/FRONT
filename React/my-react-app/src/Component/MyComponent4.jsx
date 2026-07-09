import React from 'react'
import { useState } from 'react'


//update the state of array in react using usestate
function MyComponent4() {

    const [food, setfood] = useState(["apple","orange","banana"]);

    function handleAddFoodChange(){
        const newfood=document.getElementById("foodInput").value;
        document.getElementById("foodInput").value=" ";

        setfood(f => [...f, newfood])

    }

    function handleRemoveFoodChange(index){
        setfood(food.filter((_,i)=> i!==index))
    }
  return (
    <div>
        <h2>List of Food</h2>
        <ul>
            {food.map((food,index)=> <li Key={index} onClick={()=>handleRemoveFoodChange(index)} >{food}</li>)}
        </ul>
        <input type='text' id="foodInput" placeholder='Enter food Name'></input>
        <button onClick={handleAddFoodChange}>Add Food</button>
    </div>
  )
}

export default MyComponent4
