import Image from "next/image";
import React from "react";
import Ratting from "./ratting";

const Hero = () => {
  return (
    <main className="w-full h-full md:h-auto flex flex-col md:flex-row justify-between items-start bg-[#F2F0F1] max-w-screen-2xl m-auto">
        {/* Left  */}
      <div className="w-full md:w-[500px] md:mt-28 md:ml-28 mt-3 pl-3 ">
        <h1 className="text-4xl md:text-5xl font-extrabold font-integral">FIND CLOTHES THAT MATCH YOUR STYLE</h1>
        <p className="text-md mt-3">
          {" "}
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <button className="bg-black items-center justify-center py-3 md:px-12 px-32 text-sm text-white rounded-[22px] hover:text-black hover:bg-transparent hover:border-2 shadow-lg mt-4">Shop Now</button>
      </div>

      <Ratting/>

      {/* right */}
      <div className="relative">
        <Image src={"/hero/hero2.png"} width={200} height={200} alt="Hero Image"
        className="w-[500px] mr-4"></Image>
{/* star */}
<Image src={"/hero/star2.png"} width={200} height={200} alt="Star Image"
className="w-[60px] md:w-[100px] absolute md:top-[50px] top-[40px] right-[20px] md:right-[30]"></Image>

<Image src={"/hero/star1.png"} width={200} height={200} alt="Star Image"
 className="w-[40px] md:w-[60px] absolute top-[150px] left-[5px] md:top-[220px] md:left-[-30]"></Image>
        
      </div>
    </main>
  );
};

export default Hero;
