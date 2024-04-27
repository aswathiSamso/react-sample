import Child from './Child'
import React from 'react'

const Parent = () => {
  const [name, setName] = "Aswathi"
  return (
   
    <Child name={name} />
  )
}

export default Parent