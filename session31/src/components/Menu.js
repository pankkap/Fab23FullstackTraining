import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            MyProject
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to="/home">
                Home
              </Link>
              <Link className="nav-link" to="/about">
                About
              </Link>
              <Link className="nav-link" to="/posts">
                Posts
              </Link>
              <Link className="nav-link" to="/todo">
                Todo
              </Link>
              <Link className="nav-link" to="/text">
                TextAnalyzer
              </Link>
              <Link className="nav-link" to="/social">
                SocialPost
              </Link>
              
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
