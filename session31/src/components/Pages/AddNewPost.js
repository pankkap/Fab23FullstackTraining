import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddNewPost() {
    const navigate  = useNavigate()
  const [newPost, setnewPost] = useState({
    title: "",
    body: "",

    latest: true,
    oldest: false,
    liked: false,
    disliked: false,
  });

  function CreateNewPost() {
    axios
      .post(`http://127.0.0.1:3003/posts`, newPost)
      .then((res) => alert("New Post Created"))
      .catch((err) => console.log(err));

        navigate('/nestedPosts')
  }

  return (
    <div className="container">
        <div className="row">
            <div className="col">
                <h3 className="text-center text-primary">Create New Post</h3>
            </div>
        </div>
      <div className="row">
        <div className="offset-md-3 col-md-6">
          <form>
            <label htmlFor="">Title</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) =>
                setnewPost({ ...newPost, title: e.target.value })
              }
            />

            <label htmlFor="">Body</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setnewPost({ ...newPost, body: e.target.value })}
            />

            <button
              type="button"
              className="btn btn-primary my-2"
              onClick={CreateNewPost}
            >
              Create Record
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
