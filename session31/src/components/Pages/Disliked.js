import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function DislikedPosts() {
    const [posts, setposts] = useState();
    // Fetching API Data in the Background using UseEffect Hook
  useEffect(() => {
    axios
      .get("http://127.0.0.1:3003/posts")
      .then((res) => {
        let postData = res.data
        postData = postData.filter((post)=>post.liked==false && post.disliked == true)
        setposts(postData)
      })
      .catch((err) => console.log(err));
  }, []); // [] will work like ComponentDidMount() and runs only once

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
        </tr>
      </thead>
      <tbody>
        {posts ?
          posts.map((post, i) => (
            <tr key={i}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
              
            </tr>
          )):<tr>
            <td>Loading...!!</td>
          </tr>
          }
      </tbody>
    </table>
      </>
  )
}
