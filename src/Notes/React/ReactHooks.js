import React from "react";

const ReactHooks = () => {
  return (
    <div>
      <div>
        <h1>React Hooks</h1>
      </div>
      {/* what are hooks */}
      <div>
        <h4>What are Hooks in React?</h4>
        <p>
          Hooks are functions that give us access to the react features like
          state and lifecycle .<br />
          <div>Or</div> <br />
          In a simple words hooks allow to use features that we are using in
          react Class Components
        </p>
        <p>
          Note :- <br /> hooks don't work inside the Class Components
        </p>
      </div>
      {/* why hooks to use */}
      <div>
        <h2>Why Hooks are used in React ?</h2>
        <p>
          With Hooks, you can can extract stateful logic from a component so it
          can be tested independently nd reused.
        </p>
      </div>
      <div>
        {/* type of hooks */}
        <h2> Types Of Hooks</h2>
        <ul className="ul_list">
          <li>UseState</li>
          <li>useEffect()</li>
          <li>useContext()</li>
          <li>useReducer()</li>
          <li>useRef()</li>
          <li>useCallback()</li>
          <li>useMemo()</li>
        </ul>
      </div>
      <div>
        <h3>UseState()</h3>
        <p>useState hook use to store state/variable value is components </p>
        <p>
          useState Hooks take to argument <br /> const [age,setAge] =
          useState(0)
          <br />
          here ,the first argument age is initial state and the second one is to
          update that state.
        </p>
        <p>
          -----//////The useState hook is used for storing variables that are
          part of your application's state and will change as the user interacts
          with your website
        </p>
        <pre>
          for example:-
          <div>
            {`  import {"useState"} from "react-roter-dom" <br />
  const ReactuseState = () =>{
    const [count,setcount]=useStatee(0)
       return(
         <div>
          <p> count {count}</p>
          <button onClick={()=>setCount(count + 1)}>click me</button>
         </div>
  )} `}
          </div>
          <p>Output :-</p>
          <p>
            In the output u can see every single time when you click the button
            the count of is increasing
          </p>
        </pre>
      </div>
      {/**useEffect hook */}
      <div>
        <h3>useEffect()</h3>
        <p>
          useEffect hook allow you to perform side effect in your comoponent.
          Some examples of side effect are : fetching data,directly updating the
          DOM and timer
        </p>
        <p>
          ----/ useEffect use to render if the vabiable is updated, the effect
          will run again
        </p>
        <p>
          =====////When you call useEffect , you're telling React to run your
          “effect” function after flushing changes to the DOM
        </p>
        <div>
          <pre>
            <i> Example :-</i>
            <div>
              {`           import {useEffect ,useState} from 'react-router-dom
                const EffectHook = ()=>{
                    const [count,setCount] = useState(0)
                    useEffect(() =>{
                        setTimeOut(()=>{
                            setCount((count) => count + 1)
                        },1000)
                     })
                        return (
                            <div>
                            <p> timer {count} </p>
                            </div>

                    )
                  }`}
            </div>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default ReactHooks;
