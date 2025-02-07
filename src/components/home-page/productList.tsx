import React from "react";
import ProductCard from "@/components/home-page/productCard";
import { Product } from "@/app/types/types";

interface ProductListProps {
  title: string;
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ title, products }) => {
  return (
    <section className="px-4 py-8">
      <h2 className="mb-8 text-3xl font-bold text-center text-gray-800 md:text-5xl">
        {title}
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product._id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
