import React, { useContext } from "react";
import { countryContext } from "../context/country-context";

const Search = () => {
  const { setSearchCountry, searchCountry } = useContext(countryContext);

  console.log(searchCountry);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for a Country...."
          className="p-6 h-8 w-96 bg-navBar text-white rounded-md outline-none text-sm"
          onChange={(e) => setSearchCountry(e.target.value)}
        />
        <img src="" alt="" />
      </form>
    </div>
  );
};

export default Search;
