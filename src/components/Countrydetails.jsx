import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { countryContext } from "../context/country-context";

const Countrydetails = () => {
  const { countryname } = useParams();
  const { Countrydata } = useContext(countryContext);
  const country = Countrydata.find((country) => country.name === countryname);

  const {
    name,
    flag,
    population,
    nativeName,
    region,
    subregion,
    currencies,
    capital,
    languages,
    topLevelDomain,
  } = country;

  return (
    <div className="h-full py-16 bg-background text-white">
      <div className="flex flex-col md:flex-row py-32 gap-10 items-center justify-center px-4 md:px-8 lg:px-16">
        <img src={flag} alt={name} className="w-full md:w-1/2 max-w-2xl" />

        <div className="md:w-1/2 flex  justify-center items-center gap-6 px-4 py-6">
          <div>
            <h1 className="text-3xl font-bold mb-4">{name}</h1>
            <p>Population: {population}</p>
            <p>Native Name: {nativeName}</p>
            <p>Region: {region}</p>
            <p>Subregion: {subregion}</p>
            <p>Capital: {capital}</p>
          </div>
          <div>
            <p>Top Level Domain: {topLevelDomain}</p>
            <p>
              Currencies:{" "}
              {currencies.map((currency) => currency.name).join(", ")}
            </p>
            <p>Languages: {languages.map((lang) => lang.name).join(", ")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countrydetails;
