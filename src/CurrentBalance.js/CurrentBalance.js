import React from "react";
import chartImg from "../Assets/img/cardimage/graph.png";
import arrowIcon from "../Assets/img/cardimage/icon.png";
const CurrentBalance = () => {
  return (
    <div>
      <div
        className=" basis-[25%] md:w-[70%]  md:self-center lg:w-full self-center bg-white shadow-md 
      rounded-lg my-5 relative"
      >
        <div className="  flex-auto p-5 relative">
          <p className=" text-xs">Current Balance</p>
          <p className=" text-base font-semibold">$ 392,556.76</p>
          <p className=" text-xs mt-4">
            <span className=" text-[#2BC155]"> +2.7% </span> than last week
          </p>
          <img className=" w-10 absolute top-6 right-3" src={arrowIcon} alt="" />
        </div>
        <div className=" p-4">
          <img className=" w-full " src={chartImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CurrentBalance;
