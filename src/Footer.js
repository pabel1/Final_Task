import React from "react";

const Footer = () => {
  return (
    <div className=" mt-24 text-center   md:hidden mx-auto">
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
  );
};

export default Footer;
