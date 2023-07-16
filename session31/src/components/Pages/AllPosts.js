import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function AllPosts() {
  // create state to store API Data
  const [posts, setposts] = useState();
   // Fetching API Data in the Background using UseEffect Hook
  useEffect(() => {
    axios
      .get("http://127.0.0.1:3003/posts")
      .then((res) => setposts(res.data))
      .catch((err) => console.log(err));
  }, []); // [] will work like ComponentDidMount() and runs only once

  return (
    <>
      {/* Heading of Social App */}
      <div className="row">
        <div className="col-md-12">
          <h2 className="text-center bg-primary text-white py-2">
            List of Posts
          </h2>
        </div>
      </div>

   <table className="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
         
        </tr>
      </thead>
      <tbody>
        {posts ?
          // posts && is used here for conditional rendering
          posts.map((post, i) => (
            <tr key={i}>
              <td>
                <Link to ={`/allposts/${post.id}`}>{post.id}</Link>
              </td>
              <td>{post.title}</td>
                         
            </tr>
          )):<tr>
            <td>Loading...!!</td>
          </tr>
          }
      </tbody>
    </table>
      
    </>
  );
}
