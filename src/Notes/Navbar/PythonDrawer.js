import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const PythonDrawer = ({ onClick, to, topic }) => {
  return (
    <div className="drawer-container" onClick={onClick}>
      <div className="drawer-body" onClick={(e) => e.stopPropagation()}>
        <Link to={to}>{topic}</Link>
      </div>
    </div>
  );
};

export default PythonDrawer;
