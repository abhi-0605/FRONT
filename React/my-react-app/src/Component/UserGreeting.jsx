import React from 'react'
import PropTypes from 'prop-types'

function UserGreeting({
    isLoggedIn=true,
    username="noname"
}) {
    const welcomeMsg= <h2 className='welcome-msg'>Welcome {username} </h2>

    const failedMsg= <h2 className='failed-msg'>Please log in to continue</h2>


//   if(isLoggedIn){
//     return <h2 className='welcome-msg'>Welcome {username} </h2>
//   }else{
//     return <h2 className='failed-msg'>Please log in to continue</h2>
//   }

    // return(props.isLoggedIn ? <h2 className='welcome-msg'>Welcome {props.username}</h2> :<h2 className='failed-msg'>Please log in to continue</h2>)

    return(isLoggedIn?welcomeMsg:failedMsg)

}

UserGreeting.propTypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
}

export default UserGreeting
