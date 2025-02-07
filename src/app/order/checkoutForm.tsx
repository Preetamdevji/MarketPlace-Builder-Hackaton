"use client";
import React, { useState } from "react";
import Swal from "sweetalert2";
// import client from "@/sanity/lib/client";
import { useRouter } from "next/navigation";
import { createClient } from "next-sanity";


// Initialize Sanity Client using createClient
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION! || "2025-01-27", 
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

interface CartItem {
  _id?: string;
  id?: number;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

interface CheckoutFormProps {
  cartItems: CartItem[];
  router: ReturnType<typeof useRouter>;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ cartItems, router }) => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    zipCode: "",
    phoneNumber: "",
  });
  const [formErrors, setFormErrors] = useState<any>({});

  const deliveryFee = 15;
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const total = subtotal + deliveryFee;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const errors: any = {};
    Object.keys(formValues).forEach((key) => {
      if (!formValues[key as keyof typeof formValues]) {
        errors[key] = true;
      }
    });
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      Swal.fire("Error", "Please fill out all required fields.", "error");
      return;
    }
    Swal.fire({
      title: "Confirm Order",
      text: "Are you sure you want to place this order?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, place order!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const orderData = {
            _type: "order",
            ...formValues,
            cartItems: cartItems.map((item) => ({
              _type: "reference",
              _ref: item._id,
            })),
            total,
          };

          await client.create(orderData);
          Swal.fire("Success!", "Your order has been placed successfully.", "success");
          localStorage.removeItem("cartItems");
          router.push("/checkout");
        } catch (error) {
          console.error("Error creating order", error);
          Swal.fire("Error", "Failed to place order. Try again.", "error");
        }
      }
    });
  };

  return (
    <form onSubmit={handlePlaceOrder} className="space-y-4">
      {Object.keys(formValues).map((field) => (
        <input
          key={field}
          type="text"
          name={field}
          value={formValues[field as keyof typeof formValues]}
          onChange={handleInputChange}
          placeholder={field.replace(/([A-Z])/g, " $1").trim()}
          className={`w-full p-3 border rounded ${formErrors[field] ? "border-red-500" : "border-gray-300"}`}
        />
      ))}
      <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600">
        Place Order
      </button>
    </form>
  );
};

export default CheckoutForm;
