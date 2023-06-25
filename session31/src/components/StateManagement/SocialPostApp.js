import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function SocialPostApp() {
const [posts, setposts] = useState()


useEffect(()=>{
  axios
  .get('http://127.0.0.1:3003/posts')
  .then(res=>setposts(res.data))
  .catch(err=>console.log(err))  
},[]) // ComponentDidMount() runs only once
console.log(posts)
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <h2 className='text-center bg-primary text-white py-2'>List of Posts</h2>
        </div>
      </div>
      {/* Table to display Posts Data */}

      <table className="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Title</th>
      <th scope="col">Body</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    {
      posts &&    
      // posts && is used here for conditional rendering
      posts.map((post,i)=>(
        <tr key={i}>
          <td>{post.id}</td>
          <td>{post.title}</td>
          <td>{post.body}</td>
        </tr>
      ))
    }
  </tbody>
</table>

    </>
  )
}
