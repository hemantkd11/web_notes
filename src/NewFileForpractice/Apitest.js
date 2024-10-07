import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";

const Apitest = () => {
  const [data, setData] = useState([]);
  const [eror, setError] = useState("");
  const [search, setSearch] = useState("");
  const [row, setRow] = useState([]);

  const CallApi = async () => {
    const URL =
      "https://api.open-meteo.com/v1/forecast?latitude=18.9733536&longitude=72.82810491917377&hourly=temperature_2m,weather_code,windspeed";
    try {
      const res = await fetch(URL, {
        method: "GET",
        headers: {
          "content-Type": "application/json",
        },
      });
      const responce = await res.json();

      if (responce) {
        setData(responce.hourly[search]);
      } else {
        console.log("nothing to search");
      }

      // setData(responce);
    } catch (error) {
      setError("Api Not working  :", error);
      setData(null);
    }
  };
  console.log(data.length);
  const datatable = () => {
    let num = data.length - 1;
    let row = 10;
    let col = 10;
    let tableData = [];
    for (let i = 0; i < row; i++) {
      let cell = [];
      for (let j = 0; j < 10; j++) {
        if (num >= 1) {
          cell.push(<td key={num}>{data[num]}</td>);
        } else {
          cell.push(<td key={num}> </td>);
        }
        num--;
      }
      if (i % 2 !== 2) {
        cell.reverse();
        tableData.push(<tr>{cell}</tr>);
      } else {
        tableData.push(<tr>{cell}</tr>);
      }
    }
    setRow(tableData);
  };
  useEffect(() => {
    datatable();
  }, [data]);

  console.log(data);
  return (
    <div>
      <div>
        {" "}
        <input type="text" onChange={(e) => setSearch(e.target.value)} />
        <button onClick={CallApi}>hello</button>
        <table>
          <tbody>{row}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Apitest;
