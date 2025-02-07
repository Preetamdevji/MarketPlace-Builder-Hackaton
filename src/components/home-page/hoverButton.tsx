import product from '@/sanity/schemaTypes/product';
import React from 'react'
// import AddToCart from "@/app/cart/cartManager"

const HoverButton = () => {
  return (
    <button onClick={() => (product)} className="w-full absolute bottom-0 bg-black text-white px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    Add To Cart
  </button>
  )
}

export default HoverButton;