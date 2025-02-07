"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import { FaRegStar, FaStar, FaStarHalf } from "react-icons/fa";
import "aos/dist/aos.css";
import AOS from "aos";
import Link from "next/link";  // Import Link from next/link

// Define the Product Type
type Product = {
  title: string;
  price: string;
  oldPrice: string | null;
  image: string;
  rating: number;
  id: number;  // Ensure each product has an id
};

// Product Data
const products = [
  {
    id: 12,
    title: "Polo With Contrast Trims",
    price: "$212",
    oldPrice: "$242",
    image: "/casual/shart6.png",
    rating: 4,
  },
  {
    id: 9,
    title: "Gradient Graphic T-shirt",
    price: "$145",
    oldPrice: null,
    image: "/casual/shart1.png",
    rating: 3.5,
  },
  {
    id: 10,
    title: "Polo with Tipping Details",
    price: "$180",
    oldPrice: null,
    image: "/casual/shart2.png",
    rating: 4.5,
  },
  {
    id: 11,
    title: "Black Striped T-shirt",
    price: "$120",
    oldPrice: "$150",
    image: "/casual/shart3.png",
    rating: 4.5,
  },
];

// Product Box Component
const ProductBox = ({ product }: { product: Product }) => {
  const fullStars = Math.floor(product.rating); // Full stars
  const hasHalfStar = product.rating % 1 !== 0; // Check if there is a half star
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1 second
  }, []);

  return (
    <div className="w-full sm:w-[48%] md:w-[22%] flex flex-col items-center">
      <div className="group shadow-md bg-[#F0EEED] w-[270px] h-[250px] flex justify-center items-center relative cursor-pointer rounded-md overflow-hidden"
        data-aos="fade-up">
        <Link href={`/product/${product.id}`}>
          <Image
            src={product.image}
            alt={product.title}
            width={200}
            height={100}
            className="object-cover transform transition-transform duration-500 group-hover:scale-110"
          />
        </Link>
      </div>
      <h1 className="font-bold font-sans pt-2 text-sm sm:text-md text-left ">{product.title}</h1>
      <div className="flex items-center space-x-2">
        <span className="text-black font-bold">{product.price}</span>
        {product.oldPrice && (
          <>
            <span className="text-gray-400 font-bold line-through">
              {product.oldPrice}
            </span>
            {/* Price reduction */}
            <span className="text-red-500 border-2 outline-none rounded-full bg-red-200 px-2">
              -${(parseFloat(product.oldPrice.replace('$', '')) - parseFloat(product.price.replace('$', ''))).toFixed(0)}
            </span>
          </>
        )}
      </div>
      <div className="flex items-center space-x-1 text-yellow-400 text-md pt-1">
        {[...Array(fullStars)].map((_, index) => (
          <FaStar key={index} />
        ))}
        {hasHalfStar && <FaStarHalf />}
        {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, index) => (
          <FaRegStar key={index + fullStars + (hasHalfStar ? 1 : 0)} />
        ))}
        {/* Displaying rating number */}
        <p className="text-gray-400 text-sm pt-1 font-bold">
          {product.rating}/5
        </p>
      </div>
    </div>
  );
};

const ReviewsProduct = () => {
  return (
    <main>
      <div className="w-full flex justify-center items-start mt-10 mb-1 max-w-screen-2xl m-auto">
        <div className="w-[90%] md:w-[80%]">
          {/* Header Section */}
          <div className="flex flex-col ">
            <div className="flex justify-center items-center mt-4">
              <h1 className="text-gray-800 font-integral font-extrabold text-lg sm:text-2xl md:text-5xl"
                data-aos="fade-down">
                YOU MIGHT ALSO LIKE
              </h1>
            </div>
          </div>

          {/* Product Section */}
          <div className="flex flex-wrap justify-center sm:justify-between gap-5 mt-8" data-aos="fade-up">
            {products.map((product, index) => (
              <ProductBox key={index} product={product} />
            ))}
          </div>

        </div>
      </div>
    </main>
  );
};

export default ReviewsProduct;
