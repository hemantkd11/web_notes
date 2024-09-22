import React from "react";
import { Link } from "react-router-dom";
const JavascriptNotes = () => {
  return (
    <section className="App-page-view">
      <WhatIsJavaScript />
    </section>
  );
};

export default JavascriptNotes;

const WhatIsJavaScript = () => {
  return (
    <div className="notes-container">
      {/* question section started */}
      <button>
        <Link to="/web_notes/javascript/codingQuestion">Hello</Link>
      </button>
      <button>
        <Link to="/web_notes/javascript/codingQuestion"></Link>
      </button>
      <button>
        <Link to="/web_notes/javascript/codingQuestion"></Link>
      </button>
      <button>
        <Link to="/web_notes/javascript/codingQuestion"></Link>
      </button>
      <button>
        <Link to="/web_notes/javascript/codingQuestion"></Link>
      </button>

      <div className="Question-section">
        <h3 className="question">
          <span className="Q">{`-->`}</span> What is Javascript ?
        </h3>
        <p className="ans">
          Javascript is a interpreter programing language that use to make web
          pages interactive and add functanality into it{" "}
        </p>
      </div>
      {/*  question sectiomn ended here */}
      <div className="Question-section">
        <h3 className="question">
          <span className="Q">{`-->`} What is variables ?</span>
        </h3>
        <p className="ans">
          <pre>
            {`  Variables are use to hold value in it of any data type.
                
                There is Three type in Variable
                   1. var
                   2. let
                   3. const

                1. var : 
                   -- Its functional scope type if declare inside the function  then can access only itside it.

                   -- Its is hosted (means can used  before declare)\

                   -- It can be re-declared and updated.

                2. let :
                   -- It has a block scope (avilable within the block {} it is declared)
                   -- it is a hosted but not initialized, so its cannot be used before the declaration
                   -- its can be updated but not re-declared within the same block
                
                3. const :
                   -- It has a block scope
                   -- not hosted 
                   -- it must we initialized when declared and cannot be updated or re-declared


            `}
          </pre>
        </p>
      </div>
      <div className="Question-section">
        <h3 className="question">
          <span className="Q">{`-->`}</span> Data types in javascript
        </h3>
        <p className="ans">
          <pre>{`
        Data types define what kind of data a variable can hold. 
        javascript has two categories of data types primitive and non-primitive:
             1. Primitive
                -- There are the most basic data types in javascript, and their values are 
                   immutable(they can't be changed)

                   type in  primitive :
                    1. Number    : - Both Int and float comes into it.
                    2. String    : - sequence of  characters(text)
                    3. Boolean   : - Represent two value, either true or false
                    4. undefined : - A variable with is been declared but not assigned to any value it known as undefined
                    5. Null      : - intentional absence of any value (an enply value)
                    6. Symbol    : introduced in ES6(ecmascript 2015) that is unique and immutable value primarily used for object property key
                                   
                                   Eg. let sym = Symbol('identifier')
                    7. BigInt    : -  Introdeced in ES2020 use for the value larger then the number  and type can handle (above 2^53 -1)
                                    Eg.  let largeNumber = 1223334455667788888888n  // here 'n' denotes the BigInt
             2. Non-primitive
                -- these are object and can store multiple values.
                   
                    1. Object : represent a collection of key-value pairs.
                        
                            -->  what is Objects ?
                                ans  -  Collection of properties and methods is known as object

                            -->  How to create an object 
                                ans - There are certains way to create and object 
                                    1 . By Object literals : 
                                        Eg.
                                        const person = {
                                            firstName = "Hemant",
                                            lastName = "Diwakar",
                                            age  = 26
                                        }
                                    2. By Using the ( new Object ) syntex:
                                       Eg.
                                       const person = new Object();  // create a new object 
                                       person.name = "Hemant"     // after that creating properties for that object
                                       person.age = 26
                                    
                                    3. using Constructor function : 
                                       Eg.
                                       function person(FirstName,LastName,age){  // create a funtion 
                                           this.firstName = firstName;   // using constructor create a 
                                           this.LastName = LastName;
                                           this.age  = age;
                                       }
                                    4. Using class(es6)
                                       Eg. 
                                       class person{
                                            constructor(firstName,lastName,age){
                                               this.firstName = firstname;
                                               this.lastName = lastName;
                                               this.age = age ;
                                            }
                                       }
                        
                        ---> How to accessing Object Properties?
                            ans --  there are varies way to access the object properties
                                    1. By using Dot
                                       Eg. 
                                       console.log(person.firstName) // hemant

                                    2. By using square Bracket 
                                       Eg.
                                       console.log(person['firstname]) // hemant

                                    3. Object.key(person)

                        --> Adding  and Modification in properties
                           ans -- we can to that dinamically by simple way
                               Eg.
                               person.gender = "Male"  // Adding new property
                               person.age = 31         // Modifies the existing property
                        
                        --- Deleting Properties ?
                           ans --  You can remove the Properties from an Object using delete keyword
                                    Eg.  
                                    delete  person.age
                                    console.log(person.age)  // deleted
                        
                        --> checking properties?
                           ans - we can check the property of an object by using (in) and (hasOwnProperty()) method
                                 Eg.
                                 console.log(firstname in person);  // return Boolean value
                                 console.log(person.hasOwnProperty("age")) // return Boolean value
                        --> Object methods : 
                            ans  --  Methods are funtions stored as object properties
                                Eg. 
                                class person{
                                    constructor(firstName,lastName,age){
                                        this.firstName = firstname;
                                        this.lastName = lastName;
                                        this.age = age ;
                                        fullNAme : funtion(){
                                        return this.firsname + " " + this.lastName}
                                    }
                                }

                                Other  Object methods are : 
                                    1. Object.key(obj)
                                    2. Object.value(obj)
                                    3. object.enteries(obj) // retrun an array of with  [key,value] pairs
                                    4. Object.assign(target, ...sourcec) : sallow copy of an object to anoter object
                                    5. object.freeze(obj)  // protect from other entries

                        -- Looping through an object
                           ans --   use 
                        --> shallow copying Object
                
                ---${"Array"} :
                           Its also a type of data that is used to store a  multiple  value in a single variable.  
                           It is an Orderd collection of elements that can be of any data type.   
                           
                            --- How to create a Array Object ?
                                ans :
                                  -- Using literal syntex : 
                                     Eg . 
                                     const numbers  = [1,2,3,4,5];
                                  -- using the array constructor ?
                                     Eg.
                                     const numbers = new Array(1,2,3,4,5)

                            --- How to Access Elements in an Array ?
                                ans : --
                                  -- we can access array element by using index (0-based)
                                     Eg.
                                     console.log(fruits[0])
                            
                            --- How to midify elements in an array ?
                                ans : --
                                   -- we can modify the element using psuh, directly assigning a new value ata a specific index.
                            
                            --- How to Add element to an array ?
                                ans :-- 
                                   -- By using push(add element ad last index) , unshift(add element at first index) we can add element in the array.

                            --- How to Remove element to an array ?
                                ans :-- 
                                   -- By using pop(remove element from last index) , shift(remove element from first index) we can add element in the array.

                            --- How to check if a value is an array or not ?
                                ans :-- 
                                   -- Use Array.isArray( ) method is used to check if the object is an array or not

                            --- How to find an element in an array ?
                                ans :-- 
                                   --  BY using indexOf('element') and includes('elemant) method we can fine element in an array.

                            --- How to combine two array ?
                                ans :-- 
                                   -- we can concate them (fruits.concate(veg))  or use rest method to concate them

                            --- Hoe to convert array into strings
                               ans :--
                                   -- using join(from where to join like " ", "-") and also can use Sring Keyword to join the array

                            --- How to remove and replace the element ?
                                ans :-- 
                                   -- we can remove element by using Array methods like pop, unshift, splice(1,1,new element) method
                                      and replace them  by using push splice method and all

                            --- How to crete a subArray ? 
                                ans :--
                                   -- using method slice() we can create a subarray
                            ---
                            ---
                            ---
                            ---
                            ---
                            ---
                            ---
            `}</pre>
        </p>
      </div>
      <div className="Question-section">
        <h3 className="question">
          <span className="Q">{`-->`}</span> What is Function?
        </h3>
        <p className="ans">
          Funtion are the building block of code that allow you to encapsulate
          logics, reuse code, and implement complex behavior. There are several
          way to define a function in javascript : -
          <h4>1. Function Declaration</h4>
          <p>
            Answer -- A function declaration is the most basic way to define a
            function in javascript. It defines a named funtion that can be
            called anywhere within its scope {"(Hoisted)"}
            <pre>{`
               function functionName(name){
                    return 'hello, $ {name} !
               }
            `}</pre>
            -- Hoisting : function can be declare can done before they are
            defined in the code. <br />
            -- Scope : Available in the global or funtion scope in which they
            are defined
          </p>
          <h4>2. Function Expression</h4>
          <p>
            A function expression means define a function and assign it into a
            variable. They are hoisted means can not use before the defined{" "}
          </p>
          -- funtion expression are of two type anonymous vs named funtion A.
          Anonymous Function in this type of funtion they fon't have name. Used
          when passing funtions as an arhuments(callback)
          <pre>{`
               const variableNAme =  function(name){
                    return 'hello, $ {name} !
               }
            `}</pre>
          <br />
          B. named funtion expression has a Name, which is useful for recursion.
          <pre>{`
               const variableNAme =  greet(name){
                    return 'hello, $ {name} !
               }
            `}</pre>
        </p>
        <h4>3. Arrow Funtion</h4>
        <p>
          They do not use this and argument context, In place they have there
          own this in there surroundings.
          <pre>{`
               const funtionName =  (name) =>{
                    return 'hello, $ {name} !
               }
            `}</pre>
        </p>
        <h4>3. constructor Funtion</h4>
        <p>
          they are used to create Objects. By conventions, constructor funtion
          names start with an uppercase letter
          <pre>{`
               function FuntionName(name){
                    this.property = value
               }
            `}</pre>
        </p>
        <h4>3. Generator Funtion (ES6)</h4>
        <p>
          They do not use this and argument context, In place they have there
          own this in there surroundings.
          <pre>{`
               const funtionName =  (name) =>{
                    return 'hello, $ {name} !
               }
            `}</pre>
        </p>
      </div>
      <div className="Question-section">
        <h3 className="question">
          <span className="Q">{`-->`}</span> What is{" "}
          <i>Conditional Branching </i>?
        </h3>
        <p className="ans">
          Conditional Branching is a fundamental concept in programming where
          the flow of execution is altered based on certain consditions.
          <p>There are two way to perform conditional branching</p>
          <ul>
            <li style={{ listStyle: "dot" }}>using (if-else) Statement</li>
            <li>usinf ternary operator</li>
            <ul>
              <li>
                IF ELSE Statement: check a conditon and executes a block of code
                if that consditon is true.
              </li>
              <li>
                Ternary Operator(? : ) :- It is the shortest way to write a
                if-else consdition
              </li>
            </ul>
          </ul>
        </p>
      </div>
      <div className="Question-section">
        <h3 className="question">
          <span className="Q">{`-->`}</span> What is <i>Loop</i> ?
        </h3>
        <p className="ans">
          Loops are fundamental Constructor in programming that allow you to
          repeat a block of code multiple times.
          <p>
            The Two most common loops are the <i>while</i> and <i>for</i>
          </p>
          <ul>
            <li>
              While Loop : <br />A while loop keeps executed as long as a
              specified condition is true. the condition is evaluated before
              each iteration.
            </li>
            <li>
              For loop :- <br />A for loop is generally used when the number of
              iterations is known beforehand.It allow you to define the
              initizalization,consdition,increment/decrement
            </li>
          </ul>
        </p>
      </div>
      <div className="Question-section">
        <h3 className="question">
          <span className="Q">{`-->`}</span> What is <i>Switch statement</i> ?
        </h3>
        <p className="ans">
          the switch statement in javascript is used to perform differnt actions
          based on different conditions,It is a control flow statement That
          allow a variable to be tested for equality against the list of value
        </p>
      </div>
    </div>
  );
};
