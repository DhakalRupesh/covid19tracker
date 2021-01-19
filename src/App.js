import React, { useState, useEffect } from "react";
import { Banner, Cards, Chart, Country } from "./components";
import "bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
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
      <Banner />
      <Cards />
      {/* <Chart /> */}
      <Country />
    </div>
  );
}
