import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { HiOutlineDotsVertical } from "react-icons/hi";
import { tableData } from "../ListData";
const TableList = ({props}) => {
 
  const [listData] = useState(tableData);

  return (
    <div>
      <table className="table-fixed w-full my-6 text-primaryText text-left mx-auto">
        <tbody>
          {listData &&
            listData.map((item, i) => {
              return (
                <NavLink className=" " kew={i}>
                  <tr className=" border-b grid md:flex  md:flex-row items-center justify-around
                   hover:bg-[#F3F0FF]" key={item.bank}>
                    <td className=" py-3 col-span-12">
                      <img
                        className=" rounded-2xl w-24"
                        src={item.cardImg}
                        alt=""
                      />
                    </td>
                    <td className=" py-3 col-span-4 ">
                      <p className=" text-sm text-primaryText">Card Type</p>
                      <p className=" text-base text-black">{item.cardType}</p>
                    </td>
                    <td className=" py-3 col-span-4 ">
                      <p className=" text-sm text-primaryText">Bank</p>
                      <p className=" text-base text-black">{item.bank}</p>
                    </td>
                    <td className=" py-3 col-span- ">
                      <p className=" text-sm text-primaryText">Card Number</p>
                      <p className=" text-base text-black">{item.cardNumber}</p>
                    </td>
                    <td className=" py-3 col-span-4">
                      <p className=" text-sm text-primaryText">Namein Card</p>
                      <p className=" text-base text-black">{item.nameinCard}</p>
                    </td>
                    <td className=" py-3 col-span-4">
                      <p className=" text-active text-base">See Number</p>
                    </td>
                    <td className=" py-3 col-span-4">
                      <HiOutlineDotsVertical className=" text-xl" />
                    </td>
                  </tr>
                </NavLink>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default TableList;
