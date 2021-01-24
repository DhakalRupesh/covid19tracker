import React, { useState, useEffect } from "react";
import axios from "axios";
import NumFormat from "react-number-format";
import CountUp from "react-countup";
import "./Cards.css";

const Cards = () => {
  const [covid, setcovid] = useState([]);
  const [results, setResults] = useState([]);
  const [searchCountries, setSearchCountries] = useState("");

  // useEffect(() => {
  //   axios
  //     .get("https://corona.lmao.ninja/v3/covid-19/all")
  //     .then((res) => {
  //       setcovid(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  useEffect(() => {
    axios
      .all([
        axios.get("https://corona.lmao.ninja/v3/covid-19/all"),
        axios.get("https://corona.lmao.ninja/v3/covid-19/countries"),
      ])
      .then((responseArr) => {
        setcovid(responseArr[0].data);
        setResults(responseArr[1].data);
        // setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const filterCountry = results.filter((item) => {
    return searchCountries !== ""
      ? item.country.toLowerCase().includes(searchCountries.toLocaleLowerCase())
      : item;
    // return item.country === searchCountry;
  });

  const countries = filterCountry.map((data, i) => {
    return (
      <div>
        <img src={data.countryInfo.flag} alt="country flag" />
        <h1>{data.country}</h1>
        <p>{data.cases}</p>
      </div>
    );
  });

  // filtering

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
      <form action="submit">
        <input
          type="text"
          id="countrySearch"
          placeholder="Search country ...."
          onChange={(e) => setSearchCountries(e.target.value)}
        />
      </form>
      {countries}
    </>
  );
};

export default Cards;
