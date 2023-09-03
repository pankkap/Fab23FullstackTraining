import React, { useContext } from 'react'
import { dataStore } from './CakeContext'

export default function CakeCounter1() {
    const data = useContext(dataStore)
    console.log(dataStore)
  return (
    <div>
      <h2 className='text-danger'>Counter-1</h2>
      <hr />  
      <h3>No of Cakes:{data.cakes}</h3>
      <button  className = "btn btn-primary" onClick={data.buyCake}>Buy Cake</button>
    </div>
  )
}
