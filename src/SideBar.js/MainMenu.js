import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import { sidebarLinkData } from "../../src/ListData";
const MainMenu = ({props}) => {
  const [navData] = useState(sidebarLinkData);


  return (
    <div className="w-full text-center  md:text-left my-4 space-y-4 md:space-y-2">
      <h2 className=" my-5 font-semibold pl-1 md:pl-8">
        <span className=" hidden md:inline"> Main </span> Menu
      </h2>
      {navData &&
        navData.map((item, i) => {
          return (
            <NavLink
              to={item.link}
              className={(navData) =>
                navData.isActive ? "activeClass" : "normalClass"
              }
              key={i}
            >
              <span className="relative">
                {<item.icon className="text-2xl md:text-3xl " />}

                {item.text ? (
                  <span
                    className=" absolute -top-3 left-3 px-2 py-1 bg-active rounded-full text-sm
                  text-white  md:hidden"
                  >
                    {item.text}
                  </span>
                ) : (
                  " "
                )}
              </span>

              <span
                className=" text-base hidden md:block 
                "
              >
                {item.name}
              </span>
              {item.text ? (
                <span className=" px-2 py-1 bg-active rounded-full text-sm text-white hidden md:block">
                  {item.text}
                </span>
              ) : (
                " "
              )}
            </NavLink>
          );
        })}
    </div>
  );
};

export default MainMenu;
