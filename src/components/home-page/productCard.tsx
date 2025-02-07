import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaRegStar, FaStar, FaStarHalf } from "react-icons/fa";
import { Product } from "@/app/types/types";
import { urlFor } from "@/sanity/lib/image";
import HoverButton from "./hoverButton";

const ProductCard: React.FC<Product> = ({
  name,
  price,
  image,
  discountPercent,
  rating = 0,
  slug,
}) => {
  const numericPrice = price || 0;
  const numericOldPrice =
    discountPercent && price ? (price * (100 + discountPercent)) / 100 : null;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const priceReduction = discountPercent ? `-${discountPercent}%` : "";

  return (
    <div className="flex flex-col p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <Link href={`/product/${slug || ""}`} className="group">
        {/* Image container with a square aspect ratio */}
        <div className="relative overflow-hidden rounded-lg">
          <div className="relative w-full h-0 pb-[100%]">
            <Image
              src={image ? urlFor(image).url() : "/placeholder-image.jpg"}
              alt={name}
              fill
              className="absolute inset-0 object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <HoverButton />
        </div>

        {/* Product details */}
        <h3 className="mt-4 text-lg font-bold text-gray-800 truncate">
          {name}
        </h3>

        {/* Price details */}
        <div className="mt-2 flex items-center space-x-2">
          <span className="text-xl font-bold text-black">
            ${numericPrice.toFixed(0)}
          </span>
          {numericOldPrice && numericOldPrice > numericPrice && (
            <>
              <span className="text-xl font-bold text-gray-400 line-through">
                ${numericOldPrice.toFixed(0)}
              </span>
              <span className="rounded-full border border-red-500 bg-red-200 px-2 text-sm text-red-500">
                {priceReduction}
              </span>
            </>
          )}
        </div>

        {/* Rating stars */}
        <div className="mt-2 flex items-center space-x-1 text-yellow-500">
          {[...Array(fullStars)].map((_, index) => (
            <FaStar key={index} />
          ))}
          {hasHalfStar && <FaStarHalf />}
          {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map(
            (_, index) => (
              <FaRegStar key={index + fullStars + (hasHalfStar ? 1 : 0)} />
            )
          )}
          <span className="ml-2 text-sm font-semibold text-gray-500">
            {rating}/5
          </span>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
