import React, { useEffect, useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);
  let [interver, setinterver] = useState(null);
  //   const handleIncrement = () => {
  //     setCount(count++);
  //   };
  //   const handledecrement = () => {
  //     setCount(count--);
  //   };

  useEffect(() => {
    // Cleanup function to clear the interval when the component unmounts
    return () => {
      if (interver) {
        clearInterval(interver);
      }
    };
  }, [interver]); // Run cleanup when interver changes
  const handleTimer = () => {
    if (!interver) {
      const timer = setInterval(() => {
        setCount((num) => num + 1);
      }, 1000);
    }
    // return timer;
  };
  const handleReset = () => {
    clearInterval();
    setCount(0);
    setinterver(null);
  };
  const tabledata = [
    { Head: "Name" },
    { Head: "Age" },
    { Head: "Company Name" },
    {
      name: "Hemant",
      age: 23,
      company: "Company A",
    },
    {
      name: "John",
      age: 30,
      company: "Company B",
    },
    {
      name: "Alice",
      age: 28,
      company: "Company C",
    },
    {
      name: "Bob",
      age: 35,
      company: "Company D",
    },
  ];
  return (
    <div>
      <div>
        {count}
        <button onClick={handleTimer}>Plus</button>
        <button onClick={handleReset}>minus</button>
      </div>
      <table>
        <thead>
          <tr>
            {tabledata.map((item) => (
              <th>{item.Head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tabledata.map((item) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.company}</td>
            </tr>
          ))}
        </tbody>

        <tr></tr>
      </table>
    </div>
  );
};

export default Count;
