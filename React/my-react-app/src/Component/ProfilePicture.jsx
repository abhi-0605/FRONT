import React from 'react'


function ProfilePicture() {
    const imageUrl= './react.svg'

    const handleClick=()=> console.log("OUCH");
    return (
        <>
            <img onClick={(e)=>handleClick(e)} src={imageUrl}></img>
        </>
    )
}

export default ProfilePicture
