import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
export default function Header() {
  return (
    <>
      <div className="lg:block hidden">
        <div className="grid grid-cols-[15%_19%_auto_8%_8%] items-center shadow p-[0px_20px] ">
          <div> 
            <img
              src="public/images/logo.png"
              alt=""
              className="w-[180px] p-[5px_15px]"
            />
          </div>
          <div>
            <h2 className="font-bold text-[19px]">Delievery in 8 minutes </h2>
            <p className=" text-[14px]  opacity-[0.8]">mandore phool bhag</p>
          </div>
          <div className="border flex items-center p-[5px_15px] w-[95%] rounded-[5px]">
            <CiSearch />
            <input
              type="text"
              className="w-[95%] p-[2px] ml-[5px] outline-none"
            />
          </div>
          <div>
            <p className="text-[18px] font-semibold">Login</p>
          </div>
          <div className="flex  justify-evenly items-center p-[10px_2px] text-white bg-[rgb(229,229,229)] rounded">
            <div className="text-[28px]">
              <FaShoppingCart />
            </div>
            <div>My cart</div>
          </div>
        </div>
      </div>

      <div className="lg:hidden block">
        <div className="flex justify-between items-center p-[5px_15px]">
          <div className="p-[5px]">
            <h2 className="font-bold text-[19px]">Delievery in 8 minutes </h2>
            <p className=" text-[14px]  opacity-[0.8]">mandore phool bhag</p>
          </div>
          <div>

            <p className="text-[30px]"><FaRegUserCircle /></p>
          </div>
        </div>
        
         <div className="border flex items-center p-[5px_15px] mx-auto w-[95%] rounded-[5px] bg-[#F8F8F8]">
            <CiSearch />
            <input
              type="text"
              className="w-[95%] p-[2px] ml-[5px] outline-none " placeholder="search milk"
            />
          </div>
          

          <div className="p-[25px_15px]">
            <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/layout-engine/2024-02/ios_feed_mweb-1.png" alt="" />
          </div>
      </div>
    </>
  );
}
