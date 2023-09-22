import { createContext, useEffect, useState } from "react";
import data from "../data.json";

export const countryContext = createContext(null);

const CountrycontextProvider = (props) => {
  const [Countrydata, setCountrydata] = useState(data);
  const [searchCountry, setSearchCountry] = useState("");
  const [filteredSearch, setFilteredSearch] = useState([]);
  const [region, setRegion] = useState("nigeria");

  const regionapi = `https://restcountries.com/v3.1/region/${region}`;

  console.log(regionapi);
  useEffect(() => {
    if (searchCountry) {
      const filtered = Countrydata.filter((country) =>
        Object.values(country)
          .join("")
          .toLowerCase()
          .includes(searchCountry.toLowerCase())
      );
      //console.log(filtered)
      setFilteredSearch(filtered);
      // console.log(filtered);
    } else {
      setFilteredSearch(Countrydata);
    }
  }, [searchCountry, Countrydata]);

  // useEffect(() => {
  //   const datafetch = fetch(${regionapi});

  //   return () => {
  //     second
  //   }
  // }, [third])

  const contextValue = {
    Countrydata,
    searchCountry,
    setSearchCountry,
    filteredSearch,
    setFilteredSearch,
  };

  return (
    <countryContext.Provider value={contextValue}>
      {props.children}
    </countryContext.Provider>
  );
};

export default CountrycontextProvider;
