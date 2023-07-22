import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../../../node_modules/bootstrap-icons/font/bootstrap-icons.json'

export default function LatestPosts() {
    const [posts, setposts] = useState([]);
    // Fetching API Data in the Background using UseEffect Hook

    function getLatestPostData()
    {
      axios
      .get("http://127.0.0.1:3003/posts")
      .then((res) => {
        let postData = res.data
        postData = postData.filter((post)=>post.oldest==false && post.latest == true)
        setposts(postData)
      })
      .catch((err) => console.log(err));
    }
  useEffect(() => {
    getLatestPostData();
  }, []); // [] will work like ComponentDidMount() and runs only once

// Like Post Functionality
  const likePost = (post)=>{
  // console.log(post)
  
  post.liked = true
  post.disliked = false
  post.oldest = true
  post.latest = false

  // Now we also update the database

  axios.put(`http://127.0.0.1:3003/posts/${post.id}`, post)
  .then(()=>{
    getLatestPostData();
  })
  .catch(err=>console.log(err))
}
const dislikePost = (post)=>{
  // console.log(post)
  
  post.liked = false
  post.disliked = true
  post.oldest = true
  post.latest = false

  // Now we also update the database

  axios.put(`http://127.0.0.1:3003/posts/${post.id}`, post)
  .then(()=>{
    getLatestPostData();
  })
  .catch(err=>console.log(err))
}
  return (
    <>
     
      <div className="row my-1">
        <div className="offset-md-4 col-md-4">
          <h4 className="text-center bg-primary text-white py-1">
            List of Posts
          </h4>
        </div>
      </div>
      <table className="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">Body</th>
          <th scope="col" colSpan={2} >Actions</th>
        </tr>
      </thead>
      <tbody>
        {posts.length !=0 ?(
          posts.map((post, i) => (
            <tr key={i}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
              <td>
                <i class="fa fa-thumbs-up" style={{color:'blue', fontSize:'30px' }} aria-hidden="true" onClick={()=>likePost(post)}></i>
              {/* <i class="bi bi-hand-thumbs-up-fill"></i> */}
                {/* <button className='btn btn-success btn-sm' >Like</button> */}
              </td>
              <td>
              <i class="fa fa-thumbs-down" aria-hidden="true" style={{color:'red', fontSize:'30px' }} onClick={()=>dislikePost(post)}> </i>
                {/* <button  className='btn btn-danger btn-sm'>Dislike</button> */}
              </td>
            </tr>
          ))):<tr>
            <td className='text-center text-danger' colSpan={4}>No Records Available</td>
          </tr>
          }
      </tbody>
    </table>
      </>
  )
}
