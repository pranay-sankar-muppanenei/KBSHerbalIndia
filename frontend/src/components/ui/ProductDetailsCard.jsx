import React from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";


const ProductDetailsCard = ({ product }) => {
  // Destructure product details
  const {
    name,
    tagline,
    rating,
    reviewCount,
    volume,
    price,
    benefits,
    dosage,
    ingredients,
    howToUse,
  
    inStock,
    image,
  } = product;

  // Try to resolve image path if image is a filename
  const productImage = image?.startsWith("http")
    ? image
    : image
    ? `/images/accreditation/${image}`
    : null;

  return (
    <div className="w-full md:w-[420px] max-w-full bg-[#7A9B5C] text-white rounded-b-2xl p-8 shadow-2xl border border-[#e6f2d9] flex flex-col justify-between min-h-[620px]">
    
      <div>
        <h2 className="font-extrabold text-2xl flex flex-col">
          <span>{name}</span>
          <span className="font-medium text-lg text-[#e6f2d9]">{tagline}</span>
        </h2>
        <div className="flex items-center space-x-2 mt-2">
          <div className="flex items-center">
            {Array.from({ length: 5 }, (_, index) => {
              if (index < Math.floor(rating)) {
                return (
                  <FaStar key={index} size={16} className="text-yellow-400" />
                );
              } else if (index < Math.ceil(rating)) {
                return (
                  <FaStarHalf
                    key={index}
                    size={16}
                    className="text-yellow-400"
                  />
                );
              } else {
                return (
                  <FaStar key={index} size={16} className="text-gray-300" />
                );
              }
            })}
          </div>
          <span className="text-sm text-white/80 font-semibold">{rating.toFixed(1)}</span>
          <span className="text-xs text-white/60">({reviewCount} reviews)</span>
        </div>
        <div className="my-2 font-semibold bg-white text-[#7A9B5C] inline-block rounded-lg px-3 py-1 shadow">
          {volume}
        </div>
        <div className="text-3xl font-extrabold my-2 tracking-tight drop-shadow">₹ {price}</div>
      </div>

      <div className="my-4">
        <div className="font-bold flex items-center mb-1">
          <span className="mr-2 bg-white text-[#7A9B5C] rounded-full w-7 h-7 flex items-center justify-center text-lg shadow">🟢</span>
          <span className="tracking-wide">BENEFITS</span>
        </div>
        <ul className="font-normal list-disc ml-7 space-y-1">
          {benefits && benefits.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      </div>

      <div className="my-4">
        <div className="font-bold flex items-center mb-1">
          <span className="mr-2 bg-white text-[#7A9B5C] rounded-full w-7 h-7 flex items-center justify-center text-lg shadow">🕒</span>
          <span className="tracking-wide">DOSAGE</span>
        </div>
        <div className="ml-7">{dosage}</div>
      </div>

      <div className="my-4">
        <div className="font-bold flex items-center mb-1">
          <span className="mr-2 bg-white text-[#7A9B5C] rounded-full w-7 h-7 flex items-center justify-center text-lg shadow">🧪</span>
          <span className="tracking-wide">INGREDIENTS</span>
        </div>
        <div className="ml-7">{ingredients && ingredients.join(", ")}</div>
      </div>

      <div className="my-4">
        <div className="font-bold flex items-center mb-1">
          <span className="mr-2 bg-white text-[#7A9B5C] rounded-full w-7 h-7 flex items-center justify-center text-lg shadow">❓</span>
          <span className="tracking-wide">HOW TO USE</span>
        </div>
        <div className="ml-7">{howToUse}</div>
      </div>

      {/* Certifications */}
      <div className="flex gap-10 bg-white rounded-full p-2 my-4 flex-wrap justify-center items-center">
        <img className="w-[40px] h-[40px]" src='/images/accreditation/gmp.webp' alt="gmp"/>
        <img className="w-[50px] h-[40px]" src="/images/accreditation/iso.jpg" alt='iso'/>
        <img className="w-[80px] h-[40px]" src="/images/accreditation/iso2015.png" alt='iso 9001:2015'/>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-4">
        <button
          className={`flex-1 bg-white text-[#7A9B5C] border-none rounded-full py-2 font-bold shadow-lg hover:bg-[#e6f2d9] hover:text-[#5C7A3C] transition-all duration-200 ${
            inStock ? "cursor-pointer" : "opacity-50 cursor-not-allowed"
          }`}
          disabled={!inStock}
        >
          BUY NOW
        </button>
        {inStock ? (
          <button
            className="flex-1 bg-white text-[#7A9B5C] border-none rounded-full py-2 font-bold shadow-lg hover:bg-[#e6f2d9] hover:text-[#5C7A3C] transition-all duration-200 cursor-pointer"
          >
            ADD TO CART
          </button>
        ) : (
          <button
            className="flex-1 bg-red-500 text-white border-none rounded-full py-2 font-bold shadow-lg cursor-not-allowed"
            disabled
          >
            OUT OF STOCK
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductDetailsCard;
