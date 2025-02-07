"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import "aos/dist/aos.css";
import AOS from "aos";

const Style = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1 second
  }, []);
  return (
    <div className="w-full h-auto max-w-screen-2xl m-auto mt-10 bg-[#F0F0F0] p-2 ">
      {/* Heading */}
      <h1 className="font-integral font-extrabold text-3xl md:text-5xl text-center pt-10"
      data-aos="fade-down">
        BROWSE BY DRESS STYLE
      </h1>

      {/* Image Grid */}
      <div className="flex flex-wrap justify-center items-center gap-5 mt-10"
      data-aos="fade-up">
        {/* Casual */}
        <div className="relative w-full md:w-[407px] h-[289px] bg-[#FFFFFF] rounded-xl flex justify-start items-start shadow-xl ">
          <Image
            src="/style/style1.png"
            alt="Casual dress image"
            fill
            className="object-cover rounded-xl"
          />
          <h3 className="absolute text-black font-satoshi font-extrabold text-[30px] sm:text-[36px]">
            Casual
          </h3>
        </div>

        {/* Formal */}
        <div className="relative w-full md:w-[684px] h-[289px] bg-[#FFFFFF] rounded-xl flex justify-start items-start shadow-xl">
          <Image
            src="/style/style2.png"
            alt="Formal dress image"
            fill
            className="object-cover rounded-xl"
          />
          <h3 className="absolute text-black font-satoshi font-extrabold text-[24px] sm:text-[36px]">
            Formal
          </h3>
        </div>

        {/* Party */}
        <div className="relative w-full md:w-[684px] h-[289px] bg-[#FFFFFF] rounded-xl flex justify-start items-start shadow-xl">
          <Image
            src="/style/style3.png"
            alt="Party dress image"
            fill
            className="object-cover rounded-xl"
          />
          <h3 className="absolute text-black font-satoshi font-extrabold text-[24px] sm:text-[36px]">
            Party
          </h3>
        </div>

        {/* Gym */}
        <div className="relative w-full md:w-[407px] h-[289px] bg-[#FFFFFF] rounded-xl flex justify-start items-start shadow-xl">
          <Image
            src="/style/style4.png"
            alt="Gym dress image"
            fill
            className="object-cover rounded-xl"
          />
          <h3 className="absolute text-black font-satoshi font-extrabold text-[24px] sm:text-[36px]">
            Gym
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Style;
