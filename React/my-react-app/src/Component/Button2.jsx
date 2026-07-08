import React from 'react'

function Button2() {
    // const handleClick=()=>{console.log("OUCH")}

    // const handleClick2=(name)=>{console.log(`${name} Stop clicking me`)}
    // let count = 0;
    // const handleClick=(name)=>{
    //     if(count<3){
    //         count++;
    //         console.log(`${name} you clicked me ${count} times`)
    //     }else{
    //         console.log(`${name} Stop clicking me`)
    //     }
    // }

    const handleClick=(e)=>{
        // console.log(e);
        e.target.textContent="OUCH"
    }
    return (
        <>
            {/* <button onClick={handleClick}>Click Me</button> */}
            {/* <button onClick={() => handleClick2("ram")}>Click Me</button> */}

            {/* <button onClick={()=>handleClick("bro")}>Click Me</button> */}
            {/* <button onClick={(e)=>handleClick(e)}>Click Me</button> */}

            <button onDoubleClick={(e)=>handleClick(e)}>Click Me</button>
        </>
    )
}

export default Button2
