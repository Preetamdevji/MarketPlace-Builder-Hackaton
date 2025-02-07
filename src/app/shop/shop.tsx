"use client";
import Link from "next/link";
import Image from "next/image";
import Filter from "@/app/shop/filter";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client"; // Sanity client import
import { Product } from "../types/types";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import HoverButton from "@/components/home-page/hoverButton";


const fetchProducts = async () => {
  try {
    const query = `
      *[_type == "product"] {
        _id,
        name,
        price,
        "image": image.asset->url,
        discountPercent,
        isNew,
        colors,
        sizes,
        rating,
        "slug": slug.current
      }
    `;
    return await client.fetch(query);
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  useEffect(() => {
    fetchProducts().then((data) => {
      const formattedData = data.map((item: Product) => ({
        _id: item._id,
        name: item.name,
        price: Number(item.price),
        oldPrice: item.discountPercent
          ? (Number(item.price) * (100 + Number(item.discountPercent))) / 100
          : null,
        image: item.image,
        discountPercent: item.discountPercent || 0,
        rating: item.rating || 0,
        slug: item.slug || "",
      }));
      setProducts(formattedData);
    });
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col md:flex-row max-w-screen-2xl mx-auto p-4 md:p-10">
      <Filter />
      <main className="w-full">
        <div className="flex items-center justify-between mb-6">
          <h1 className="hidden sm:block text-2xl md:text-3xl font-bold">
            Casual
          </h1>
          <p className="hidden sm:block md:ml-[53%]">
            Showing {indexOfFirstProduct + 1}-{indexOfLastProduct} of{" "}
            {products.length} Products
          </p>
          <p className="hidden md:flex gap-2 items-center">
            Sort by:
            <span className="font-bold flex items-center">
              Most Popular <MdOutlineKeyboardArrowDown />
            </span>
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {currentProducts.map((product) => {
            const fullStars = Math.floor(product.rating);
            const hasHalfStar = product.rating % 1 !== 0;
            const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

            return (
              <div key={product._id} className="p-4 relative group">
                <Link href={`/product/${product.slug}`}>
                  <div className="relative overflow-hidden h-40 md:h-64 cursor-pointer">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover rounded-lg"
                    />
                    <HoverButton/>
                  </div>
                <div className="mt-4">
                  <h2 className="text-lg md:text-[20px] font-bold">
                    {product.name}
                  </h2>
                  <div className="flex items-center text-yellow-400 text-md pt-2">
                    {[...Array(fullStars)].map((_, index) => (
                      <FaStar key={index} />
                    ))}
                    {hasHalfStar && <FaStarHalfAlt />}
                    {[...Array(emptyStars)].map((_, index) => (
                      <FaRegStar key={index} />
                    ))}
                    <p className="text-gray-500 text-sm pl-2 font-semibold">
                      {product.rating.toFixed(0)}/5
                    </p>
                  </div>
                  <div className="flex items-center gap-2 mt-4 font-bold">
                    <p className="text-lg md:text-[24px] text-black">
                      ${product.price.toFixed(0)}
                    </p>
                    {product.oldPrice && (
                      <div className="flex items-center gap-2 text-gray-400">
                        <p className="text-lg md:text-[24px] line-through">
                          ${product.oldPrice.toFixed(0)}
                        </p>
                        <p className="text-sm bg-red-200 text-red-400 px-2 rounded-full">
                          -{product.discountPercent}%
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                    </Link>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 space-y-4 md:space-y-0">
          <button
            className="px-4 py-2 border rounded-lg text-base"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <div className="flex space-x-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                className={`px-4 py-2 border rounded-lg text-base ${
                  currentPage === index + 1
                    ? "bg-gray-300"
                    : "hover:bg-gray-200"
                }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <button
            className="px-4 py-2 border rounded-lg text-base"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </main>
    </div>
  );
};

export default Shop;
