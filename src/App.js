import React, { useState, useEffect } from "react";
import { Cards, Chart, Country } from "./components";
import "bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import { getData } from "./api";

export default function App() {
  // const [data, setData] = useState({});

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setData = await getData();
  //   };
  //   fetchData();
  // });

  return (
    <div>
      <Cards />
      <Chart />
      <Country />
    </div>
  );
}
