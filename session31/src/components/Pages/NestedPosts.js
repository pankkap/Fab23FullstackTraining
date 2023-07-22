import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import OldestPosts from "./OldestPosts";
import LatestPosts from "./LatestPosts";
import LikedPost from "./LikedPost";
import Disliked from "./Disliked";

export default function NestedPosts() {
  return (
    <div className="container">
      <ul className="nav justify-content-center bg-secondary p-1">
        <li className="nav-item">
          <Link className="btn btn-warning mx-3 active" aria-current="page" to="latest">
            LATEST
          </Link>
        </li>
        <li className="nav-item">
          <Link className="btn btn-warning mx-3 " to="oldest">
            OLDEST
          </Link>
        </li>
        <li className="nav-item">
          <Link className="btn btn-warning mx-3 " to="liked">
            LIKED
          </Link>
        </li>
        <li className="nav-item">
          <Link className="btn btn-warning mx-3 " to="disliked">DISLIKED</Link>
        </li>
      </ul>

  {/* Routing Configuration for Nested Routes */}
      <Routes>
        <Route path="/latest" element={<LatestPosts/>}/>
        <Route path="/oldest" element={<OldestPosts/>}/>
        <Route path="/liked" element={<LikedPost/>} />
        <Route path="/disliked" element={<Disliked />}/>        
      </Routes>

    </div>
  );
}
