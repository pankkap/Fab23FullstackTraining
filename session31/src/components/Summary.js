import React from 'react'

export default function Summary(props) {
    // console.log(props.names)
  return (
    <div>
      <ul>
        {/* {
            props.names.map((name)=>(
                <li>{name}</li>
            ))
        } */}

        <li className='text-light bg-dark'>{props.name}</li>

      </ul>
    </div>
  )
}
