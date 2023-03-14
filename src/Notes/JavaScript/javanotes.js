import React from "react";

const Javascript = () => {
  return (
    <div>
      <div>
        <Secion4 />
      </div>
      <div>
        <Secion5_Events />
      </div>
    </div>
  );
};

export default Javascript;

const Secion4 = () => {
  return (
    <>
      <div>
        <h3>Section 4 : How to search the element and the Refrences</h3>
        <pre>{` to search element by reference means search them  by putting  into a veriable name
         Example :- 
            1. create a html file 
            2. them write some line by using tag like this
            <body>
                <p class="para"> hello</p>
                <p class="para"> hello</p>
                <p id="para"> hello</p>
                <button onclick="changecontent()">Click me </button>

                <script>

                    const changeContent =()=>{
                        // document.getElementById('heading').innerHTML = 'hello'

                        const heading = document.getElementById('heading')
                        heading.innerHTML = " welcome to my page"
                    }  
                    
                </script>
            </body> 
         
            `}</pre>
        <p>OutPut :- </p> <img src="/afterclickRef.png" />
        <p>After clicking button :- </p>
        <img src="/ssforRef.png" />
      </div>
    </>
  );
};

const Secion5_Events = () => {
  return (
    <>
      <div>
        <h1>Events in javascript</h1>
        <p>
          <mark>What are events? </mark>
        </p>
        <p>
          Html event are <mark> things </mark> that happens to html elements.
        </p>
        <p>
          when javascript is used in html pages , Javascript can
          <mark> react </mark>
          on these events.
        </p>
        <p>
          <mark>Html events</mark>
        </p>
        <p>
          An Html event is something that browser does, or something a user
          does.
        </p>
        <h3>
          {" "}
          <mark> Way of writing Events is javascript</mark>
        </h3>
        <p>There are 4 way of writing events in javascript </p>
        <ol className="ul_list">
          <li>using inline events alert()</li>
          <li>By calling a function</li>
          <li>
            using inline events (html onclick="" property and element and
            element.onclick)
          </li>
          <li>using Event listeners (addEventlistener and IEs attachEvent)</li>
        </ol>
      </div>
    </>
  );
};
