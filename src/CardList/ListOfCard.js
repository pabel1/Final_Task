import React from "react";
import CurrentBalance from "../CurrentBalance.js/CurrentBalance";
import TableList from "./TableList";

const ListOfCard = () => {
  return (
    <div className=" flex flex-col-reverse   lg:flex-row gap-5">
      <div className=" basis-[75%] py-3 bg-white shadow-md rounded-lg my-5 relative">
        <div className=" flex justify-between p-3 px-4">
          <span>
            <h1 className=" text-xl font-semibold">Card List</h1>
            <p className=" text-sm  text-primaryText">
              Lorem ipsum dolor sit amet, consectetur
            </p>
          </span>
          <div className=" bg-[#F3F0FF] p-3 rounded-xl font-semibold">
            Newest
            <select className=" bg-transparent" name="Newest" id="">
              Newest
            </select>
          </div>
        </div>

        {/* list of data by using table */}
        <TableList />
      </div>
      
        <CurrentBalance />
      
    </div>
  );
};

export default ListOfCard;
