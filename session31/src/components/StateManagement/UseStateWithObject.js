import React, { useState } from 'react'

export default function UseStateWithObject() {
    const [name, setname] = useState({firstName:"", lastName:""})
  return (
    <div>
      {/* <input type="text" onChange={(e)=>console.log(e.target.value)} /> */}
      <input type="text" onChange={(e)=>setname({...name, firstName:e.target.value})} placeholder='Enter First Name'/>
      <input type="text" onChange={(e)=>setname({...name, lastName:e.target.value})} placeholder='Enter Last Name'/>
      <button className='btn btn-primary'>Show Name</button>
        <br /><br />
      My Full Name : {JSON.stringify(name)}
    </div>
  )
}
