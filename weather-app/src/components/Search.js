import React, { useState } from "react";

const Search = () => {
  const [searchText, setSearchText] = useState();

  return (
    <div>
      <form className="form">
        <input
          type="text"
          name="SearchText"
          placeholder="Enter a city name.."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <input type="submit" onClick="" className="btn btn-dark btn-block" />
      </form>
    </div>
  );
};

export default Search;
