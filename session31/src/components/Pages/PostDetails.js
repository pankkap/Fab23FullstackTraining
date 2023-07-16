import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function PostDetails() {
    const {id} = useParams()
    const [post, setpost] = useState()
    // console.log(id)

    useEffect(()=>{
        axios
        .get(`http://127.0.0.1:3003/posts/${id}`)
        .then((res)=>setpost(res.data))
        .catch(err=>console.log(err))
    },[])
    // console.log(post)

  return (
    <div className='container'>
      <h2 className='text-center text-primary'>Post Details</h2>
      {/* <div className="row">
        <div className="col-md-12">
            <h3 className='text-success'>{id} </h3>
        </div>
    </div>   */}
    <div className="row">
        <div className="col-md-12">
            <table className='table table-bordered table-striped '>
                <tbody>
                    <tr>
                        <th>Id:</th>
                        <th>{post?.id}</th>
                    </tr>
                    <tr>
                        <th>Title:</th>
                        <th>{post?.title}</th>
                    </tr>
                    <tr>
                        <th>Body:</th>
                        <th>{post?.body}</th>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    </div>
  )
}
