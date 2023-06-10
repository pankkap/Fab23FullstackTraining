import React from 'react'

export default function Message(props) {
    // console.log(props)
  
    // Destructuring
    let {name, age} = props
  return (
    <div>
        <h1>Welcome {name} for React Training age = {age}</h1>
        <p>Hi i am {name} and my age is {age}. i am here to learn React and Fullstack web development</p>
    </div>
  )
}
