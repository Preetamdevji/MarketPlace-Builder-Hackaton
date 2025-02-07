import React from 'react';
import Image from 'next/image';

const BrandLogo = () => {
  return (
    <div className="flex flex-wrap justify-center md:justify-between items-center bg-black py-4 md:h-[100px] sm:h-[146px] max-w-screen-2xl mx-auto">
      {/* Logo Array */}
      {[
        { src: "/brandLogo/brand1.jpg", alt: "Brand 1", width: 117, height: 23 },
        { src: "/brandLogo/brand2.png", alt: "Brand 2", width: 64, height: 27 },
        { src: "/brandLogo/brand3.png", alt: "Brand 3", width: 109, height: 25 },
        { src: "/brandLogo/brand4.png", alt: "Brand 4", width: 127, height: 12 },
        { src: "/brandLogo/brand5.png", alt: "Brand 5", width: 135, height: 22 },
      ].map((logo, index) => (
        <div
          key={index}
          className="flex justify-center items-center p-2 w-[100px] md:w-[200px]"
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            className="object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export default BrandLogo;
