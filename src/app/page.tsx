// "use client"
// import React, { useState, useEffect } from "react";
// import BrandLogo from "@/components/home-page/brandLogo";
// import Hero from "@/components/home-page/hero";
// import ProductList from "@/components/home-page/productList";
// import { ButtonDemo } from "@/components/home-page/button";
// import Style from "@/components/home-page/style";
// import Reviews from "@/components/home-page/reviews";
// import { client } from "@/sanity/lib/client";
// import { Product } from "@/app/types/types";

// // Fetch products from Sanity
// export const fetchProducts = async (): Promise<Product[]> => {

//   const query = `*[_type == "product" && isNew == true] {
//     _id,
//     name,
//     price,
//     oldPrice,
//     description,
//     "image": image.asset->url,
//     category,
//     discountPercent,
//     isNew,
//     colors,
//     sizes,
//     rating,
//     "slug": slug.current
//   }`;
//   return await client.fetch(query);
// };

// const HomePage: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);

//   useEffect(() => {
//     const getProducts = async () => {
//       try {
//         const data = await fetchProducts(); // Fetch products from the server
//         setProducts(data); // Update the state with the fetched products
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };
  
//     getProducts();
//   }, []); // Empty dependency array ensures data is fetched only once

//   // Separate products into categories
//   const newArrivals = products.slice(0, 4);
//   const topSelling = products.slice(4, 8);

//   return (
//     <div>
//       {/* Hero Section */}
//       <Hero />

//       {/* Brand Logos Section */}
//       <BrandLogo />

//       {/* Products Section */}
//       <div className="container mx-auto px-4 mt-20">
//         {/* New Arrivals */}
//         <ProductList title="New Arrivals" products={newArrivals} />
//         <ButtonDemo />

//         {/* Divider */}
//         <div className="my-8 w-auto border-t border-gray-300"></div>

//         {/* Top Selling */}
//         <ProductList title="Top Selling" products={topSelling} />
//         <ButtonDemo />
//       </div>

//       {/* Style Section */}
//       <Style />

//       {/* Reviews Section */}
//       <Reviews />
//     </div>
//   );
// };

// export default HomePage;



"use client";
import React, { useState, useEffect } from "react";
import BrandLogo from "@/components/home-page/brandLogo";
import Hero from "@/components/home-page/hero";
import ProductList from "@/components/home-page/productList";
import { ButtonDemo } from "@/components/home-page/button";
import Style from "@/components/home-page/style";
import Reviews from "@/components/home-page/reviews";
import { fetchProducts } from "@/utils/fetchProducts";
import { Product } from "@/app/types/types";

const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts(); // Fetch products from the server
        setProducts(data); // Update the state with the fetched products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getProducts();
  }, []); // Empty dependency array ensures data is fetched only once

  // Separate products into categories
  const newArrivals = products.slice(0, 4);
  const topSelling = products.slice(4, 8);

  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Brand Logos Section */}
      <BrandLogo />

      {/* Products Section */}
      <div className="container mx-auto px-4 mt-20">
        {/* New Arrivals */}
        <ProductList title="New Arrivals" products={newArrivals} />
        <ButtonDemo />

        {/* Divider */}
        <div className="my-8 w-auto border-t border-gray-300"></div>

        {/* Top Selling */}
        <ProductList title="Top Selling" products={topSelling} />
        <ButtonDemo />
      </div>

      {/* Style Section */}
      <Style />

      {/* Reviews Section */}
      <Reviews />
    </div>
  );
};

export default HomePage;
