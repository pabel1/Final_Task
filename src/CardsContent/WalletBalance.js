import React from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import incomeChart from '../Assets/img/cardimage/Vector 5.png'
import arrowIcon from '../Assets/img/cardimage/subInfo.png'
import progressImg from '../Assets/img/icons/progressBar.png'
const WalletBalance = () => {
  return (
    <div className=" flex flex-col  lg:flex-row gap-5">
      <div className=" basis-[75%] px-4 py-3 bg-white shadow-md rounded-lg my-5 relative">
        <NavLink to="/" className=" absolute top-3 right-5">
          <HiOutlineDotsVertical className=" text-xl" />
        </NavLink>
        <div className=" flex  flex-col gap-10 lg:flex-row justify-between lg:mr-4 p-4">
          <span className=" space-y-2">
            <p className=" text-base ">Wallet Balance</p>
            <p className=" text-2xl text-active font-semibold">$824,571.93</p>
          </span>
          <div className=" flex gap-14 lg:gap-12 ">
            <span className=" space-y-2">
              <p className=" text-xs text-primaryText ">VALID THRU</p>
              <p>08/21</p>
            </span>
            <span className=" space-y-2">
              <p className=" text-xs text-primaryText ">CARD HOLDER</p>
              <p>Eren Yeager</p>
            </span>
            <span className=" space-y-2">
              <p></p>
              <p>**** **** **** 1234</p>
            </span>
          </div>
        </div>
        <div className=" px-4 mt-5">
          <img src={progressImg} alt="" />
        </div>
      </div>
      {/* income section */}
      <div className=" basis-[25%] md:w-[70%] self-center bg-white shadow-md rounded-lg my-5 relative">
        <div className=" bg-no-repeat bg-cover flex-auto p-5 relative" >
            <p className=" text-xs">Income</p>
            <p className=" text-base font-semibold">$12,874</p>
            <img className=" absolute right-2" src={arrowIcon} alt="" />

        </div>
        <img className=" w-full  object-fill h-fit rounded-b-xl" src={incomeChart} alt="" />
      </div>
    </div>
  );
};

export default WalletBalance;
