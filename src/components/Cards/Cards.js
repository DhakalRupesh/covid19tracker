import React, { useState, useEffect } from "react";
import axios from "axios";
import NumFormat from "react-number-format";
import CountUp from "react-countup";
import "./Cards.css";

const Cards = () => {
  const [covid, setcovid] = useState("");
  useEffect(() => {
    axios
      .get("https://corona.lmao.ninja/v3/covid-19/all")
      .then((res) => {
        setcovid(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className="cardContainer">
        <div className="infectedCard">
          <h4>Infected</h4>
          <h5>
            <NumFormat
              value={covid.cases}
              displayType={"text"}
              thousandSeparator={true}
            />
          </h5>
          <h6>{new Date(covid.updated).toDateString()}</h6>
        </div>
        <div className="recoveredCard">
          <h4>Recovered</h4>
          <h5>
            <NumFormat
              value={covid.recovered}
              displayType={"text"}
              thousandSeparator={true}
            />
          </h5>
          <h6>{new Date(covid.updated).toDateString()}</h6>
        </div>
        <div className="deathsCard">
          <h4>Deaths</h4>
          <h5>
            <NumFormat
              value={covid.deaths}
              displayType={"text"}
              thousandSeparator={true}
            />
          </h5>
          <h6>{new Date(covid.updated).toDateString()}</h6>
        </div>
      </div>
    </>
  );
};

export default Cards;
