import React, { useEffect, useState } from 'react'

export default function UseEffectDemo() {
    const [counter, setcounter] = useState(0)
    const [name, setname] = useState("")
    
    function updateCounter (){
        setcounter(counter+1)
    }
    const updateCounteDecrement = ()=>{
        setcounter(counter-1)
    }

    useEffect(()=>{
    // call the
    },[])
    

    // []: It will make useEffect to behave like ComponentDidMount()
    // []: No Square Bracket will make useEffect to behave ComponentDidMount and ComponentDidUpdate()
    // [counter]: it will only call useEffect for Counter
  return (
    <div>
      <h2>Use Effect Demo</h2>
      <hr />

      <h2>Counter = {counter}</h2>
      <input type="text" onChange={e=>setname(e.target.value)} value={name} placeholder='Enter your name'/>
      <br /><br />
      <button className='btn btn-primary' onClick={updateCounter}>Increment</button>
      <button className='btn btn-success' onClick={updateCounteDecrement}>Decrement</button>
    </div>
  )
}
