import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdOutlineTimer } from "react-icons/md";

export default function CustomSlider() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1024, // tablets
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768, // 
        settings: {
          slidesToShow: 3, 
          arrows:false,
        },
      },
      {
        breakpoint: 480, // 
        settings: {
          slidesToShow: 3,
           arrows:false,
        },
      },
    ],
  };

  return (
    <div className="max-max-w-[1280px] p-[5px] mx-auto">
      <div>
        <div className="flex justify-between p-[0px_15px]">
          <p className="text-[24px] font-bold"> Dairy Bread & Eggs</p>
          <p className="text-[20px] text-[green] font-bold">See all</p>
        </div>

        <div className="max-max-w-[1280px] p-[15px] mx-auto">
          <Slider {...settings}>
            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/5ee4441d-9109-48fa-9343-f5ce82b905a6.jpg?ts=1706182143"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>

            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px]">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6ae62ec2-3b13-4fff-b052-2ff3d4ef2d16.jpg?ts=1726473593"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Masti Pouch Curd
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>

            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/1c0db977-31ab-4d8e-abf3-d42e4a4b4632.jpg?ts=1706182142"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Gold Full Cream Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>

            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/e3f63e12-631f-4193-9160-ea4ddcbd6c5c.jpg?ts=1711189562"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Mother Dairy Toned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>

            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/0be0d49a-4dae-408a-8786-afae1dd05cb1.jpg?ts=1707312314"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Salted Butter
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>

            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/329549a.jpg?ts=1690805806"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>

            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6d41a6e4-eb1b-413c-8e20-7b9e892e42f8.jpg?ts=1712325555"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>

            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/86446a.jpg?ts=1687948913"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>

            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/a9b8e4d0-62ae-4a55-b0f7-c07d16a09326.jpg?ts=1707564212"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>

            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/5147b440-045d-4452-92ce-1d9d7c406ebd.jpg?ts=1741079774"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>

            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/448095a.jpg?ts=1688635500"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>

            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/dd323cc7-d00c-48d0-9323-72cde5e1837e.jpg?ts=1723142318"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>

            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/987e28e2-ca19-493a-9a1f-8dd09865b160.jpg?ts=1739354504"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>
            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/c2b22cd4-b144-4266-901a-ff4ae82aa912.jpg?ts=1726473621"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>

            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/319610a.jpg?ts=1690814158"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>
          </Slider>
        </div>

        <div className="flex justify-between p-[0px_15px]">
          <p className="text-[24px] font-bold"> Dairy Bread & Eggs</p>
          <p className="text-[20px] text-[green] font-bold">See all</p>
        </div>

        <div className="max-w-[1280px] p-[15px] mx-auto">
          <Slider {...settings}>
            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/661d1bd8-2374-47ad-b231-af4842bd5d50.jpg?ts=1740560975"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>

            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/478728a.jpg?ts=1690814280"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>
            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/506375a.jpg?ts=1698309252"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>

            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/496996a.jpg?ts=1690814374"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>
            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/b91a3d9a-4595-45b5-a123-5cbfcecc3bcc.jpg?ts=1728246095"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>

            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/512860a.jpg?ts=1690832312"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>

            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/506376a.jpg?ts=1698309252"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>
            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/2607a98a-0b2d-43dc-b5a5-2322540fa309.jpg?ts=1708597803"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>
            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/496994a.jpg?ts=1698309251"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>

            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/537048a.jpg?ts=1699862659"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>

            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/5b811154-db15-456d-a219-13edaa288ab7.jpg?ts=1725020018"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>
            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/978597cf-0fa1-4434-851d-c32e1d29b264.jpg?ts=1729080457"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>

            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/d3fbd5a8-4a8e-4bde-ab29-1d6f48d4b9c8.jpg?ts=1735813383"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>

            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/535600a.jpg?ts=1698309253"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>

            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/63d35241-fbb8-40bb-8b95-dcb84a9656e7.jpg?ts=1740658589"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>
          </Slider>
        </div>

        <div className="flex justify-between p-[0px_15px]">
          <p className="text-[24px] font-bold"> Dairy Bread & Eggs</p>
          <p className="text-[20px] text-[green] font-bold">See all</p>
        </div>

        <div className="max-w-[1280px] p-[15px] mx-auto">
          <Slider {...settings}>
            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/1c4f8155-55fc-44c4-b07a-e1107912fab8.jpg?ts=1740397574"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>

            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/bc76ce9d-9d2c-42eb-a1d5-6464618fe978.jpg?ts=1723100846"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>
            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/f9b56bd0-dabb-4064-8b3b-4666c912aa5a.jpg?ts=1718012570"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>

            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/033d8394-849a-4a07-a712-79a50df9bd51.jpg?ts=1723098570"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>
            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/ff2acf02-4008-4fc5-b411-d7927cf92fd7.jpg?ts=1724850868"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>

            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/79f7319a-f048-48db-ab5a-00a6d2911ea3.jpg?ts=1723098575"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>

            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/a0f592fe-d783-42e1-b1a4-1efccdc52721.jpg?ts=1723100072"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>
            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6265c933-0619-4ce1-ae4b-6c9336902295.jpg?ts=1723098571"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>
            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/62cb6b91-8546-4088-a819-7706beca81e8.jpg?ts=1740397576"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>

            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/f20b4670-e147-4af7-8a25-c5e30ad860c2.jpg?ts=1723100071"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>

            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/1f3a0e5b-26f8-4f7d-a0c0-e6410f763ab5.jpg?ts=1735649560"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>
            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6807f54d-f711-49ca-9635-514ac9b72d7f.jpg?ts=1724850859"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>

            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/c4486d68-0ed2-43f0-9214-851063495eb5.jpg?ts=1723098569"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>

            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/88679327-6d68-4836-9f07-1f3d660605ee.jpg?ts=1723100069"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>

            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/bebe562d-c417-465b-9b12-4d612f48d08a.jpg?ts=1723098763"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>
          </Slider>
        </div>

        <div className="flex justify-between p-[0px_15px]">
          <p className="text-[24px] font-bold"> Dairy Bread & Eggs</p>
          <p className="text-[20px] text-[green] font-bold">See all</p>
        </div>

        <div className="max-w-[1280px] p-[15px] mx-auto">
          <Slider {...settings}>
            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/61eb3cc7-6bd1-4ba9-b03c-44e4c8a0f8a3.jpg?ts=1736847234"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>

            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/8680873c-be67-41af-92cf-ca2beff3c52d.jpg?ts=1726661157"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>
            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/480930a.jpg?ts=1687333267"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>

            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/496995a.jpg?ts=1690814532"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>
            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/e4bfe80f-bc8f-4be3-a5bb-627bb15f72d6.jpg?ts=1736944389"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>

            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/535601a.jpg?ts=1698309253"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>

            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/535602a.jpg?ts=1698309253"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>
            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/480933a.jpg?ts=1688628164"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>
            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/540986a.jpg"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>

            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/480932a.jpg?ts=1688628164"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>

            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/a72dc76a-da20-41ad-a49f-6f7857ea39b1.jpg?ts=1736944392"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>
            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/5b34c0a2-49e8-4737-b732-706e8aaf2b49.jpg"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>

            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/540990a.jpg"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>

            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/c489ccad-8251-433d-bba7-53fb75b64cd9.jpg?ts=1725965941"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>

            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/0ede67e6-b7b6-4efa-befe-ee14229decd4.jpg?ts=1731917538"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>
          </Slider>
        </div>

        <div className="flex justify-between p-[0px_15px]">
          <p className="text-[24px] font-bold"> Dairy Bread & Eggs</p>
          <p className="text-[20px] text-[green] font-bold">See all</p>
        </div>

        <div className="max-w-[1280px] p-[15px] mx-auto">
          <Slider {...settings}>
            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/9dfff4f5-de84-4a3c-9cef-6d8e504cbf89.jpg?ts=1723143406"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>

            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/30982570-f57e-4117-b65e-1471dd16815e.jpg?ts=1718623374"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>
            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/363211a.jpg?ts=1690813897"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>

            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/8a823951-2bcd-4469-9efb-c44a92b3ece7.jpg?ts=1737723495"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>
            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/363212a.jpg?ts=1690814160"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>

            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/498984a.jpg?ts=1686566080"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>

            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/4c0162e6-b82e-4bdc-a2ab-ff2ed8102d20.jpg"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>
            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/486345a.jpg?ts=1687951086"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>
            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/206540a.jpg?ts=1687437714"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>

            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/ac3d1c56-641d-4877-9d8e-cf1d8c3dd287.jpg?ts=1737349571"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>

            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/32735e8e-abaf-42fe-a5dd-9835b58ccc53.jpg?ts=1721899285"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>
            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/f77ef89d-0a4f-4a42-9a57-a2c0108a237d.jpg?ts=1737275566"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>

            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/3dd7baa6-fc4b-40c4-bab2-6633c06cd0aa.jpg?ts=1725621904"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>

            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/363209a.jpg?ts=1690815071"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>

            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/b06b8269-b0f2-4887-8106-f49d5695fc12.jpg?ts=1720016904"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>
          </Slider>
        </div>

        <div className="flex justify-between p-[0px_15px]">
          <p className="text-[24px] font-bold"> Dairy Bread & Eggs</p>
          <p className="text-[20px] text-[green] font-bold">See all</p>
        </div>

        <div className="max-w-[1280px] p-[15px] mx-auto">
          <Slider {...settings}>
            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6b98633c-7c6a-4708-a372-e2b49da568ab.jpg?ts=1707312322"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>

            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/482620a.jpg?ts=1690813234"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>
            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/15288a.jpg?ts=1698840601"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>

            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/e69c587d-802a-40eb-a40b-a6bc9623526d.jpg?ts=1707312325"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>
            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/10b8b01a-8b71-4448-becb-16d4247ef05c.jpg?ts=1707312326"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>

            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/600dd9ff-659c-4817-87e7-eec1dea72c63.jpg?ts=1706182144"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>

            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/cfeaa68b-2ce1-4c1e-95c5-450bbb9bb281.jpg?ts=1708591243"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>
            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/f3465fd8-edba-498f-9a33-abe44cf05c94.jpg?ts=1713511877"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>
            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/484783a.jpg?ts=1688628436"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>

            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/f41b24f4-b0bd-4e33-bee4-14f9f6b00967.jpg"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>

            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/9a7f01e0-e63e-407e-bfc9-449c165f7a1c.jpg?ts=1728051043"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>
            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/0f87f19e-66da-48cd-8c75-343abf732948.jpg?ts=1707312325"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>

            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/83992e32-722e-4b8d-b6d5-93dc8693df85.jpg?ts=1746007604"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>

            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/9a33cf3e-72c0-4116-aae8-2eab9e09bf67.jpg?ts=1707312326"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>

            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/534484a.jpg"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>
          </Slider>
        </div>

        <div className="flex justify-between p-[0px_15px]">
          <p className="text-[24px] font-bold"> Dairy Bread & Eggs</p>
          <p className="text-[20px] text-[green] font-bold">See all</p>
        </div>

        <div className="max-w-[1280px] p-[15px] mx-auto">
          <Slider {...settings}>
            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/976ffd15-f16b-40b4-beec-da2351b0b8c4.jpg?ts=1710154021"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>

            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/51a7715c-3413-4e9a-af78-596bf2b32408.jpg?ts=1738336404"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>
            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/1188f1d4-7fc0-4fd7-a1ae-20b6de0d59b2.jpg?ts=1744804307"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>

            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/759d0d59-6626-456e-ba51-f8a16659b494.jpg?ts=1710154020"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>
            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/b8760532-ff5b-4451-aacf-8037ec6da880.jpg?ts=1732624518"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>

            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/d7d64827-1383-4ae6-aedb-d8e637a95785.jpg?ts=1744804630"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>

            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/355debcd-0b19-41ed-9498-918ecc6f3d90.jpg?ts=1744804557"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>
            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/24e197a4-11d7-4e15-8ebe-2366aebd2814.jpg?ts=1718182486"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>
            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/0cdb751e-a797-4f76-ba3d-00a4c6130c19.jpg?ts=1710154019"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>

            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/737c47d4-5c30-4a36-8de3-15b539edcff7.jpg?ts=1726830247"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>

            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/5cf43365-0827-4882-bcb3-19e611e5e1a9.jpg?ts=1735822670"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>
            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/f82653d9-e852-4f17-be98-683f05325201.jpg?ts=1708591846"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>

            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/6d0be91c-e93e-45be-82ee-936d7ae99510.jpg?ts=1732168285"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>

            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/538988a.jpg?ts=1707730561"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>

            <div className="px-[8px]">
              <div className="shadow rounded-[10px] bg-white p-[ 10px_15px] ">
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/aa4c477e-08d8-479d-be21-76e061e13c0d.jpg?ts=1718169096"
                  alt="Amul Milk"
                  className="w-full h-[140px] object-contain  mb-[10px]"
                />

                <p className="text-[12px] text-gray-500 mb-[4px]">8 Mins</p>
                <p className="text-[14px] font-semibold mb-[2px]">
                  Amul Taaza Tooned Milk
                </p>
                <p className="text-[13px] text-gray-600 mb-[4px]">500 ml</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="font-bold">$29</p>
                  <button className="border border-greenn-50 text-green-500 rounded-[10px] p-[5px_15px] text-[13px]">
                    ADD
                  </button>
                </div>
              </div>
            </div>
          </Slider>
        </div>


            <div className="">
        <div className=" lg:hidden block">
          <img src="public/images/image.jpg" alt="" />
        </div>

            <div>
              <div className="grid grid-cols-4  lg:hidden block ">
                <img src="public/images/product.jpg" alt=""  className="h-[50px]"/>
                <img src="public/images/cleaning.jpg" alt="" className="h-[50px] "/>
                <img src="public/images/dustbin.jpg" alt="" className="h-[50px] "/>
                <img src="public/images/smart.jpg" alt="" className="h-[50px] "/>
              </div>
            </div>

             </div>



        <div className="lg:hidden block">
          <img
            src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/v2/2024-12/app_footer_android/light.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
