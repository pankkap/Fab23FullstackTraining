import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dec_Counter, inc_Counter } from './CounterApp/counterActions'
// useSelector is an Hook

export default function CounterContainer() {
    const counter = useSelector((state)=>state.counter)
    const dispatch = useDispatch()
  return (
    <div>
      <h2>Counter: {counter} </h2>
      <button className='btn btn-info mx-3'
      onClick={()=>dispatch(inc_Counter())}
      >Increment</button>
      <button className='btn btn-success' 
      onClick={()=>dispatch(dec_Counter())}
      >Decrement</button>
    </div>
  )
}
