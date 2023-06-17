import { useState } from "react"

let myName = "Pankaj"

export default function StateWithHook() {
    const [counter, setcounter] = useState(0)

    // let increment=()=>{
    //     // console.log("Increment Function Called")
    //     setcounter((prevCounter)=>prevCounter+1)
    // }
    let decrement=()=>{
        // console.log("Decrement Function Called")
        setcounter(counter-1)
    }

    let increment5=()=>{
        for(let i=0;i<5;i++)
        {
            setcounter((prevCounter)=>prevCounter+1)
        }
    }
    return (
    <div>
      <h2>Counter: {counter}</h2>
      {/* Inline Approch of State Function Call Directly as inline*/}
      <button className='btn btn-primary mx-3' onClick={()=>setcounter(prevCount=>prevCount+1)}>Increment</button>
      <button className='btn btn-danger mx-3'onClick={decrement}>Decrement</button>
      <button className='btn btn-info'onClick={increment5}>Increment by 5</button>
    </div>
  )
}
