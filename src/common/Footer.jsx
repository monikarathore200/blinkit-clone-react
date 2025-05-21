import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { CiAt } from "react-icons/ci";
export default function () {
  return (   
    <div className=" max-w-[1280px] mx-auto p-[ 15px_5px] mt-[30px] ">
      <div className="grid lg:grid-cols-[35%_65%] justify-evenly">
        <div className="p-[5px_15px]">
          <div className="font-bold text-[17px]">Useful Links</div>
          <div className="grid grid-cols-[33%_33%_33%] mt-[10px] justify-evenly">
            <div>
              <ul className="text-[rgb(102,102,102)]">
                <li>About</li>
                <li>Careers </li>
                <li>Blog</li>
                <li>Press</li>
                <li>Lead</li>
                <li>Value</li>
              </ul>
            </div>
            <div>
              <ul className="text-[rgb(102,102,102)]">
                <li>Privacy</li>
                <li>Privacy</li>
                <li>FAQs</li>
                <li>Security</li>
                <li>Mobile</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <ul className="text-[rgb(102,102,102)]">
                <li>Partner</li>
                <li>Franchise</li>
                <li>Seller</li>
                <li>Warehouse</li>
                <li>Deliver</li>
                <li>Resources</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="p-[5px_15px]">
          <div className=" flex ">
            <p className="font-bold text-[17px] flex">
              Categories{" "}
              <span className="text-[green] ml-[10px] text-[17px] font-bold">
                see all
              </span>
            </p>
          </div>
          <div className="grid grid-cols-3 mt-[15px] justify-evenly ">
            <div>
              <ul className="text-[rgb(102,102,102)]">
                <li>Vegetables & Fruits</li>
                <li>Cold Drinks & Juices </li>
                <li> Bakery & Biscuits</li>
                <li> Dry Fruits, & Masala & oil</li>
                <li>Paan Corner</li>
                <li>Pharma & Wellnes</li>
                <li>Ice Creams & Frozen Desserts</li>
                <li>Beauty & Cosmetics</li>
                <li>Electronics & Electricals</li>
                <li>Toys & games</li>
              </ul>
            </div>

            <div>
              <ul className="text-[rgb(102,102,102)]">
                <li>Dairy & Breakfast</li>
                <li>Instant & Frozen Food</li>
                <li>Sweet tooth</li>
                <li>Sauce & Spreads</li>
                <li>Organic & primium</li>
                <li>Cleaning Essentials</li>
                <li>personal Care</li>
                <li>Magazines</li>
                <li>Stationery Needs</li>
                <li>Print Store</li>
              </ul>
            </div>
            <div>
              <ul className="text-[rgb(102,102,102)]">
                <li>Munchies</li>
                <li>Tea, Coffe & Health Drinks</li>
                <li>Atta, Rice & Dal</li>
                <li>Chicken , Meat & Fish</li>
                <li>Baby Care</li>
                <li>Home & Office </li>
                <li>Pet Care</li>
                <li>Fashion & Accessories</li>
                <li>Book</li>
                <li>E-Gift Cards</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-[35%_35%_30%] gap-[6px] mb-[6px] mt-[80px] bg-[rgb(252,252,252)] p-[15px]
      iteams-center text-center md:items-start md:text-left">
        <div>© Blink Commerce Private Limited, 2016-2025</div>

        <div className="grid lg:grid-cols-2 gap-[4px] items-center justify-center text-center md:items-start
        md:justify-start md:text-left mt-[10px] lg:mt-[0]">
          <div>Download App</div>
          <div className="flex gap-[4px] lg:mt-[0px] mt-[20px]">
            <img
              src="https://blinkit.com/d61019073b700ca49d22.png"
              alt=""
              className="w-[96px]"
            />
            <img
              src="https://blinkit.com/8ed033800ea38f24c4f0.png"
              alt=""
              className="w-[96px]"
            />
          </div>
        </div>

        <div className="flex gap-4 justify-center md:justify-start lg:mt-[0px] mt-[20px]  ">
          <p className="bg-gray-900 text-white p-2 rounded-full">
            <FaFacebookF size={20} />
          </p>
          <p className="bg-gray-900 text-white p-2 rounded-full">
            <FaTwitter size={20} />
          </p>
          <p className="bg-gray-900 text-white p-2 rounded-full">
            <FaInstagram size={20} />
          </p>
          <p className="bg-gray-900 text-white p-2 rounded-full">
            <FaLinkedin size={20} />
          </p>
          <p className="bg-gray-900 text-white p-2 rounded-full">
            <CiAt size={20} />
          </p>
        </div>
      </div>

      <div>
        <div className="text-[rgb(102,102,102)] p-[5px_15px] ">
          “Blinkit” is owned & managed by "Blink Commerce Private Limited" and
          is not related, linked or interconnected in whatsoever manner or
          nature, to “GROFFR.COM” which is a real estate services business
          operated by “Redstone Consultancy Services Private Limited”.
        </div>
      </div>
    </div>
  );
}
