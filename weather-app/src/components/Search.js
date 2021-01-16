import React, { useState } from "react";

const Search = ({ getTemp }) => {
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
        <input
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            getTemp(searchText);
          }}
          className="btn btn-dark btn-block"
        />
      </form>
    </div>
  );
};

export default Search;
