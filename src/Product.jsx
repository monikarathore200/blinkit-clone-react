import React, { useEffect, useState } from "react";
import Header from "./common/Header";
import { IoIosTimer } from "react-icons/io";
import Footer from "./common/Footer";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function product() {


  let pId = useParams().id 

  let [img,setimg,]=useState([])
  let [bigimg,setbigimg]=useState()


  const[singledata,setsingledata]=useState([])
    console.log(singledata)
  

  
  const singleproduct=()=>{
    axios.get(`https://dummyjson.com/products/${pId}`)
    .then((resss)=>{
      setsingledata(resss.data)
      setimg(resss.data.images)
      setbigimg(resss.data.thumbnail)
    })
    .catch((err)=>{
      console.log(err.message)
    })
  }


  useEffect(()=>{
    singleproduct()
  },[])
  return (
    <>
      <Header />
      <div className="max-w-[1180px] mx-auto mt-[15px] overflow-x-hidden">
        <div className="grid lg:grid-cols-2 justify-evenly ">
          <div className=" lg:overflow-y-scroll lg:h-[700px]">
            <div className="shadow p-[10px] ">
              <div className="max-w-[500px] w-full mx-auto p-[5px]">
                <img src={bigimg} alt="" className="w-[100%] h-[100%]" />
              </div>
              <div className=" grid grid-cols-6 justify-center gap-2">
                {
                  img.length > 0 ?
                  img.map((v,i)=>{
                    return(
                      <div key={i}>
                        <img src={v} alt="" onClick={()=> setbigimg(v)}/>
                        </div>
                    )
                  })
                  :
                  "loading"
                }
              
           
              </div>
            </div>
            <div className="mt-[32px] mb-[16px] leading-[32px]">
              <h1 className="text-[24px] font-semibold">Product Details</h1>
            </div>
            <div>
              <p className="mb-[5px] font-semibold">Toned Milk</p>
              <p className="mb-[10px] text-[#6D6D6D]">Type</p>
              <p className="font-semibold">Key Features</p>
              <p className="mb-[10px] text-[#6D6D6D]">
                Wholesome taste <br />
                Healthy and nutritious milk <br />
                Rich in calcium
              </p>
              <p className="mb-[10px] font-semibold">Unit</p>
              <p className="mb-[10px]  text-[#6D6D6D]">500 ml</p>
              <p className="font-semibold">FSSAI License</p>
              <p className="mb-[10px]  text-[#6D6D6D]">10012021000071</p>
              <p className="font-semibold">Shelf Life</p>
              <p className="mb-[10px]  text-[#6D6D6D]">2 days</p>
              <p className="font-semibold">Return Policy</p>
              <p className="mb-[10px]  text-[#6D6D6D]">
                The product is non-returnable. For a damaged, defective, expired
                or incorrect item, you can request a replacement within 24 hours
                of delivery. In case of an incorrect item, you may raise a
                replacement or return request only if the item is sealed/
                unopened/ unused and in original condition.
              </p>
              <p className="font-semibold">Country of Origin</p>
              <p className="mb-[10px]">India</p>
              <p className="font-semibold">Customer Care Details</p>
              <p className="mb-[10px]  text-[#6D6D6D]">
                Email: info@blinkit.com
              </p>
              <p className="font-semibold">Seller</p>
              <p className="mb-[10px]  text-[#6D6D6D]">
                KEMEXEL ECOMMERCE PRIVATE LIMITED
              </p>
              <p>Seller FSSAI</p>
              <p className="mb-[10px]  text-[#6D6D6D]">10823999000118</p>
              <p className="font-semibold">Description</p>
              <p className="mb-[10px]  text-[#6D6D6D]">
                Amul Taaza Toned Milk (Polypack) is pasteurized with a great
                nutritional value. It can be consumed directly or can be used
                for preparing tea, coffee, sweets, khoya, curd, buttermilk, ghee
                etc.
              </p>
              <p className="font-semibold">Disclaimer</p>
              <p className="mb-[10px]  text-[#6D6D6D]">
                Every effort is made to maintain the accuracy of all
                information. However, actual product packaging and materials may
                contain more and/or different information. It is recommended not
                to solely rely on the information presented.
              </p>
            </div>
          </div>
          <div className="lg:h-[700px]">
            <div className="mt-[20px] pt-[30px] px-[15px] text-left ">
              <p>
              <Link to={'/'} > Home</Link>  / Milk /{" "}
                <span className="text-[#6D6D6D]"> Amul Taaza Toned Milk</span>
              </p>
            </div>
            <div className="ps-[30px]">
              <h1 className="text-[23px] font-bold  p-[5px]">
                Amul Taaza Toned Milk
              </h1>
              <p className=" flex shadow rounded items-center m-[5px_0px] p-[1px] max-w-[65px] text-[13px] ">
                <IoIosTimer className="mr-[5px]" />
                8mins
              </p>
            </div>
            <div className="">
              <p className="ps-[30px] text-[20px] text-[#259036] m-[5px_0px]">
                
                View all by Amul 
              </p>
            </div>
            <div className="m-[0px_10px] mx-auto text-[#6D6D6D] max-w-[90%]">
              <hr />
            </div>
            <div>
              <p className="ps-[30px] text-[13px] m-[10px_0px] font-semibold">
                Select Unit
              </p>
            </div>
            <div className="flex items-center m-[0px_10px] text-[14px] p-[0px_20px]">
              <div className="p-[2px_15px] border rounded-[10px] border-[#259036]  ">
                <p className="text-center">500 ml</p>
                <p className="font-semibold">MRP ₹29</p>
              </div>
              <div className="border p-[2px_15px] text-center ml-[15px] rounded-[10px]">
                <p className="">1 ltr </p>
                <p>MRP ₹57</p>
              </div>
            </div>
            <div className="p-[15px_0px] text-[13px] text-[#6D6D6D]">
              <p className="ml-[30px]">(Inclusive of all taxes)</p>
            </div>
            <div>
       <button className="border ml-[30px] p-[3px_10px] text-[14px] rounded-[10px] max-w-[65px] text-[#259036] border-[#259036]">
                ADD
              </button>
            </div>
            <div className="ml-[35px] text-[14px] mt-[35px]">
              <div>
                <p className="p-[5px_0px] font-bold text-[18px]"> Why shop from blinkit?</p>
              </div>
              <div className="flex mt-[10px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/web/blinkit-promises/10_minute_delivery.png"
                  className="max-w-[50px] h-[50px]"
                  alt=""
                />
                <p className="ml-[10px]">
                  {" "}
                  <span className="font-semibold ">
                    Superfast Delivery
                  </span>{" "}
                  <br />
                  Get your order delivered to your doorstep at the earliest from
                  dark stores near you.
                </p>
              </div>
              <div className="flex mt-[10px]">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/web/blinkit-promises/Best_Prices_Offers.png"
                  className="max-w-[50px]"
                  alt=""
                />
                <p className="ml-[10px]">
                  <span className="font-semibold">Best Prices & Offers</span>
                  <br />
                  Best price destination with offers directly from the
                  manufacturers.
                </p>
              </div>

              <div className="flex mt-[10px]">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/web/blinkit-promises/Wide_Assortment.png"
                  className="max-w-[50px]"
                  alt=""
                />
                <p className="ml-[10px]">
                  {" "}
                  <span className="font-semibold"> Wide Assortment</span> <br />
                  Choose from 5000+ products across food, personal care,
                  household & other categories.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
