// app/product/ProductPurchaseOptions.tsx
"use client";

import React, { useState } from "react";
import ProductOptions from "./productOptions";
import AddToCartButton from "@/components/home-page/AddToCartButton";
import { Product } from "@/app/types/types";


interface ProductPurchaseOptionsProps {
  product: Product;
  colors: string[];
  sizes: string[];
}

const ProductPurchaseOptions: React.FC<ProductPurchaseOptionsProps> = ({
  product,
  colors,
  sizes,
}) => {
  
  const [selectedColor, setSelectedColor] = useState<string>(colors[0] || "");
  const [selectedSize, setSelectedSize] = useState<string>(sizes[0] || "");

  return (
    <div className="flex flex-col gap-5">
      {/* Option Selector */}
      <ProductOptions
        colors={colors}
        sizes={sizes}
        onOptionsChange={(color, size) => {
          setSelectedColor(color);
          setSelectedSize(size);
        }}
      />
      {/* Add to Cart Button with selected options */}
      <AddToCartButton
        product={product}
        selectedColor={selectedColor}
        selectedSize={selectedSize}
      />
    </div>
  );
};

export default ProductPurchaseOptions;
