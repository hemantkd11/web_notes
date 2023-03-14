import React from "react";

const Css = () => {
  return (
    <div>
      <h1> Css </h1>
      <h3>Use of fontAwesome</h3>
      <div>
        {`<link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
          integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/brands.min.css"
          integrity="sha512-L+sMmtHht2t5phORf0xXFdTC0rSlML1XcraLTrABli/0MMMylsJi3XA23ReVQkZ7jLkOEIMicWGItyK4CAt2Xw=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/fontawesome.min.css"
          integrity="sha512-cHxvm20nkjOUySu7jdwiUxgGy11vuVPE9YeK89geLMLMMEOcKFyS2i+8wo0FOwyQO/bL8Bvq1KMsqK4bbOsPnA=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
        `}
      </div>
      <h1>CSS (cascading style sheet)</h1>
      <p> use to decorate a html page </p>
      <p>Three way to write css </p>
      <ul className="ul_list">
        <li>inline css</li>
        <li>Internal css</li>
        <li>external css</li>
      </ul>
      <p>
        <mark>Externsal css : -</mark> use a seperate file to write css. <br />{" "}
        importing file in html using link tag, import should we inside a{" "}
        {`<head>`} tag
        {`<link ref="styleSheet" href="filename >`}
      </p>
      <p>
        <mark>Internal css :- </mark>
        internal css write inside then head tag using the styel tag like{" "}
        <pre>
          {`         <head> 
            <style>  
               h1{
                color:red;
               }
             </style> 
          </head>`}
        </pre>
        <mark>disADV of internal css ;-</mark>
        use only in sigle page we can not use it in other file
      </p>
      <p>
        <mark>Inline css : -</mark>
        <pre>
          {` inline css is used inside the tag 
            EXAMPLE :-
             <h1 style="color> hello </h1>
             OutPut : -`}
          <h1 style={{ color: "red" }}> Hello</h1>
        </pre>
      </p>
      <p>
        {" "}
        <mark>disADV of inline css</mark> only use for a perticular tag
      </p>
      <div>
        <h3> CSS selector</h3>
        <ul className="ul_list">
          <li>tag selector : - use tag name to give css</li>
          <li>Id selector : - use id name to give css </li>
          <li>Class selector :- use class name to give css </li>
          <li>
            universal selector(*) :- using this we can aplly css to all the tags{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Css;
