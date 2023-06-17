import React, { useState } from 'react'

export default function ShowNameOnButtonClick() {
    const [name, setname] = useState("")
    const [dname, setdname] = useState("")
    let displayName=()=>{
       setdname(name)
    }
  return (
    <div>
        <br />
      <input type="text"  onChange={(e)=>setname(e.target.value)}/>
      <br /><br />
      <button className='btn btn-success'onClick={displayName}>Show Name</button>
      <br /><br />
      <h3>{dname}</h3>
    </div>
  )
}
