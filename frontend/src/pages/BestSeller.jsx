import React, { useState, useMemo } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Seo from "../components/ui/Seo";
import ShopAllControlBar from "../components/ui/ShopAllControlBar";
import ProductCard from "../components/ui/ProductCard";
import { PRODUCTS_DUMMY_DATA } from "../data/ProductsDummyData";

const tabs = [
  { name: "All", value: "All" },
  { name: "Hair Care", value: "Hair Care" },
  { name: "Skin & Beauty", value: "Skin & Beauty" },
  { name: "Stress & Mental Wellness", value: "Stress & Mental Wellness" },
  { name: "Joint & Muscle Care", value: "Joint & Muscle Care" },
  { name: "Digestive Health", value: "Digestive Health" },
  { name: "Sexual Wellness", value: "Sexual Wellness" },
  { name: "Heart Health", value: "Heart Health" },
  { name: "Best seller products", value: "Best seller products" },
];

const BestSeller = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].value);
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [priceFilter, setPriceFilter] = useState(Infinity);
  const [ratingFilter, setRatingFilter] = useState(0);

  const filteredProducts = useMemo(() => {
    const filtered = PRODUCTS_DUMMY_DATA.filter((product) => {
      const matchesTab = activeTab === "All" || product.category === activeTab;
      const matchesPrice = product.price <= priceFilter;
      const matchesRating = product.rating >= ratingFilter;
      return matchesTab && matchesPrice && matchesRating;
    });
    return Array(3).fill(filtered).flat(); // Duplicate for visual population
  }, [activeTab, priceFilter, ratingFilter]);

  return (
    <>
      <Seo
        title="Shop All | KBS HERBAL India"
        description="Explore our complete range of Ayurveda-based herbal products at KBS HERBAL India. Shop all categories and discover the benefits of natural wellness."
        keywords="shop all, KBS HERBAL, Ayurveda, herbal products, India"
        url="/shop-all"
      />
      <Header />
      <main className="space-y-2 mb-6">
        <h1 className="text-2xl text-center mt-3 mb-3 md:text-3xl font-bold text-[#575757]">
          Best Sellers
        </h1>
        <ShopAllControlBar
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <div className="container mx-auto px-4 p-4">
          {/* Filter Dropdown */}
          <div className="relative flex justify-end mb-6">
            <button
              className="flex items-center gap-2 bg-gradient-to-r from-[#6B8E4E] to-[#A8C686] text-white px-5 py-2 rounded-lg shadow-md hover:from-[#5a7b3e] hover:to-[#8fae5d] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#6B8E4E]"
              onClick={() => setFiltersVisible(!filtersVisible)}
              aria-expanded={filtersVisible}
              aria-controls="filter-dropdown"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707l-6.414 6.414A2 2 0 0013 14.586V19a1 1 0 01-1.447.894l-2-1A1 1 0 019 18v-3.414a2 2 0 00-.293-1.121L2.293 6.707A1 1 0 012 6V4z"
                />
              </svg>
              <span className="font-semibold">Filter</span>
              <svg
                className={`w-4 h-4 transform transition-transform duration-200 ${
                  filtersVisible ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {filtersVisible && (
              <div
                id="filter-dropdown"
                className="absolute right-0 mt-3 bg-white border border-gray-200 rounded-xl shadow-2xl p-6 w-72 z-20 animate-fade-in"
                style={{ minWidth: "18rem" }}
              >
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="priceFilter"
                      className="block text-xs font-semibold text-gray-600 mb-1"
                    >
                      Max Price
                    </label>
                    <input
                      type="number"
                      id="priceFilter"
                      value={priceFilter === Infinity ? "" : priceFilter}
                      onChange={(e) =>
                        setPriceFilter(
                          e.target.value ? parseFloat(e.target.value) : Infinity
                        )
                      }
                      placeholder="Enter max price"
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#6B8E4E] focus:border-[#6B8E4E] text-sm transition"
                      min="0"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="ratingFilter"
                      className="block text-xs font-semibold text-gray-600 mb-1"
                    >
                      Min Rating
                    </label>
                    <input
                      type="number"
                      id="ratingFilter"
                      value={ratingFilter}
                      onChange={(e) =>
                        setRatingFilter(
                          e.target.value ? parseFloat(e.target.value) : 0
                        )
                      }
                      placeholder="Enter min rating"
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#6B8E4E] focus:border-[#6B8E4E] text-sm transition"
                      min="0"
                      max="5"
                      step="0.1"
                    />
                  </div>
                  <div className="flex justify-between gap-2 pt-2">
                    <button
                      className="flex-1 bg-[#6B8E4E] text-white py-2 rounded-md font-semibold hover:bg-[#5a7b3e] transition"
                      onClick={() => setFiltersVisible(false)}
                      type="button"
                    >
                      Apply
                    </button>
                    <button
                      className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-md font-semibold hover:bg-gray-200 transition"
                      onClick={() => {
                        setPriceFilter(Infinity);
                        setRatingFilter(0);
                        setFiltersVisible(false);
                      }}
                      type="button"
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
                <ProductCard key={`${product.id}-${index}`} product={product} />
              ))
            ) : (
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
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BestSeller;
