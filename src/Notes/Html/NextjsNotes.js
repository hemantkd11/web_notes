import React from "react";

const NextJs = () => {
  return (
    <div className="App-page">
      <h3>Question : - what is NextJS</h3>
      <p> -- NextJS is ReactJS frameWork for Building web applications </p>
      <p>
        {" "}
        -- Its use React for building user interfaces but provide additional
        features that enable you to build production-ready application{" "}
      </p>
      <p>
        -- Features line , routing, optimized rendering, data fetching, bundling
        compiling, and Api routes,styling,optization, Dev and prod build system.
      </p>

      <h3>Question : - React Server Components (RSC)</h3>
      <p>
        -- React Server Components is a new architechture introduced by the
        reacrt team in version 18
        <br />
        -- they introduce the way of creating React componnents, splitting them
        inot two types : <br />
        <i>1.</i> server component : - <br /> --In nextjs ALl component are
        server components by default <br /> -- They have all ability to run task
        like reading files or fetching data from a database <br />
        -- they don't have ability to use Hooks or handle user interactions
        <br />
        <i>2.</i> client components. : - <br />
        -- And If want to use clint component in nextjs app then we have to use
        'use clint' at the top of the component file. <br /> -- and clint
        conponent dont ability to perform task like reading files and other but
        we can use hooks and manage interactions.
        <br /> -- they are tradition reactjs compoennt
      </p>
      <h3>Routing in NextJS</h3>
      <p>NextJS has a file-system based routing mechanism</p>
      <p>
        {" "}
        URL paths that user can access in a browser are defined by files and
        folders in your codebase
        <p>
          -- every file should we inside the app folder and then evey files
          which represent the route msut have the file page.js or tsx
        </p>
      </p>
    </div>
  );
};

export default NextJs;
