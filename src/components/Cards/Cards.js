import React from "react";
import "./Cards.css";

const Cards = () => {
  return (
    <>
      <div className="cardContainer">
        <div className="infectedCard">
          <h4>Infected</h4>
          <h5>76,26,235</h5>
          <h6>wed dec 16 2020</h6>
        </div>
        <div className="recoveredCard">
          <h4>Recovered</h4>
          <h5>76,26,235</h5>
          <h6>wed dec 16 2020</h6>
        </div>
        <div className="deathsCard">
          <h4>Deaths</h4>
          <h5>76,26,235</h5>
          <h6>wed dec 16 2020</h6>
        </div>
      </div>
    </>
  );
};

export default Cards;
