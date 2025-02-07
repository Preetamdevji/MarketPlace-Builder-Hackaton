import { groq } from "next-sanity";

export const allProduct = `*[_type == "product"]`;
export const newArrivals = groq`*[_type == "product" && isNew == true]`;
