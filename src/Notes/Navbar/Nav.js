import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Nav.css";
const Navbar = () => {
  return (
    <div className="navbar_container">
      <div className="navbar_box">
        <div className="nav_logo">
          <div className="logo">Discover_More</div>
        </div>
        <div className="nav_list">
          <ul>
            <li>
              <Link to="/web_notes">Home</Link>
            </li>
            <li>
              <Link to="/web_notes/html">HTML</Link>
            </li>
            <li>
              <Link to="/web_notes/css">CSS</Link>
            </li>
            <li>
              <Link to="/web_notes/react">REACT</Link>
            </li>
            <li>
              <Link to="/web_notes/js">JAVASCRIPT</Link>
            </li>
          </ul>
        </div>
        <div className="topic_list">More_Topics</div>
      </div>
    </div>
  );
};

export default Navbar;
