"use client";
import React, { useRef } from "react";
import {
  FaStar,
  FaRegStar,
  FaCheckCircle,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import { reviews } from "@/utils/review";

type Review = {
  name: string;
  rating: number;
  comment: string;
};

const ReviewCard = ({ review }: { review: Review }) => {
  const fullStars = Math.floor(review.rating);
  const emptyStars = 5 - fullStars;

  return (
    <div className="p-6 rounded-lg shadow-md bg-white w-[300px] flex-shrink-0">
      {/* Rating Stars */}
      <div className="flex items-center text-yellow-500 mb-2">
        {[...Array(fullStars)].map((_, index) => (
          <FaStar key={index} />
        ))}
        {[...Array(emptyStars)].map((_, index) => (
          <FaRegStar key={index} />
        ))}
      </div>

      {/* Name with Green Check */}
      <div className="flex items-center space-x-2 mb-4">
        <h3 className="font-bold text-lg">{review.name}</h3>
        <FaCheckCircle className="text-green-500" />
      </div>

      {/* Comment */}
      <p className="text-gray-700 text-sm">{review.comment}</p>
    </div>
  );
};

const Reviews = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-gray-50 py-6 max-w-screen-2xl mx-auto">
      <div className="max-w-screen-lg mx-auto">
        {/* Heading and Buttons */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="font-extrabold text-2xl sm:text-2xl font-integral">
            OUR HAPPY CUSTOMERS
          </h1>
          <div className="flex space-x-2">
            <button
              onClick={scrollLeft}
              className="bg-gray-300 p-3 rounded-full text-gray-700 hover:bg-gray-400 focus:outline-none"
            >
              <FaArrowLeft className="text-[12px]" />
            </button>
            <button
              onClick={scrollRight}
              className="bg-gray-300 p-3 rounded-full text-gray-700 hover:bg-gray-400 focus:outline-none"
            >
              <FaArrowRight className="text-[12px]" />
            </button>
          </div>
        </div>

        {/* Reviews Slider */}
        <div
          ref={sliderRef}
          className="flex space-x-6 overflow-x-auto no-scrollbar px-6"
        >
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
