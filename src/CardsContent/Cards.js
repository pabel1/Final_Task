import React from "react";
// import bgImg from "../Assets/img/cardimage/Mask Group.png";
import bgupperIcon from "../Assets/img/cardimage/02.png";
const Cards = () => {
  return (
    <div className=" flex flex-col justify-center md:grid md:grid-cols-2 lg:flex lg:flex-row   gap-5 ">
      <div
        className="relative bg__img bg-[#306fea] text-white p-4 tracking-wide rounded-xl 
      basis-1/3"
      >
        {/* <img className=' absolute inset-0 w-full h-full opacity-50' src={bgImg} alt="" /> */}
        <img className=" absolute top-3 right-3 w-8" src={bgupperIcon} alt="" />
        <p className=" text-sm  font-semibold">Main Balance</p>
        <h1 className=" text-xl font-bold">$88,455.12</h1>
        <div className=" flex items-center gap-5 text-xs mt-4">
          <span>
            <p className=" text-secondaryText font-normal">VALID THRU</p>
            <p className=" text-sm font-semibold">08/21</p>
          </span>
          <span>
            <p className=" text-secondaryText font-normal">CARD HOLDER</p>
            <p className=" text-sm font-semibold">Eren Yeager</p>
          </span>
        </div>
      </div>
      <div className="relative bg__img__2 bg-[#FF9820] text-white p-4 tracking-wide rounded-xl basis-1/3">
        {/* <img className=' absolute inset-0 w-full h-full opacity-50' src={bgImg} alt="" /> */}
        <img className=" absolute top-3 right-3 w-8" src={bgupperIcon} alt="" />
        <p className=" text-sm  font-semibold">Main Balance</p>
        <h1 className=" text-xl font-bold">$523.56</h1>
        <div className=" flex items-center gap-5 text-xs mt-4">
          <span>
            <p className=" text-secondaryText font-normal">VALID THRU</p>
            <p className=" text-sm font-semibold">08/21</p>
          </span>
          <span>
            <p className=" text-secondaryText font-normal">CARD HOLDER</p>
            <p className=" text-sm font-semibold">Eren Yeager</p>
          </span>
        </div>
      </div>
      <div className="relative bg__img__3 bg-[#D247C4] text-white p-4 tracking-wide rounded-xl basis-1/3">
        {/* <img className=' absolute inset-0 w-full h-full opacity-50' src={bgImg} alt="" /> */}
        <img className=" absolute top-3 right-3 w-8" src={bgupperIcon} alt="" />
        <p className=" text-sm  font-semibold">Main Balance</p>
        <h1 className=" text-xl font-bold">$126,445.23</h1>
        <div className=" flex items-center gap-5 text-xs mt-4">
          <span>
            <p className=" text-secondaryText font-normal">VALID THRU</p>
            <p className=" text-sm font-semibold">08/21</p>
          </span>
          <span>
            <p className=" text-secondaryText font-normal">CARD HOLDER</p>
            <p className=" text-sm font-semibold">Eren Yeager</p>
          </span>
        </div>
      </div>
      <div className="relative bg__img__4 bg-[#FF5555] text-white p-4 tracking-wide rounded-xl basis-1/3">
        {/* <img className=' absolute inset-0 w-full h-full opacity-50' src={bgImg} alt="" /> */}
        <img className=" absolute top-3 right-3 w-8" src={bgupperIcon} alt="" />
        <p className=" text-sm  font-semibold">Main Balance</p>
        <h1 className=" text-xl font-bold">$10,000.45</h1>
        <div className=" flex items-center gap-5 text-xs mt-4">
          <span>
            <p className=" text-secondaryText font-normal">VALID THRU</p>
            <p className=" text-sm font-semibold">08/21</p>
          </span>
          <span>
            <p className=" text-secondaryText font-normal">CARD HOLDER</p>
            <p className=" text-sm font-semibold">Eren Yeager</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Cards;
