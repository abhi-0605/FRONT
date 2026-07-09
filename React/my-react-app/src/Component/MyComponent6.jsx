import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'


function MyComponent6() {
    const [count, setcount] = useState(0);
    const [color, setcolor] = useState("green");

    //run after every re-render
    // useEffect(()=>{
    //     document.title=`Count: ${count}`
    // })

    //fun only on mount
    // useEffect(()=>{
    //     document.title=`Count: ${count}`
    // },[])

    //run on mount + when value changes
    // useEffect(() => {
    //     document.title = `Count: ${count} ${color}`
    // }, [count])
    // useEffect(() => {
    //     document.title = `Count: ${count} ${color}`
    // }, [count, color])

    useEffect(()=>{
        document.title=`Count: ${count} ${color}`

        return()=>{
            //some clean up code
        }
    },[count,color])

    function AddCount() {
        setcount(c => c + 1);
    }

    function SubtractCount() {
        setcount(c => c - 1);
    }

    function ChangeColor() {
        setcolor(c => c === "green" ? "red" : "green")
    }
    return (
        <>
            <p style={{ color: color }}>Count: {count}</p>
            <button onClick={AddCount}>Add</button>
            <button onClick={SubtractCount}>Subtract</button>

            <br></br>
            <button onClick={ChangeColor}>Change Color</button>
        </>
    )
}

export default MyComponent6
