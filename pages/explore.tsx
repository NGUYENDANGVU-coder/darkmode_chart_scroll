import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Mousewheel, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import styles from "./explore.module.css";
import Image from "next/image";
import bgImage from "../public/images/hoa.jpg";
import nftGif from "../public/images/nft.gif";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";

// async function getData() {
//   const res = await fetch('https://fakestoreapi.com/products');
//   if (!res.ok) {
//     throw new Error('Failed to fetch data');
//   }
//   return res.json();
// }
export async function getServerSideProps() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
}
export default function Explore({ data }: any) {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [filter, setFilter] = useState(data[0]);
  const handleSlideChange = (swiper: any) => {
    setActiveSlideIndex(swiper.activeIndex);
  };
  useEffect(() => {
    data.forEach((item: any, index: number) => {
      if (index === activeSlideIndex) {
        setFilter(item);
      }
    });
  }, [activeSlideIndex]);
  console.log(filter.image);

  return (
    <div className="">
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        mousewheel={true}
        modules={[Mousewheel, Pagination]}
        className="h-screen mySwiper"
        onSlideChange={handleSlideChange}
      >
        {data.map((item: any, index: number) => (
          <SwiperSlide className="w-full h-screen " key={index}>
            {({ isActive }) => (
              <div>
                <div
                  className={` h-screen blur-3xl relative`}
                  style={{ backgroundImage: `url(${item.image})`}}
                ></div>
                <div className="absolute top-0 w-full h-full flex items-center px-[200px] justify-between">
                  <Image
                    src={`${item.image}`}
                    className=" rounded-2xl"
                    width={440}
                    height={570}
                    alt="flower"
                  />
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="fixed top-[32vh] right-24 z-10 w-[400px] h-[370px] p-4 bg-white rounded-[20px] border-4 border-solid border-[hsla(0,0%,100%,0.2)] bg-clip-padding">
        <div className="flex justify-between">
          <p>{filter.category}</p>
          <div className="flex">
            <span>Pool</span>
            <span>
              <ArrowUpRightIcon
                className="text-gray-700"
                width={24}
                height={24}
              />
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 my-6 gap-x-4">
          <button className="h-12 text-white bg-black border">Buy</button>
          <button className="h-12 text-white bg-gray-400 border">Sell</button>
        </div>
        <button className="h-12 w-[100%] text-white bg-black mx-auto">
          {filter.price} USDT
        </button>
        <br />
        <button className="h-12 my-6 w-[100%] text-white bg-black mx-auto">
          {filter.title}
        </button>
        <br />
        <button className="h-12 w-[50%] translate-x-2/4 text-white bg-black mx-auto">
          {filter.rating.rate}
        </button>
      </div>
    </div>
  );
}
