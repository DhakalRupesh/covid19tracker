import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Cards, Chart, Country } from "./components";
import styles from "./App.module.css";
// import { getData } from "./api";

export default function App() {
  return (
    <div>
      hello
      <Cards />
      <Chart />
      <Country />
    </div>
  );
}
