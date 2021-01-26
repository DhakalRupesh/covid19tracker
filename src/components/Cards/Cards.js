import React, { useState, useEffect } from "react";
import axios from "axios";
import NumFormat from "react-number-format";
import "./Cards.css";
import "../Country/Country.css";

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

  // filtering the country
  const filterCountry = results.filter((item) => {
    // return searchCountries !== ""
    //   ? item.country.toLowerCase().includes(searchCountries.toLocaleLowerCase())
    //   : item;

    // return searchCountries !== ""
    //   ? item.country.toLowerCase() === searchCountries
    //   : null;
    return searchCountries !== ""
      ? item.country.toLowerCase().includes(searchCountries.toLowerCase())
      : null;
    // return item.country === searchCountry;
  });

  const countries = filterCountry.map((data, i) => {
    return (
      <div className="filterContainer">
        <div className="imgContainer">
          <img
            className="filterImage"
            src={data.countryInfo.flag}
            alt="country flag"
          />
          <h5>{data.country}</h5>
        </div>

        <div className="filterInformations">
          <p>
            <span className="cases">Infected </span>
            <NumFormat
              value={data.cases}
              displayType={"text"}
              thousandSeparator={true}
            />
          </p>
          <p>
            <span className="recovered">Recovered </span>
            <NumFormat
              value={data.recovered}
              displayType={"text"}
              thousandSeparator={true}
            />
          </p>
          <p>
            <span className="death">Deaths </span>
            <NumFormat
              value={data.deaths}
              displayType={"text"}
              thousandSeparator={true}
            />
          </p>
        </div>
        <div className="filterInformations1">
          <p>
            <span className="cases">Active </span>
            <NumFormat
              value={data.active}
              displayType={"text"}
              thousandSeparator={true}
            />
          </p>
          <p>
            <span className="recovered">Tests </span>
            <NumFormat
              value={data.tests}
              displayType={"text"}
              thousandSeparator={true}
            />
          </p>
          <p>
            <span className="death">Critical </span>
            <NumFormat
              value={data.critical}
              displayType={"text"}
              thousandSeparator={true}
            />
          </p>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="cardContainer">
        <div className="infectedCard">
          <h4>Infected</h4>
          <h6>
            <NumFormat
              value={covid.cases}
              displayType={"text"}
              thousandSeparator={true}
            />
          </h6>
          <h6>{new Date(covid.updated).toDateString()}</h6>
        </div>
        <div className="recoveredCard">
          <h4>Recovered</h4>
          <h6>
            <NumFormat
              value={covid.recovered}
              displayType={"text"}
              thousandSeparator={true}
            />
          </h6>
          <h6>{new Date(covid.updated).toDateString()}</h6>
        </div>
        <div className="deathsCard">
          <h4>Deaths</h4>
          <h6>
            <NumFormat
              value={covid.deaths}
              displayType={"text"}
              thousandSeparator={true}
            />
          </h6>
          <h6>{new Date(covid.updated).toDateString()}</h6>
        </div>
      </div>
      <div className="countryContainer">
        <form>
          <input
            type="text"
            id="countrySearch"
            placeholder="Search country ...."
            onChange={(e) => setSearchCountries(e.target.value)}
          />
        </form>
        <p className="note">Note: Type and scroll to view country result</p>
      </div>
      {countries}
    </>
  );
};

export default Cards;
