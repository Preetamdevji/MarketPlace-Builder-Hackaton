"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import CheckoutForm from "@/app/order/checkoutForm";
import BreadcrumbCart from "./orderNav";

interface CartItem {
  _id?: string;
  id?: number;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

const CheckOutPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const deliveryFee = 15;
  const router = useRouter();

  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      try {
        const parsedCart: CartItem[] = JSON.parse(storedCart).map((item: any) => ({
          ...item,
          price: Number(item.price) || 0,
          quantity: Number(item.quantity) || 1,
        }));
        console.log("Checkout page cart data:", parsedCart);
        setCartItems(parsedCart);
      } catch (error) {
        console.error("Error parsing cart items:", error);
      }
    }
  }, []);

  const handleToCalculateSubtotal = () => {
    return cartItems.reduce((subtotal, item) => {
      return subtotal + item.price * item.quantity;
    }, 0);
  };

  const subtotal = handleToCalculateSubtotal();
  const total = subtotal + deliveryFee;

  return (
    <div className="min-h-screen bg-gray-50 p-6 lg:p-12">
      <div className="max-w-6xl mx-auto">
      <BreadcrumbCart/>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side: Product Details */}
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow space-y-6">
            <h2 className="text-2xl font-bold">Order Summary</h2>
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div key={item._id} className="flex items-center gap-4 border-b pb-4">
                  <Image 
                    src={item.image || "/placeholder.png"} 
                    alt={item.name} 
                    width={80} 
                    height={80} 
                    className="rounded-lg"
                  />
                  <div className="flex-1">
                    <p className="text-lg font-semibold">{item.name}</p>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                  <p className="text-lg font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center text-2xl">No items in cart.</p>
            )}
          </div>

          {/* Right Side: Checkout Form and Total Price */}
          <div className="lg:col-span-1 space-y-6">
            {/* Billing Details */}
            <div className="bg-white p-6 rounded-lg shadow space-y-6">
              <h2 className="text-2xl font-bold">Billing Details</h2>
              <CheckoutForm cartItems={cartItems} router={router} />
            </div>

            {/* Total Price Section */}
            <div className="bg-white p-6 rounded-lg shadow space-y-4">
              <h2 className="text-2xl font-bold mb-6">Total Price</h2>
              <p className="text-lg font-semibold">Subtotal: ${subtotal.toFixed(2)}</p>
              <p className="text-lg font-semibold">Delivery Fee: ${deliveryFee.toFixed(2)}</p>
              <p className="text-lg font-bold">Total: ${total.toFixed(2)}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CheckOutPage;
