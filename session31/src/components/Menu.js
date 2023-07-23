import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Menu() {
  const params = useParams();
  const [role, setrole] = useState("");
  const navigate = useNavigate()

  useEffect(() => {
    let user_role = sessionStorage.getItem("role");
    setrole(user_role);
  }, [params]);

  function logout(){
    sessionStorage.removeItem('role')
    alert('Logout Successfully')
    navigate('/login')
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand bg-info p-1" to="/">
            Social App
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
              {role ? (
                role == "Author" ? (
                  <>
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/home"
                    >
                      Home
                    </Link>
                    <Link className="nav-link" to="/about">
                      About
                    </Link>
                    <Link className="nav-link" to="/allposts">
                      AllPosts
                    </Link>
                    <Link className="nav-link" to="/nestedPosts">
                      NestedPosts
                    </Link>
                    <Link className="nav-link" to="/newPost">
                      New Post
                    </Link>
                    <button className="btn btn-secondary" onClick={logout}>
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/home"
                    >
                      Home
                    </Link>
                    <Link className="nav-link" to="/about">
                      About
                    </Link>
                    <Link className="nav-link" to="/allposts">
                      AllPosts
                    </Link>
                    <Link className="nav-link" to="/nestedPosts">
                      NestedPosts
                    </Link>
                    <button className="btn btn-secondary" onClick={logout}>
                      Logout
                    </button>

                  </>
                )
              ) : (
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
