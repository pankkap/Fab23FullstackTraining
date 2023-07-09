import React, { useState } from 'react'

export default function WithhoutCotextAPI() {
    const [userDetails, setuserDetails] = useState({
        name: 'Mayank',
        age:30
    })
  return (
    <div>
        <h2>This is Parent</h2>
        <hr />
        <ChildComponent userDetails= {userDetails}/>
    </div>
  )
}

function ChildComponent(props){
    return (
        <>
        <h2>This is Child Component</h2>
        <hr />
        <SubChildComponent userDetails={props.userDetails}/>
        </>
    )
}

function SubChildComponent(props){
    return (
        <>
        <h2>This is Sub Child Component</h2>
        <h4>Name : {props.userDetails.name}</h4>
        <h4>Age: {props.userDetails.age}</h4>
        </>
    )
}