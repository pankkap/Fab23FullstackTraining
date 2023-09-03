import React, { useEffect, useRef } from 'react'

export default function UseRefDemo() {
    const ref = useRef(null)

    useEffect(()=>{
        ref.current.focus()
    })
  return (
    <div>
        <label htmlFor="">Age: </label>
      <input type="number" placeholder='Enter your age' ref={ref} />
    </div>
  )
}
