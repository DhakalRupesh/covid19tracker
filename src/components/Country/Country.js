import React, { useEffect, useState } from "react";

import "./Country.css";

const Country = () => {
  const [searchCountry, setSearchCountry] = useState("");
  return (
    <>
      <div className="countryContainer">
        <form action="submit">
          <input
            type="text"
            id="countrySearch"
            placeholder="Search country ...."
            onChange={(e) => setSearchCountry(e.target.value)}
          />
        </form>
      </div>
    </>
  );
};

export default Country;
