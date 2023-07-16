import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function LatestPosts() {
    const [posts, setposts] = useState();
    // Fetching API Data in the Background using UseEffect Hook
  useEffect(() => {
    axios
      .get("http://127.0.0.1:3003/posts")
      .then((res) => {
        let postData = res.data
        postData = postData.filter((post)=>post.oldest==false && post.latest == true)
        setposts(postData)
      })
      .catch((err) => console.log(err));
  }, []); // [] will work like ComponentDidMount() and runs only once

  return (
    <>
     
      <div className="row">
        <div className="col-md-12">
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
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {posts ?
          posts.map((post, i) => (
            <tr key={i}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
              <td>
                <button className='btn btn-success btn-sm'>Like</button>
              </td>
              <td>
                <button  className='btn btn-danger btn-sm'>Dislike</button>
              </td>
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
