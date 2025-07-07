import { FaStar, FaStarHalf } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProductCard = ({ product }) => {
  const {
    id,
    name,
    description,
    price,
    rating,
    image,
    quantityPerPack,
    inStock,
  } = product;

  return (
    <Link to={`/products/${id}`}>
    <motion.div
      className="bg-[#ffffff] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 max-w-xs mx-auto border border-[#f4e7a5]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Product Image */}
      <div className="relative bg-white ">
        <img
          src={image}
          alt={name}
          className="w-[100%] bg-red-100 h-41 object-contain rounded-md"
        />
        {inStock ? (
          <div className="absolute bottom-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
            IN STOCK
          </div>
        ) : (
          <div className="absolute bottom-2 left-2 bg-red-400 text-white text-xs px-2 py-1 rounded">
            OUT OF STOCK
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="p-4 space-y-3">
        {/* Product Name */}
        <Link
          to={`/products/${id}`}
          className="text-md font-bold text-gray-800 leading-tight"
        >
          {name}
        </Link>

        {/* Rating */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            {Array.from({ length: 5 }, (_, index) => {
              if (index < Math.floor(rating)) {
                return (
                  <FaStar key={index} size={14} className="text-yellow-400" />
                );
              } else if (index < Math.ceil(rating)) {
                return (
                  <FaStarHalf
                    key={index}
                    size={14}
                    className="text-yellow-400"
                  />
                );
              } else {
                return (
                  <FaStar key={index} size={14} className="text-gray-300" />
                );
              }
            })}
          </div>
          <span className="text-sm text-gray-600">{rating.toFixed(1)}</span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed h-12 overflow-hidden">
          {description}
        </p>

        {/* Quantity Info */}
        <div className="text-sm text-gray-600 bg-[#e9f5e9] px-2 py-1 rounded-md inline-block">
          {quantityPerPack}
        </div>

        {/* Price */}
        <div className="text-lg font-bold text-gray-800">₹ {price}</div>

        {/* Add to Cart Button */}
        <motion.button
          className={`w-full py-2 rounded-md font-semibold text-white transition-all duration-300 ${
            inStock
              ? "bg-[#6B8E4E] hover:bg-[#5A7A42] active:bg-[#4F6B39]"
              : "bg-gray-400 cursor-not-allowed"
          }`}
          disabled={!inStock}
          whileHover={inStock ? { scale: 1.02 } : {}}
          whileTap={inStock ? { scale: 0.98 } : {}}
        >
          {inStock ? "ADD TO CART" : "OUT OF STOCK"}
        </motion.button>
      </div>
    </motion.div>
    </Link>
  );
};

export default ProductCard;
