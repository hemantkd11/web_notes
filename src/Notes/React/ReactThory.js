import React from "react";

const ReactThory = () => {
  return (
    <div>
      <div>
        <div>
          {/* queston start */}
          <div>
            <h3>Questions 1. What is virtual DOM in React?</h3>
            <p>
              It a lightweight copy of real dom(A certual representation of the
              DOM). SO If any state Get changed so the virtual dom get update
              first then apply on real dom that make apllication faster and more
              optimize{" "}
            </p>
          </div>
          {/* queston end */}
          {/* queston start */}
          <div>
            <h3>Questions 1. What is JSX?</h3>
            <p>
              Its a syntex extention of javascript. JSX in use to create a react
              element,
            </p>
          </div>
          {/* queston start */}
          {/* queston end */}
          <div>
            <h3>Questions 1. What is components and there types in react?</h3>
            <p>
              components are the Building block of react.that help to build
              every piece of of Ui in to small small pieces
            </p>
            there are two typenof componets :
            <p>
              funtional component: Funtion compoennt are stateless component are
              simple and more consious way to create a compoennts
            </p>
            <p>
              Class Components : The class compoent are javascript funtion they
              are little complex then funtional comoennt. The functional
              components are not aware of the other components in your program
              whereas the class components can work with each other. We can pass
              data from one class component to another class component.
            </p>
          </div>
          {/* queston end */}
          {/* queston start */}
          <div>
            <h3>Explain the creation of list </h3>
          </div>
          {/* queston end */}
          {/* queston start */}
          <div>
            <h3>Explain keys </h3>
            <p>
              Key are use to when you are using list they help to identiy the
              list element which one is updated and deleted{" "}
            </p>
          </div>
          {/* queston end */}
          {/* queston start */}
          <div>
            <h3>what states </h3>
            <p>
              States are object thet use to hold data or information that may
              chane over the life of the components{" "}
            </p>
          </div>
          {/* queston end */}
          {/* queston start */}
          <div>
            <h3>what props </h3>
            <p>
              Props ar ethe object that in the compoents and are use to pass
              daat from one to anothe compents in react
            </p>
          </div>
          {/* queston end */}
          <h3>Explain the lifecycle methods of components</h3>
          <p>
            A React Component can go through four stages of its life as follows.{" "}
            <br />
            Initialization: This is the stage where the component is constructed
            with the given Props and default state. This is done in the
            constructor of a Component Class. <br />
            Mounting: Mounting is the stage of rendering the JSX returned by the
            render method itself. <br /> Updating: Updating is the stage when
            the state of a component is updated and the application is
            repainted. <br /> Unmounting: As the name suggests Unmounting is the
            final step of the component lifecycle where the component is removed
            from the page.
          </p>
          <h3>Use to ref in react</h3>
          <p>
            They are used in case where we want to chanhe the value of a child
            component, without use of props and all they have wide functionality
            as we can use callback with them
          </p>
          {/* start */}
          <h3>useState Hook</h3>
          <p>
            useSate Hook allow to use states in the funtional compoents and use
            for statemanagment
          </p>
          {/* end */}
          {/* start */}
          <h3>UseEffect Hook</h3>
          <p>
            useEffect Hook is use to add lifecycle to funtional components and
            is an alternative to udate method of class
          </p>
          {/* end */}
        </div>
      </div>
    </div>
  );
};
