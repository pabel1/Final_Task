import React from "react";
import { Outlet } from "react-router-dom";
// import InvoiceContent from "./InvoiceContent/InvoiceContent";

import Navbar from "./Navbar/Navbar";
import SideBar from "./SideBar.js/SideBar";

const MasterLayout = () => {


  return (
    <div className=" flex gap-5 scroll-smooth">
      <div className=" basis-2 md:basis-[18%] border-r ">
        <SideBar />
      </div>
      <div className=" basis-[80%]  ">
        <div className=" w-full ">
          <Navbar />
        </div>
        <div className=" h-screen w-[98%] mx-auto pb-8 ">
            <Outlet></Outlet>

        </div>
      </div>
    </div>
  );
};

export default MasterLayout;
