import React, { useContext } from 'react'
import { dataStore } from './CakeContext'

export default function CakeCounter2() {
  const data = useContext(dataStore)
  return (
    <div>
      <h2 className='text-danger'>Counter-2</h2>
      <hr />
      <h3>No of Cakes:{data.cakes}</h3>
      <button  className = "btn btn-info" onClick={data.buildCake}>Build Cake</button>
    </div>
  )
}
