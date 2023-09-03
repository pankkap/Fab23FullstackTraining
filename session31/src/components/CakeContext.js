import React, { createContext, useState } from 'react'
import CakeCounter1 from './CakeCounter1'
import CakeCounter2 from './CakeCounter2'

export const dataStore = createContext(null)
export default function CakeContext() {
const [cakes, setcakes] = useState(1)

function buyCake(){
    setcakes(prevCake => prevCake-1)
}
function buildCake(){
    setcakes(prevCake => prevCake+1)
}
  return (
    <dataStore.Provider  value={{cakes, buyCake, buildCake}}>
        <CakeCounter1 />
        <CakeCounter2 />
    </dataStore.Provider>
  )
}
