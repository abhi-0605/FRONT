import React from 'react'
// import styles from './Button.module.css'
function Button() {
  const styles={
    backgroundColor:" hsl(200, 100%, 50%)",
  color: "white",
  padding: "10px 20px",
  borderRadius: "12px",
  border: "none",
  cursor: "pointer",
  }

  return (
    // external
    // <button className='btn' >Click</button>

    // module
    // <button className={styles.btn} >Click</button>

    // inline
    <button style={styles} >Click</button>
  )
}

export default Button
