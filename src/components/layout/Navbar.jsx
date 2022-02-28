import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar darkblue">
      <Link to="/">
        <i className="fab fa-github icon" />
      </Link>
      <h1>User Profile Search</h1>
      <ul>
        <li>
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/about">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};
