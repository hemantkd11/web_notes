import React from "react";

const PythonSetUp = () => {
  return (
    <div>
      <div></div>
      <div>
        <h1>Start Python</h1>
        <h1> 1. Install Flask and virtual Enviornment </h1>
        <div>
          <h2>Virtual Enviornment</h2>

          <p>
            To make sure that any library be have installed is specific to
            project not with the system. So that why we use <mark>VENV</mark>
            Or we can say that use VENV to install library inside in not inside
            the system
          </p>
        </div>
        <div>
          <p>
            <mark>Command to install Venv</mark>
            <p>python -m venv .file(use.venv)</p>
          </p>
          <mark>setup virtual environment</mark>

          <div>
            go to setting open command pelate <br /> <br /> OR <br /> <br />
            use ctrl+shift+p
            <p>-- then type select interpreter</p>
            <p>--then select python:select interpreter</p>
            <p>-- then select python evn : venv</p>
            <p>-- then start your terminal again done.</p>
          </div>
        </div>
      </div>
      <div>
        <h2>Flask install</h2>
        <p>
          <mark>Install Flask :- </mark> pip install flask
        </p>
        <p>
          Note:-
          <mark>
            check if u are inside vertual environment or not first is yes then
            ok install other package esle first activ your virtual environment
          </mark>
        </p>
      </div>
      <div>
        <h2>Start Flask App</h2>
        <div>
          <StartFlask />
        </div>
      </div>
    </div>
  );
};

export default PythonSetUp;

const StartFlask = () => {
  return (
    <div>
      create a page with any name (file.py) then
      <div>import flask from Flask</div>
      <div> app = flask(__name__) </div>
      <div>
        <mark>Command to run flask in terminal is </mark> <b>flask run</b>
      </div>
    </div>
  );
};
