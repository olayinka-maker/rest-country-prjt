import React, { useContext } from "react";
import { countryContext } from "../context/country-context";

const Header = () => {
  return (
    <div className="flex w-full fixed items-center justify-between py-6 px-10 bg-navBar text-white">
      <div>
        <h1 className=" font-bold text-lg">Where in the World?</h1>
      </div>
      <div>
        <img src="" alt="" />
        <p className=" text-base">Dark Mode </p>
      </div>
    </div>
  );
};

export default Header;
