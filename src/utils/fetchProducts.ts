import { client } from "@/sanity/lib/client";
import { Product } from "@/app/types/types";

export const fetchProducts = async (): Promise<Product[]> => {
  const query = `*[_type == "product" && isNew == true] {
    _id,
    name,
    price,
    oldPrice,
    description,
    "image": image.asset->url,
    category,
    discountPercent,
    isNew,
    colors,
    sizes,
    rating,
    "slug": slug.current
  }`;
  return await client.fetch(query);
};
