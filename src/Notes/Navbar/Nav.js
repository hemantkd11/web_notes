import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "./Nav.css";
import Dropdown from "./Dropdown";
const Navbar = () => {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } =
    useAuth0();
  const [selected, setSelected] = useState("ChoseOne");
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    <div className="navbar_container">
      <div className="navbar_box">
        <div className="nav_logo">
          <div className="logo">Cs_Coding</div>
        </div>
        <div className="nav_list">
          {isAuthenticated ? (
            <div className="nav-items">
              <div className="list-item">
                <ul>
                  <li className="tap-1">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="tap-2">
                    <Link to="/web_notes/html">HTML</Link>
                  </li>
                  <li className="tap-3">
                    <Link to="/web_notes/python">Python</Link>
                  </li>
                  <li className="tap-4">
                    <Link to="/web_notes/react">REACT</Link>
                  </li>
                  <li className="tap-5">
                    <Link to="/web_notes/js">JAVASCRIPT</Link>
                  </li>
                </ul>
              </div>
              <div className="list-dropdown">
                <Dropdown selected={selected} setSelected={setSelected} />
              </div>
            </div>
          ) : (
            <div className="bfr_login">Welcome to Web_notes </div>
          )}
        </div>
        <div className="topic_list">
          <div>{isAuthenticated && <i>{user.name}</i>}</div>
          <div>
            {isAuthenticated ? (
              <button
                className="btn"
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Log Out
              </button>
            ) : (
              <button className="btn" onClick={() => loginWithRedirect()}>
                Log In
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
