import React from 'react'
import ComponentC from './ComponentC'
import { useContext } from 'react'
import { UserContext } from './ComponentA'

function ComponentB() {
    const user=useContext(UserContext)
  return (
    <div className='box'>
      <h1>ComponentB</h1>
      <ComponentC/>
    </div>
  )
}

export default ComponentB
