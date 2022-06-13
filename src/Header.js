import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">blog</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
          <li>
            <Link to="/formpage">form</Link>
          </li>
          <li>
            <Link to="/design">Design</Link>
          </li>
          <li>
            <Link to="/comment">comment</Link>
          </li>
          <li>
            <Link to="/patch">Patch</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
