import React, { useState } from "react";
import Car from "./TestClassComp";
const ReactTab = () => {
  const [activeTab, setActivetab] = useState("tabAbout");
  let row = 10;
  let com = 10;
  let num = 100;
  const Tabledata = [];
  //  table component
  for (let i = 0; i < row; i++) {
    let rows = [];
    for (let j = 0; j < com; j++) {
      rows.push(<td key={num}>{num}</td>);
      num--;
    }
    if (i % 2 !== 0) {
      rows.reverse();
      Tabledata.push(<tr>{rows}</tr>);
    } else {
      Tabledata.push(<tr>{rows}</tr>);
    }
  }

  // calander
  let date = new Date("February 01, 2024");

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let daysInMonths = [];
  for (let month = 0; month < 12; month++) {
    let daysInMonth = new Date(2024, month + 1, 0).getDate();
    daysInMonths.push(daysInMonth);
  }
  let yearBox = [];
  let Dayscol = [];
  for (let i = 0; i < 12; i++) {
    let MonthBox = [];
    for (let j = 1; j <= daysInMonths[i]; j++) {
      MonthBox.push(j);
    }
  }
  let DayCount = date.getUTCDate();
  let Gteday = days[date.getDay()];
  console.log("da6eu", daysInMonths);

  const tabs = [
    { id: 0, label: "Contact", Context: <Contact /> },
    { id: 1, label: "About", Context: <About /> },
    { id: 2, label: "Company", Context: <Company /> },
  ];

  return (
    <div>
      {/* tabs */}
      {/* <div>
        {tabs.map((tab, index) =  > (
          <>
            <button
              key={tab.id}
              className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActivetab(tab.id)}
            >
              {tab.label}
            </button>
            {/* <div>{activeTab === tab.id ? tab.Context : ""}</div> */}
      {/* </> */}
      {/* // ))} */}
      {/* //   </div> */}

      {/* Tab Content */}
      {/* <div className="tab-content">{tabs[activeTab].Context}</div> */}
      {/* tab content */}

      <div>
        <Car name={"Hemant"} age={27} text={"Click Me"} />

        <button
          className={`tab-button ${activeTab === "tabAbout" ? "active" : ""}`}
          onClick={() => setActivetab("tabAbout")}
        >
          About
        </button>
        <button
          className={`tab-button ${activeTab === "tabCompany" ? "active" : ""}`}
          onClick={() => setActivetab("tabCompany")}
        >
          Company
        </button>
        <button
          className={`tab-button ${activeTab === "tabContact" ? "active" : ""}`}
          onClick={() => setActivetab("tabContact")}
        >
          Contact
        </button>
      </div>
      <div>
        {activeTab === "tabAbout" ? (
          <About />
        ) : activeTab === "tabCompany" ? (
          <Company />
        ) : activeTab === "tabContact" ? (
          <Contact />
        ) : (
          ""
        )}
      </div>
      <div></div>
      <table>
        <tbody>{Tabledata} hello</tbody>
      </table>
    </div>
  );
};
function Contact() {
  return (
    <React.Fragment>
      <h2>Contact Information</h2>
      <p>Name: Hemant Kumar Diwakar</p>
      <p>Email: diwakarhemant11@gmail.com</p>
      <p>Phone: 9624353446</p>
    </React.Fragment>
  );
}

// Company Component
function Company() {
  return (
    <div id="tabCompany">
      <h2>Company Information</h2>
      <p>Company Name: XYZ Tech Solutions</p>
      <p>Address: 123 Main St, Tech City</p>
      <p>Contact: info@xyztech.com</p>
    </div>
  );
}

// About Component
function About() {
  return (
    <div id="tabAbout">
      <h2>About Us</h2>
      <p>
        We are a leading tech company specializing in full-stack development and
        innovative software solutions.
      </p>
    </div>
  );
}

export default ReactTab;
