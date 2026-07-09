import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'


function MyComponent7() {
    const [width, setwidth] = useState(window.innerWidth);
    const [height, setheight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("Event listner added")

        return()=>{
            window.removeEventListener('resize',handleResize);
            console.log("Event listner removed")
        }
    },[])

    useEffect(()=>{
        document.title=`Size: ${width} x ${height}`
    },[width,height])
    
    function handleResize() {
        setwidth(window.innerWidth)
        setheight(window.innerHeight)
    }
    return (
        <>
            <p>Window Width: {width}px</p>
            <p>Window Height: {height}px </p>
        </>
    )
}

export default MyComponent7
