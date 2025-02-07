// import { Product } from "@/app/types/types";


// // add to cart
// export const addToCart = (product : Product) => {
//     const cart : Product[] = JSON.parse (localStorage.getItem('cart') || "[]")

//     const exitingProductIndex = cart.findIndex(item => item._id === product._id)

//     if(exitingProductIndex > -1){
//         cart[exitingProductIndex].inventory += 1
//     }
//     else{
//         cart.push({...product, inventory: 1})

//     }
//     localStorage.setItem('cart', JSON.stringify(cart))
// }

// // remove from car 
// export const  removeFromCart = (productId : string) => {
//     let cart : Product[] = JSON.parse(localStorage.getItem('cart') || '[]')
//     cart = cart.filter(item => item._id === productId)
//     localStorage.setItem('cart', JSON.stringify(cart))
// }


// // update cart quantity

// export const updateCartQuantity = (productId: string , quantity: number) => {
//     const cart : Product[] = JSON.parse (localStorage.getItem('cart') || '[]')
//     const productIndex = cart.findIndex(item => item._id === productId)
//     if(productIndex > -1) {
//         cart [productIndex].inventory = quantity
//     } 
// }


// export const getCartItems =() : Product[] => {
//     return JSON.parse(localStorage.getItem('cart') || '[]')
// }
