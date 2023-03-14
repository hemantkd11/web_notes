import React, { useState } from "react";
import PythonDrawer from "../Navbar/PythonDrawer";
import PythonSetUp from "./pythonSetUp";
import "./python.css";
const Sites = [
  { webpage: `to={'/web_notes/react}` },
  { webpage: `to={'/web_notes/python}` },
];
const list = ["React", "Python"];
const PythonNotes = () => {
  const [drawer, setDrawer] = useState(false);
  return (
    <div>
      <div className="python-nav">
        <div>Python Notes</div>

        <div>
          <i
            class="fa fa-bars"
            aria-hidden="true"
            onClick={() => setDrawer(!drawer)}
          ></i>
        </div>
      </div>
      <div>
        {drawer && (
          <PythonDrawer
            onClick={() => setDrawer(false)}
            topic={list.map((li) => (
              <div>{li}</div>
            ))}
          />
        )}
      </div>
      <div>
        <p>Python is a web language. It is use to create web applications.</p>
      </div>
      <div>
        <h3>What is python</h3>
        <p>python is a programing language.</p>
        <p>
          <mark> It is used for :</mark>
        </p>
        <ul className="ul_list">
          <li>web development (server-side),</li>
          <li>software development,</li>
          <li>mathematics,</li>
          <li>system scripting.</li>
        </ul>
        <p>
          <mark>What can Python do ?</mark>
        </p>
        <ul className="ul_list">
          <li>Python can be used on a server to create web applications.</li>
          <li>Python can be used alongside software to create workflows.</li>
          <li>
            Python can connect to database systems. It can also read and modify
            files.
          </li>
          <li>
            Python can be used to handle big data and perform complex
            mathematics.
          </li>
        </ul>
        <p>
          <mark> Python Indentation :-</mark> <br></br> Python indentation is
          very much important.
        </p>
        <pre>
          Example :
          {`
            if 5 > 2 :
                print("Five is greater than two")

                This is the currect way of writing.


            if 65 > 2 :
            print()
              `}
        </pre>
      </div>

      <div>
        <PythonSetUp />
      </div>
      <div>
        <PythonDataType />
      </div>
      <div>
        <HtmlCompiler />
      </div>
    </div>
  );
};
export default PythonNotes;

const PythonDataType = () => {
  return (
    <div>
      <h1>List in Python</h1>
      <ul className="ul_list">
        <li>
          lists are ordered sequences that cam hold a varietyu of object types.
        </li>
        <li>
          They use [] brackets and commas to seperate objects in the list.
        </li>
        <li>
          <mark>To slice list Index</mark> : - use variable name. <br />
          <mark>Example :- </mark> myList = ["hii","hello","bye"]
          print(myList[1:]) in this the first index si deleted and other will
          orint as an output
        </li>
      </ul>
    </div>
  );
};

const HtmlCompiler = () => {
  const [text, setText] = useState();

  return (
    <>
      <textarea
        placeholder="Html goes here"
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <div value={text} id="text">
        {text}
      </div>
    </>
  );
};
