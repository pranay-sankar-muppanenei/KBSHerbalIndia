import React from "react";
import { useParams } from "react-router-dom";
import { PRODUCT_DETAILS, PRODUCTS_DUMMY_DATA } from "../data/ProductsDummyData";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ProductDetailsCard from "../components/ui/ProductDetailsCard";
import RatingAndReview from "../components/ui/RatingAndReview";
import ProductCard from "../components/ui/ProductCard";
import ExploreProducts from './ExploreProducts'

const ProductDetails = () => {
  const { id } = useParams();
  const product = PRODUCT_DETAILS.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="bg-[#ffffff] min-h-screen">
      <Header />
      <div
        className="col-span-full flex flex-col items-center justify-center text-gray-500"
        style={{ minHeight: "50vh" }}
      >
        <img
          src="/images/noProduct.webp"
          alt="No Products"
          className="w-52 h-50 mb-4 opacity-75"
        />
        <p className="text-lg font-semibold">
          No products found matching your filters.
        </p>
        <p className="text-sm text-gray-400 mt-2">
          Try adjusting your filters or explore other categories.
        </p>
      </div>
       <Footer />
    </div>
    );
  }

  return (
    <div className="bg-[#ffffff] min-h-screen">
      <Header />
      <div className="container mx-auto px-2 md:px-8 py-6">
        <h1 className="text-2xl font-bold mb-4 text-center font-libre">Product Details</h1>
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start justify-center">
          {/* Left: Product Image & Desktop Review */}
          <div className="w-full md:w-[420px] flex flex-col items-center">
            <div className="flex justify-center items-center w-full">
              <div className="bg-[#F8F8F8] rounded-2xl shadow p-6 flex justify-center items-center w-[320px] h-[320px] md:w-[400px] md:h-[400px]">
                <img
                  className="w-full h-full object-contain"
                  src="https://m.media-amazon.com/images/I/61KWg-yFaxL._UF1000,1000_QL80_.jpg"
                  alt={product.name}
                />
              </div>
            </div>
            <div className="hidden md:block w-full mt-8">
              <RatingAndReview
                rating={product.rating}
                reviewCount={product.reviewCount}
                ratingDistribution={product.ratingDistribution}
                reviews={product.reviews}
              />
            </div>
          </div>
          {/* Right: Product Details Card */}
          <div className="w-full md:w-[480px] flex justify-center">
            <ProductDetailsCard product={product} />
          </div>
        </div>
        {/* Mobile: Rating and Review below details card */}
        <div className="md:hidden w-full mt-8">
          <RatingAndReview
            rating={product.rating}
            reviewCount={product.reviewCount}
            ratingDistribution={product.ratingDistribution}
            reviews={product.reviews}
          />
        </div>

        {/* You may also section */}
        <div className="mt-16">
          <h2 className="text-xl font-semibold mb-6 text-center font-libre">You may also</h2>
          <div className="flex flex-wrap gap-6 justify-center">
            {PRODUCTS_DUMMY_DATA.map((prod) => (
              <div key={prod.id} className="w-[250px]">
                <ProductCard product={prod} />
              </div>
            ))}
          </div>
        </div>

       { /* Frequently Bought Together */}
          <div className="mt-16">
            <h2 className="text-xl font-semibold mb-6 text-center font-libre">Frequently Bought Together</h2>
            <div className="flex flex-wrap gap-6 justify-center items-center">
              {PRODUCTS_DUMMY_DATA.slice(0, 3).map((prod, idx, arr) => (
                <React.Fragment key={prod.id}>
            <div className="w-[250px]">
              <ProductCard product={prod} />
            </div>
            {idx < arr.length - 1 && (
              <span className="text-4xl font-bold text-gray-400 mx-2 select-none">+</span>
            )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Recently Viewed Products */}
        <div className="mt-16">
          <h2 className="text-xl font-semibold mb-6 text-center font-libre">Recently Viewed Products</h2>
          <div className="flex flex-wrap gap-6 justify-center">
            {PRODUCTS_DUMMY_DATA.slice(-3).map((prod) => (
              <div key={prod.id} className="w-[250px]">
                <ProductCard product={prod} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
