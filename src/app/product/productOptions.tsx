// app/product/ProductOptions.tsx
"use client";

import React, { useState, useEffect } from "react";

interface ProductOptionsProps {
  colors: string[];
  sizes: string[];
  onOptionsChange: (selectedColor: string, selectedSize: string) => void;
}

const ProductOptions: React.FC<ProductOptionsProps> = ({
  colors,
  sizes,
  onOptionsChange,
}) => {
  // Initialize with the first option if available.
  const [selectedColor, setSelectedColor] = useState<string>(colors[0] || "");
  const [selectedSize, setSelectedSize] = useState<string>(sizes[0] || "");

  // Whenever the selection changes, pass it up
  useEffect(() => {
    onOptionsChange(selectedColor, selectedSize);
  }, [selectedColor, selectedSize, onOptionsChange]);

  return (
    <div className="space-y-4">
      {colors && colors.length > 0 && (
        <div>
          <h3 className="font-semibold">Choose Color:</h3>
          <div className="flex gap-2 mt-2">
            {colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`w-8 h-8 border-2 rounded-full ${
                  selectedColor === color ? "border-black" : "border-gray-300"
                }`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
      )}

      {sizes && sizes.length > 0 && (
        <div>
          <h3 className="font-semibold">Choose Size:</h3>
          <div className="flex gap-2 mt-2">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-4 py-2 border rounded ${
                  selectedSize === size
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductOptions;
