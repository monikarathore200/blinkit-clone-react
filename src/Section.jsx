import React, { useEffect, useState } from "react";
import Header from "./common/Header";
import Footer from "./common/Footer";
import { IoIosTimer } from "react-icons/io";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Section() {

  




  const [showdata, setshowdata] = useState([])
  // console.log(showdata)
  let data = () => {   
    let api;
    if(caturl == null){
      api= "https://dummyjson.com/products?limit=200"
    }
    else{
      api = caturl
    } 


    axios.get(api)
      .then((ress) => {
        setshowdata(ress.data.products)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }




const[showcat,setshowcat]=useState([])
console.log(showcat)
  let catitem = ()=>{
    axios.get("https://dummyjson.com/products/categories")
    .then((ress)=>{
     setshowcat(ress.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  const[caturl,setcaturl]=useState(null)
  const getcat = (url)=>{
    setcaturl(url)
  }

  useEffect(() => {
    data()
    catitem()
  }, [caturl])  



  

  return (
    <div>
      <Header />
      <div className="max-w-[1180px] shadow rounded mx-auto mb-[20px]  mt-[15px]">
        <div className="p-[10px_15px] text-[14px] shadow font-bold">
          Buy Milk Online
        </div>
        <div className="grid lg:grid-cols-[15%_auto] grid-cols-[25%_auto] h-[610px]  ">
          <div className="shadow overflow-y-scroll  h-full ">
            <div className=" shadow">
             {showcat.length>0 ?
              showcat.map((v)=>{
                return(
                  <p className="text-[12px] cursor-pointer p-[2px] shadow my-[10px] font-bold" onClick={()=>getcat(v.url)}>{v.name}</p>
                )
              })
              :
              "Please Wait...."}
              
            </div>

          </div>

          <div className="overflow-y-scroll h-[600px]">
            <div className="grid   lg:grid-cols-6 grid-cols-2  gap-[15px]  p-[15px]">
              {
                showdata.length > 0 ?
                  showdata.map((v, i) => {
                    return (
                      <div className=" shadow m-[7px]  p-[5px_15px] rounded  ">
                       <Link to={`/product/${v.id}`}> <img src={v.thumbnail}
                          alt=""
                          className="w-[165px]"
                        /></Link>
                        <div className="flex items-center">
                          <IoIosTimer />
                          <p className="text-[12px]">8 Mins</p>
                        </div>
                        <p className="text-[14px] font-semibold">
                          {v.title}
                        </p>
                        <p className="text-[13px] font-semibold mt-[5px] text-[rgb(49,134,22)] ">
                          {v.stock}
                        </p>
                        <div className="flex justify-between items-center mt-[12px]">
                          <p className="text-[14px] font-semibold"> {v.price}</p>
                          <button className="border p-[2px_15px] rounded border-[rgb(49,134,22)] text-[rgb(49,134,22)]">
                            ADD
                          </button>
                        </div>
                      </div>
                    );
                  })
                  :
                  <div class="loader"></div>
              }
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
