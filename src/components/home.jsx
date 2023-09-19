import React, { useContext } from "react";
import Search from "./search";
import Filter from "./filter";
import { countryContext } from "../context/country-context";
import { Link } from "react-router-dom";

const Home = () => {
  const { Countrydata, countries, filteredSearch } = useContext(countryContext);

  // console.log(filteredSearch);
  // const { name, capital } = Countrydata;
  return (
    <div className=" h-auto   w-full text-white cursor-pointer ">
      <div className="flex px-28 justify-between  w-full py-32 ">
        <Search />
        <Filter />
      </div>
      {filteredSearch ? (
        <div className="container h-full mx-auto -my-16">
          <div className="flex flex-wrap -mx-4">
            {filteredSearch.map((filtered) => (
              <Link
                to={`countries/${filtered.name}`}
                className="w-1/4 px-4 mb-8" // Each card takes up one-fourth of the container width
                key={filtered.numericCode}
              >
                <div className="bg-white shadow-md rounded-md overflow-hidden">
                  <img
                    src={filtered.flag}
                    alt={filtered.name}
                    className="w-full h-48 object-cover rounded-sm"
                  />
                  <div className="p-4 bg-navBar rounded-sm">
                    <h4 className="text-lg font-semibold">{filtered.name}</h4>
                    <p>Population: {filtered.population.toLocaleString()}</p>
                    <p>Region: {filtered.region}</p>
                    <p>Capital: {filtered.capital}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <div className="container mx-auto -my-16">
          <div className="flex flex-wrap -mx-4">
            {Countrydata.map((country) => {
              const { numericCode, name, flag, population, region, capital } =
                country;
              return (
                <div
                  to={`/countries/${name}`}
                  className="w-1/4 px-4 mb-8" // Each card takes up one-fourth of the container width
                  key={numericCode}
                >
                  <div className="bg-white shadow-md rounded-md overflow-hidden">
                    <img
                      src={flag}
                      alt={name}
                      className="w-full h-48 object-cover rounded-sm"
                    />
                    <div className="p-4 bg-navBar rounded-sm">
                      <h4 className="text-lg font-semibold">{name}</h4>
                      <p>Population: {population.toLocaleString()}</p>
                      <p>Region: {region}</p>
                      <p>Capital: {capital}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
