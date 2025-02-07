// "use client"
// // import BreadcrumbProducts from "@/app/cart/Breadcumb";
// import React, { useState } from "react";
// import { FaTrashAlt } from "react-icons/fa";
// import Image from "next/image";

// const Cart = () => {
//   const [cartItems, setCartItems] = useState([
//     {
//       id: 1,
//       name: "Gradient Graphic T-shirt",
//       size: "Large",
//       color: "White",
//       price: 145,
//       quantity: 1,
//       img: "/casual/shart1.png",
//     },
//     {
//       id: 2,
//       name: "Checkered Shirt",
//       size: "Medium",
//       color: "Red",
//       price: 180,
//       quantity: 1,
//       img: "/casual/shart5.png",
//     },
//     {
//       id: 3,
//       name: "Skinny Fit Jeans",
//       size: "Large",
//       color: "Blue",
//       price: 240,
//       quantity: 1,
//       img: "/casual/pent4.png",
//     },
//   ]);

//   const [promoCode, setPromoCode] = useState("");
//   const deliveryFee = 15;
//   const discountPercentage = 20;

//   const updateQuantity = (id: number, increment: boolean) => {
//     const updatedItems = cartItems.map((item) => {
//       if (item.id === id) {
//         return {
//           ...item,
//           quantity: increment ? item.quantity + 1 : Math.max(item.quantity - 1, 1),
//         };
//       }
//       return item;
//     });
   
//     setCartItems(updatedItems);
//   };

//   const removeItem = (id: number) => {
//     setCartItems(cartItems.filter((item) => item.id !== id));
//   };

//   const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
//   const discount = (subtotal * discountPercentage) / 100;
//   const total = subtotal - discount + deliveryFee;

//   return (
//     <div className="p-6 lg:p-12 bg-gray-50 min-h-screen max-w-screen-2xl m-auto">
//       <div className="">
//         {/* <BreadcrumbProducts/> */}
//         </div>
//       <h1 className="text-3xl font-bold mb-6">YOUR CART</h1>
      
//       <div className="flex flex-col lg:flex-row gap-8">
//         {/* Left Section */}
//         <div className="flex-1 space-y-6">
//           {cartItems.map((item) => (
//             <div
//               key={item.id}
//               className="flex items-center justify-between bg-white p-4 rounded-lg shadow"
//             >
//               <div className="flex items-center gap-4">
//                 <Image src={item.img} alt={item.name} 
//                 width={200}
//                 height={200} className="w-20 h-20 rounded" />
//                 <div>
//                   <h2 className="text-lg font-semibold">{item.name}</h2>
//                   <p className="text-gray-500 text-sm">
//                     Size: {item.size} | Color: {item.color}
//                   </p>
//                   <p className="font-bold">${item.price}</p>
//                 </div>
//               </div>
//               <div className="flex items-center gap-4">
//                 {/* Quantity Controls */}
//                 <button
//                   onClick={() => updateQuantity(item.id, false)}
//                   className="w-8 h-8 border rounded text-xl"
//                 >
//                   -
//                 </button>
//                 <span>{item.quantity}</span>
//                 <button
//                   onClick={() => updateQuantity(item.id, true)}
//                   className="w-8 h-8 border rounded text-xl"
//                 >
//                   +
//                 </button>
//                 {/* Remove Icon */}
//                 <button
//                   onClick={() => removeItem(item.id)}
//                   className="text-red-500 hover:text-red-700"
//                 >
//                   <FaTrashAlt />
//                 </button>
//               </div>
//             </div>
            
//           ))}
//         </div>

//         {/* Right Section: Order Summary */}
//         <div className="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow space-y-4">
//           <h2 className="text-xl font-semibold">Order Summary</h2>
//           <div className="flex justify-between">
//             <span>Subtotal</span>
//             <span className="font-semibold">${subtotal}</span>
//           </div>
//           <div className="flex justify-between text-red-500">
//             <span>Discount (-{discountPercentage}%)</span>
//             <span>-${discount}</span>
//           </div>
//           <div className="flex justify-between">
//             <span>Delivery Fee</span>
//             <span>${deliveryFee}</span>
//           </div>
//           <hr />
//           <div className="flex justify-between font-bold text-lg">
//             <span>Total</span>
//             <span>${total}</span>
//           </div>
//           {/* Promo Code Input */}
//           <div className="flex items-center gap-2">
//             <input
//               type="text"
//               placeholder="Add promo code"
//               value={promoCode}
//               onChange={(e) => setPromoCode(e.target.value)}
//               className="border p-2 rounded flex-1"
//             />
//             <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
//               Apply
//             </button>
//           </div>
//           {/* Checkout Button */}
//           <button className="w-full bg-black text-white py-3 rounded hover:bg-gray-800">
//             Go to Checkout →
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;
