import React, { createContext, useContext, useState } from 'react'

const store  = createContext(null)
export default function WithCotextAPI() {
    const [userDetails, setuserDetails] = useState({
        name: 'Vinod',
        age:20
    })
    function UpdateAge()
    {
        setuserDetails({...userDetails, age:30})
    }
  return (
    <store.Provider value={{ userDetails, UpdateAge }}>
        
        <h2>This is Parent</h2>
        <hr />
        <ChildComponent/>
        
    </store.Provider>
  )
}

function ChildComponent(){
    const storeData = useContext(store)
    return (
        <>
        <h2>This is Child Component</h2>
        <h3>
            Name: {storeData.userDetails.name}
        </h3>
        <hr />
        <SubChildComponent/>
        </>
    )
}

function SubChildComponent(){
    const Data = useContext(store)
    return (
        <>
        <h2>This is Sub Child Component</h2>
        <h4>Name : {Data.userDetails.name}</h4>
        <h4>Age: {Data.userDetails.age}</h4>
        <button className='btn btn-danger' onClick={Data.UpdateAge}>Update Age</button>
        </>
    )
}