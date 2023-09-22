import React, { useState } from "react";

const Filter = () => {
  const [modal, setModal] = useState(false);
  return (
    <div>
      <div
        className=" bg-navBar w-full  cursor-pointer text-gray-100 px-10 py-6 h-8 rounded-sm flex justify-center items-center"
        onClick={() => setModal(!modal)}
      >
        <h3 className="text-textBases">Filter by Region +</h3>

        <div className="bg-navBar absolute  top-48 flex flex-col px-4 rounded-sm py-2 justify-start w-48  ">
          <p className=" py-1">Asia</p>
          <p className=" py-1">America</p>
          <p className=" py-1">Africa</p>
          <p className=" py-1">Europe</p>
          <p className=" py-1">Oceania</p>
        </div>
      </div>
    </div>
  );
};

export default Filter;
