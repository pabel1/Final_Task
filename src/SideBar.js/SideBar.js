import React from "react";
import Logo from "../Assets/img/icons/invoice (1) 1.png";
import LogoName from "../Assets/img/icons/kubayar.png";
// import transaction from '../Assets/img/icons/ic_transcation.svg'
// import invoices from '../Assets/img/icons/ic_invoices.svg'

import { FaRegUser } from "react-icons/fa";
import { RiMessage3Line } from "react-icons/ri";
import { GiSettingsKnobs } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import MainMenu from "./MainMenu";

const SideBar = () => {
  // const activeClass='activeClass'
  // const normalClass='normalClass'

  return (
    <div className=" h-screen flex flex-col items-start md:items-center">
      {/* logo  */}
      <div className="w-full  flex items-center gap-2  py-5 px-4 mx-auto">
        <img className=" bg-active p-2 rounded-xl " src={Logo} alt="" />
        <span className=" hidden md:block">
          <img className="" src={LogoName} alt="" />
          <p className=" text-[10px] text-primaryText">
            Invoicing Admin Dashboard
          </p>
        </span>
      </div>

      {/* Main Menu */}
      <MainMenu/>
      
      

      {/* others Menu*/}
      <div className="w-full text-center mr-3 md:mr-0 md:text-left space-y-4 ">
        <h2 className=" my-5 font-semibold md:pl-8">Others</h2>
        <NavLink
          to="user"
          className={(navData) =>
            navData.isActive ? "activeClass" : "normalClass"
          }
        >
          <span className="relative">
            <FaRegUser className="text-2xl md:text-3xl " />
            {/* <span
              className=" absolute -top-3 left-3 px-2 py-1 bg-active rounded-full text-sm
            text-white  md:hidden"
            >
              
            </span> */}
          </span>

          <span
            className=" text-base hidden md:block 
                "
          >
            Leads
          </span>
          {/* <span className=" px-2 py-1 bg-active rounded-full text-sm text-white hidden md:block">
           
          </span> */}
        </NavLink>
        <NavLink
          to="user"
          className={(navData) =>
            navData.isActive ? "activeClass" : "normalClass"
          }
        >
          <span className="relative">
            <RiMessage3Line className="text-2xl md:text-3xl " />
            <span
              className=" absolute -top-3 left-3 px-2 py-1 bg-red-500 rounded-full text-sm
            text-white  md:hidden"
            >
              New!
            </span>
          </span>

          <span
            className=" text-base hidden md:block" >
            Messages
          </span>
          <span className=" px-2 py-1 bg-red-500 rounded-full text-sm text-white hidden md:block">
           New!
          </span>
        </NavLink>
        <NavLink
          to="user"
          className={(navData) =>
            navData.isActive ? "activeClass" : "normalClass"
          }
        >
          <span className="relative">
            <GiSettingsKnobs className="text-2xl md:text-3xl rotate-90" />
            {/* <span
              className=" absolute -top-3 left-3 px-2 py-1 bg-active rounded-full text-sm
            text-white  md:hidden"
            >
              
            </span> */}
          </span>

          <span
            className=" text-base hidden md:block 
                "
          >
            Settings
          </span>
          {/* <span className=" px-2 py-1 bg-active rounded-full text-sm text-white hidden md:block">
           
          </span> */}
        </NavLink>
      </div>


        {/* Footer */}
      <div className=" mt-24 text-center mx-2 hidden md:block">
        <h3 className=" text-sm font-semibold">
          Kubayar Invoicing Admin Dashboard
        </h3>
        <p className=" text-xs text-primaryText mt-1 flex flex-wrap flex-col md:mx-4 md:block ">
          © 2020 All Rights Reserved
        </p>
        <p className=" text-xs text-primaryText mt-4 flex flex-wrap flex-col md:mx-4 md:block ">
          Made with
          <span className=" text-red-500 text-lg font-bold mx-1 ">♥</span>by
          Peterdraw
        </p>
      </div>
    </div>
  );
};

export default SideBar;
