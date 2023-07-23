import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
const navigate =    useNavigate()
    const [users, setusers] = useState([])
    const [loginDetails, setloginDetails] = useState({
        username:"",
        password:""
    })

    useEffect(()=>{
        axios.get('https://my-json-server.typicode.com/pankkap/Fab23FullstackTraining_Database/users')
        .then((res)=>setusers(res.data))
        .catch((err)=>console.log(err))
    },[])

    function loginProcess()
    {
       
        let foundUser = users.find((u)=>u.email == loginDetails.username)
        if(foundUser)
        {
            if(foundUser.password == loginDetails.password)
            {
                if(foundUser.role == "Author")
                {
                    sessionStorage.setItem("role","Author")
                    navigate('/home')

                }
                else
                {
                    sessionStorage.setItem("role","Visitor")
                    navigate('/home')
                }
            }
            
        }
        else
        {
            alert("You have no Access! Register yourself")
        }
    }
    function RegisterProcess()
    {
      navigate('/register')
    }
  return (
    <div className="container">
    <div className="row">
        <div className="col">
            <h3 className="text-center text-primary">Login Page</h3>
        </div>
    </div>
  <div className="row">
    <div className="offset-md-3 col-md-6">
      <form>
        <label htmlFor="">Username</label>
        <input
          type="text"
          className="form-control"
          onChange={(e) =>
            setloginDetails({ ...loginDetails, username: e.target.value })
          }
        />

        <label htmlFor="">Password</label>
        <input
          type="password"
          className="form-control"
          onChange={(e) => setloginDetails({ ...loginDetails, password: e.target.value })}
        />

        <button
          type="button"
          className="btn btn-primary my-2"
          onClick={loginProcess}
        >
          Login
        </button>
       
        <button
          type="button"
          className="btn btn-primary m-2 "
          onClick={RegisterProcess}
        >
          Register
        </button>
      </form>
    </div>
  </div>
</div>
  )
}
