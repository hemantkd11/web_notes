import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Dropdown = ({ selected, setSelected }) => {
  const [isActive, SetIsActive] = useState(false);
  const options = [
    <Link to="/web_notes/react">REACT</Link>,
    <Link to="/web_notes/python">Python</Link>,
    <Link to="/web_notes/python">HTML</Link>,
    <Link to="/web_notes/javascript">JAVASCRIPT</Link>,
    <Link to="/web_notes/css">CSS</Link>,
  ];
  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={() => SetIsActive(!isActive)}>
        {selected}
        <span className="fas fa-caret-down"></span>
      </div>
      {isActive && (
        <div className="dropdown-contain">
          {options.map((option) => (
            <div
              className="dropdown-items"
              onClick={(e) => {
                setSelected(option);
                SetIsActive(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Dropdown;
