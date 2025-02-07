import { Product } from "@/app/types/types";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { groq } from "next-sanity";
import Image from "next/image";
import { FaRegStar, FaStar } from "react-icons/fa";
import ReviewLinks from "@/app/product/reviewLinks/links";
import ProductPurchaseOptions from "../productPurchaseOptions";

interface ProductPageProps {
  params: { slug: string };
}

// Fetch a single product by slug
async function getProduct(slug: string): Promise<Product | null> {
  const product = await client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0] {
      _id,
      name,
      price,
      description,
      "image": image.asset->url,
      category,
      discountPercent,
      isNew,
      colors,
      sizes,
      rating,
      "slug": slug.current
    }`,
    { slug }
  );

  if (product) {
    const oldPrice = product.discountPercent
      ? (product.price * (100 + product.discountPercent)) / 100
      : null;

    return {
      ...product,
      oldPrice, // Add the old price to the product data
    };
  }

  return null;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = params;
  const product = await getProduct(slug);

  if (!product) {
    return <div>Product not found</div>;
  }

  const {
    name,
    price,
    oldPrice,
    description,
    image,
    discountPercent,
    colors,
    sizes,
    rating,
  } = product;

  return (
    <div className="max-w-screen-2xl mx-auto bg-gray-50 px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        <div className="flex flex-col-reverse md:flex-row gap-5">
          <div className="w-[160px] h-[130px] mt-2 rounded-2xl">
            {image && (
              <Image
                src={urlFor(image).url()}
                alt={name}
                width={500}
                height={500}
                className="rounded-2xl shadow-md w-[150px] h-[130px]"
              />
            )}
          </div>
          <div className="w-full h-auto rounded-full">
            {image && (
              <Image
                src={urlFor(image).url()}
                alt={name}
                width={500}
                height={500}
                className="rounded-lg w-full h-auto"
              />
            )}
          </div>
        </div>
        {/* Product Details */}
        <div className="flex flex-col gap-6 mt-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-integral">
            {name}
          </h1>
          {/* Rating */}
          <div className="flex items-center text-lg text-yellow-400">
            {[...Array(Math.floor(rating))].map((_, i) => (
              <span key={i}>
                <FaStar />
              </span>
            ))}
            {rating % 1 !== 0 && <span>⭐</span>}
            {[...Array(5 - Math.ceil(rating))].map((_, i) => (
              <FaRegStar key={i} />
            ))}
            <span className="ml-2 text-sm text-gray-500">({rating}/5)</span>
          </div>
          {/* Price and Discount */}
          <div className="flex items-center gap-2 font-bold">
            <p className="text-lg md:text-[35px] text-black">
              ${price.toFixed(0)}
            </p>
            {oldPrice && (
              <div className="flex items-center gap-2 text-gray-400">
                <p className="text-lg md:text-[35px] line-through">
                  ${oldPrice.toFixed(0)}
                </p>
                <p className="text-sm bg-red-200 text-red-400 px-2 rounded-full">
                  -{discountPercent}%
                </p>
              </div>
            )}
          </div>
          <hr />
          <p className="text-md text-gray-700 font-satoshi -mt-2">
            {description}
          </p>
          <hr />

          {/* Render the client component for options, quantity, and Add to Cart */}
          <ProductPurchaseOptions
            product={product}
            colors={colors || []}
            sizes={sizes || []}
          />
        </div>
      </div>
      <ReviewLinks />
    </div>
  );
}

