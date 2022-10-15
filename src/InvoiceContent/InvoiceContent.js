import React from "react";
import company from "../Assets/img/icons/companyLogo.png";
import map from "../Assets/img/icons/iconMap.png";
import email from "../Assets/img/icons/icon.png";
import phone from "../Assets/img/icons/icon (1).png";
import uploadIcon from "../Assets/img/icons/XMLID 270.png";
import layerIcon from "../Assets/img/icons/Layer 10.png";
import { BsCalendar4 } from "react-icons/bs";
import { ImCross } from "react-icons/im";
const InvoiceContent = () => {
  return (
    <div>
      <div className=" px-4 py-3 bg-white shadow-md rounded-lg">
        <h1 className=" text-lg font-semibold ">SELECT CLIENT</h1>
        <div className=" ml-5 my-5 flex flex-col gap-4 md:grid md:grid-cols-2 lg:flex lg:flex-row   justify-between">
          <div className=" flex items-start gap-4">
            <img className="w-10" src={company} alt="" />
            <span className="">
              <h2 className=" text-base font-semibold">Yellowisme</h2>
              <p className=" text-sm text-primaryText">Creative Agency</p>
            </span>
          </div>
          <div className=" flex items-start gap-4">
            <img className="w-10" src={map} alt="" />
            <span className="">
              <h2 className=" text-base font-semibold text-primaryText uppercase">
                ADDRESS
              </h2>
              <p className=" text-sm ">
                Franklin Avenue Street <br /> New York, ABC 5562 <br /> United
                State
              </p>
            </span>
          </div>
          <div className=" flex items-start gap-4">
            <img className="w-10" src={email} alt="" />
            <span className="">
              <h2 className=" text-base font-semibold uppercase text-primaryText">
                Email
              </h2>
              <p className=" text-sm ">yellowisme@mail.com</p>
            </span>
          </div>
          <div className=" flex items-center gap-4">
            <img className="w-10" src={phone} alt="" />
            <span className="">
              <h2 className=" text-base font-semibold uppercase text-primaryText">
                TELEPHONE
              </h2>
              <p className=" text-sm ">(012) 3456 789</p>
            </span>
          </div>
        </div>
      </div>

      <div className=" mt-4">
        <div className=" px-4 py-3 bg-white shadow-md rounded-lg">
          <h1 className=" text-lg font-semibold ml-4 ">GENERAL</h1>
          <div className=" ml-5 my-5 flex flex-col gap-3 md:flex-row    justify-around">
            <div className=" text-primaryText space-y-3 ">
              <p className=" text-sm">INVOICE NO</p>
              <div
                className="text-base border border-primaryText py-1 px-5 
                rounded-xl   focus:outline focus:outline-active  "
              >
                <input
                  className=" outline-none w-[30%] text-black"
                  type="text"
                  //   placeholder="#INV-123124124"
                  defaultValue="#INV-123124124"
                  // value=""
                />
              </div>
            </div>
            <div className=" text-primaryText space-y-3 ">
              <p className=" text-sm">AMOUNT (USD)</p>
              <div
                className="text-base border border-active py-1 px-5 
                rounded-xl   focus:outline focus:outline-active  "
              >
                <input
                  className=" outline-none w-[30%] text-black"
                  type="text"
                  //   placeholder="#INV-123124124"
                  defaultValue="5,000"
                />
              </div>
            </div>
            <div className=" text-primaryText space-y-3 ">
              <p className=" text-sm">DUE DATE</p>
              <div
                className="text-base border border-primaryText py-1 px-5 
                rounded-xl   focus:outline focus:outline-active flex items-center justify-between "
              >
                <input
                  className=" outline-none w-[30%] text-black "
                  type="text"
                  //   placeholder="#INV-123124124"
                  defaultValue="December 11th,2020"
                />
                <BsCalendar4 className=" text-active" />
              </div>
            </div>
          </div>

          {/*item description */}
          <div>
            <h1 className=" text-lg font-semibold ml-4 ">Item Desription</h1>
            <table className="table-fixed w-[90%] my-6 text-primaryText text-left mx-auto">
              <thead className="mb-5">
                <tr className="">
                  <th className=" py-2">ITEM DESCRIPTION</th>
                  <th className=" py-2">DURATION</th>
                  <th className=" py-2">RATE</th>
                  <th className=" py-2">AMOUNT</th>
                </tr>
              </thead>
              <tbody>
                <tr className=" border-b">
                  <td className=" py-3 ">Desgin System</td>
                  <td className=" py-3 ">12h</td>
                  <td className=" py-3 ">75.00</td>
                  <td className=" py-3 ">$ 900.00</td>
                </tr>
                <tr className=" border-b" >
                  <td className=" py-3 ">Wireframing</td>
                  <td className=" py-3 ">64h</td>
                  <td className=" py-3 ">60.00</td>
                  <td className=" py-3 ">$ 360.00</td>
                </tr>
              </tbody>
            </table>
            <input
              className=" outline-none ml-8"
              type="text"
              placeholder="Type description here..."
            />
          </div>
        </div>
      </div>

      {/* Attach file */}
      <div className=" my-8 px-4 bg-white shadow-md rounded-lg">
        <h1 className=" text-lg font-semibold ml-4 ">Attach file</h1>
        <div className=" flex flex-col md:flex-row  justify-evenly gap-4 p-5 ">
         
          <div className=" bg-[#F3F0FF] flex   items-start md:flex-col lg:flex-row lg:items-center gap-3 px-4 py-2
           border-2 border-dashed rounded-xl">
            <div className=" bg-active w-12 h-12 flex items-center justify-center rounded-xl">
              <img className=" w-6 " src={uploadIcon} alt="" />
            </div>

            <span>
              <h2 className=" text-base">Upload Files</h2>
              <p className=" text-primaryText text-sm">PDF, DOC, PPT, JPG, PNG</p>
            </span>
          </div>
          <div className=" flex  items-start md:flex-col lg:flex-row lg:items-center gap-3 px-6 py-2
           border-2  rounded-xl relative">
            <div className=" bg-[#F3F0FF] w-12 h-12 flex items-center justify-center rounded-xl">
              <img className=" w-4 " src={layerIcon} alt="" />
            </div>
            <ImCross className=" absolute -top-2 -right-2 p-1  bg-red-500 text-white rounded-full"/>

            <span>
              <h2 className=" text-base">Contact_2020.pdf</h2>
              <p className=" text-primaryText text-sm">456 KB</p>
            </span>
          </div>
          <div className="flex  items-start lg:items-center   gap-3">
            <a href="/" className=" bg-active text-white px-5 py-2 uppercase text-base rounded-2xl">
              Send Invoice
            </a>
            <a href="/" className=" bg-[#F3F0FF] text-active px-5 py-2 uppercase text-base rounded-2xl">
              Save To Later
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceContent;
