import React from "react";
import { customerReviews } from "@/utils/customerReview"; // Adjust path as needed
import { FaStar, FaRegStar } from "react-icons/fa";
import { HiAdjustmentsVertical } from "react-icons/hi2";
import { MdKeyboardArrowDown } from "react-icons/md";

const ReviewCard = ({ review }: { review: typeof customerReviews[0] }) => {
  const fullStars = Math.floor(review.rating);
  const halfStar = review.rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="p-6 rounded-lg shadow-md bg-white mb-6 border border-gray-300 font-satoshi">
      {/* Rating Stars */}
      <div className="flex items-center text-yellow-500 mb-2">
        {[...Array(fullStars)].map((_, index) => (
          <FaStar key={index} />
        ))}
        {halfStar && <FaStar className="half-filled" />}
        {[...Array(emptyStars)].map((_, index) => (
          <FaRegStar key={index} />
        ))}
      </div>

      {/* Review Details */}
      <div className="mb-4">
        <h3 className="font-bold text-lg">{review.name}</h3>
        <span className="text-sm text-gray-500">{review.date}</span>
      </div>

      {/* Comment */}
      <p className="text-gray-700 text-sm">{review.comment}</p>
    </div>
  );
};

const Reviews = () => {
  return (
    <section className="bg-gray-50 py-10 max-w-screen-2xl mx-auto font-satoshi">
      {/* Heading */}
      <div className="flex justify-between items-center">
      <h1 className="font-extrabold text-2xl font-integral md:text-3xl mb-6 md:ml-32">
        All Reviews <span className="text-sm text-gray-500">{`(451)`}</span>
      </h1>
      <div className="flex gap-2 md:mr-32 -mt-4">
        <div className=" bg-secondary2 p-2 rounded-full hover:bg-white">
      <HiAdjustmentsVertical 
      className=" text-3xl"/>
      </div>
      <button className="hidden text-black md:flex items-center gap-2 bg-[#F0F0F0] px-4 md:px-8 p-2 rounded-full hover:bg-white border transition">
        Latest
        <MdKeyboardArrowDown className="items-center"/>
      </button>
      <button className="bg-primary text-white px-12 text-[12px] md:px-16 md:py-3 rounded-full hover:bg-transparent hover:text-primary border transition">
            Write a Review
          </button>
      </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6  md:m-28 px-4 md:-mt-0">
        {customerReviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </div>
<button className="bg-[#F0F0F0] -mt-20 flex justify-center items-center text-black px-24 md:px-14 py-3 rounded-full ml-auto mr-auto hover:bg-transparent hover:text-primary border transition">Load More Reviews</button>

    </section>
  );
};

export default Reviews;
