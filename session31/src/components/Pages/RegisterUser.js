import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function RegisterUser() {
    const navigate = useNavigate()
    const [registerDetails, setregisterDetails] = useState({
        email:"",
        password:'',
        name:'',
        role:"Visitor"
    })

    function RegisterUserProcess(){

        // console.log(registerDetails)

    axios
      .post(`https://my-json-server.typicode.com/pankkap/Fab23FullstackTraining_Database/users`, registerDetails)
      .then((res) => {
        alert("New User Created")
        navigate('/login')
    })
      .catch((err) => console.log(err));

    
    }
  return (
    <div className='container'>
      <div className="row">
        <div className="col">
            <h3 className="text-center text-primary">Register User Page</h3>
        </div>
    </div>
    <div className="row">
    <div className="offset-md-3 col-md-6">
      <form>
        <label htmlFor="">Email</label>
        <input
          type="text"
          className="form-control"
          onChange={(e) =>
            setregisterDetails({ ...registerDetails, email: e.target.value })
          }
        />

        <label htmlFor="">Password</label>
        <input
          type="password"
          className="form-control"
          onChange={(e) => setregisterDetails({ ...registerDetails, password: e.target.value })}
        />

        <label htmlFor="">Name</label>
        <input
          type="text"
          className="form-control"
          onChange={(e) =>
            setregisterDetails({ ...registerDetails, name: e.target.value })
          }
        />

        <button
          type="button"
          className="btn btn-primary my-2"
          onClick={RegisterUserProcess}
        >
          Register
        </button>
      </form>
    </div>
  </div>
    </div>
  )
}
