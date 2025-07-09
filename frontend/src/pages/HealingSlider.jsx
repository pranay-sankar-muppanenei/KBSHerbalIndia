import React, { useState } from 'react';

const products = [
  '/products/p1.jpg',
  '/products/p2.jpg',
  '/products/p3.jpg',
  '/products/p4.jpg',
  '/products/p5.jpg',
  '/products/p6.jpg',
];

const HealingSlider = () => {
  const [current, setCurrent] = useState(2); // initial center

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  // Number of images to show on each side
  const visibleRange = 2;

  return (
    <section className="py-12  px-4 bg-white text-center relative z-20">
      <h2 className="text-[#325E12] text-2xl md:text-3xl font-semibold mb-10">
        Healing from within Since 2000 with 29+ Years of In-house Ayurvedic Expertise
      </h2>

      <div className="max-w-5xl my-12 mx-auto relative flex justify-center items-center min-h-[350px] overflow-hidden">
        {/* Left arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 bg-gray-300 text-black rounded-full p-2 z-10 shadow"
          style={{ zIndex: 50 }}
        >
          ❮
        </button>

        <div className="relative flex justify-center items-center w-full h-full">
          {[...Array(products.length)].map((_, offset) => {
            let idx = (current + offset - visibleRange + products.length) % products.length;
            let relativeOffset = offset - visibleRange;

            let scale = 0.8;
            let translateX = relativeOffset * 80;

            if (relativeOffset === 0) {
              scale = 1;
            } else if (Math.abs(relativeOffset) === 1) {
              scale = 0.9;
            }

            return (
              <div
                key={idx}
                className="absolute transition-all duration-500 ease-in-out"
                style={{
                  transform: `translateX(${translateX}px) scale(${scale})`,
                  zIndex: relativeOffset === 0 ? 20 : 10,
                  opacity: Math.abs(relativeOffset) > visibleRange ? 0 : 1,
                }}
              >
                <div className="w-[150px] md:w-[300px] h-[220px] md:h-[350px] bg-gray-200 shadow-lg rounded">
                  <img
                    src={products[idx]}
                    alt={`Product ${idx + 1}`}
                    className="w-full h-full object-contain rounded"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Right arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 bg-gray-300 text-black rounded-full p-2 z-10 shadow"
        >
          ❯
        </button>
      </div>
    </section>
  );
};

export default HealingSlider;
