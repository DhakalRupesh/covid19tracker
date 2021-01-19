import React from "react";
import "./Country.css";

const Country = () => {
  return (
    <>
      <div className="countryContainer">
        <form action="submit">
          <input
            type="text"
            id="countrySearch"
            placeholder="Search country ...."
          />
        </form>
      </div>
    </>
  );
};

export default Country;
