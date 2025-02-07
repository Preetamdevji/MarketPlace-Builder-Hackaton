// // components/AddToCartButton.tsx
// "use client";

// import { useRouter } from "next/navigation";
// import { Product } from "@/app/types/types"; // adjust the import path as needed

// interface AddToCartButtonProps {
//   product: Product;
// }

// export default function AddToCartButton({ product }: AddToCartButtonProps) {
//   const router = useRouter();

//   const handleAddToCart = () => {
//     // Retrieve any existing cart items from localStorage
//     const storedCart = localStorage.getItem("cartItems");
//     const cartItems = storedCart ? JSON.parse(storedCart) : [];

//     // Map product to match CartItem interface:
//     // If your product image is stored under 'image', but your cart expects 'img', do this:
//     const productForCart = {
//       ...product,
//       img: product.image, // set the 'img' property based on product.image
//     };

//     // Add the new product to the cart
//     cartItems.push(productForCart);

//     // Save updated cart items
//     localStorage.setItem("cartItems", JSON.stringify(cartItems));

//     // Navigate to the cart page
//     router.push("/cart");
//   };

//   return (
//     <button
//       onClick={handleAddToCart}
//       className="mt-6 bg-black text-white py-3 px-16 md:px-[150px] rounded-full font-satoshi"
//     >
//       Add to Cart
//     </button>
//   );
// }



"use client";

import React from "react";
import { Product } from "@/app/types/types";


interface AddToCartButtonProps {
  product: Product;
  selectedColor: string;
  selectedSize: string;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  product,
  selectedColor,
  selectedSize,
}) => {
  const addToCart = () => {
  

    const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");

    const newItem = {
      ...product,
      quantity: 1,
      // Add the selected options
      selectedColor,
      selectedSize,
    };

    // Optionally check if the item already exists in the cart
    cartItems.push(newItem);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    alert("Added to cart!");
  };

  return (
    <button
      onClick={addToCart}
      className="bg-black text-white py-3 px-8 rounded-full font-satoshi"
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;



