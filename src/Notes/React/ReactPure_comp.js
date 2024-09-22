import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Link } from "react-router-dom";
const ReactPure_comp = () => {
  const [age, setAge] = useState(0);

  return (
    <div>
      <Link className="color" to="/web_notes/react/reacthooks">
        Home
      </Link>

      <p> you Click {age}</p>
      <button onClick={() => setAge(age + 1)}>Click</button>
      <p>{age}</p>
    </div>
  );
};

export default ReactPure_comp;
