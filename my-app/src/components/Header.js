import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="container flex-container">
        <div className="blog-name">
          <h1 className="main-heading">Vie Simple</h1>
          <p className="forum-subheading">Un guide du minimalisme dans la vie</p>
        </div>
        <nav>
          <ul className="navigation-list">
            <li>
              <Link to="/" className="navigation-link active-page">
                Home
              </Link>
            </li>
            <li>
              <Link to="/another-forum" className="navigation-link" >
                Another Forum
              </Link>
            </li>
            <li>
              <Link to="/about" className="navigation-link">
                About Me
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
