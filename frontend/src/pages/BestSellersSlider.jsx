import React, { useState, useEffect, useRef } from 'react';
import {Link} from "react-router-dom"

const products = [
  { img: '/rose.png', name: 'Rose Juice' },
  { img: '/shakti.jpg', name: 'Shikh Pushp' },
  { img: '/alovera.png', name: 'Shikh Pushp' },
  { img: '/alovera.png', name: 'Shikh Pushp' },
  { img: '/shakti.jpg', name: 'Shikh Pushp' },
  { img: '/alovera.png', name: 'Aloe Vera Juice' },
  { img: '/rose.png', name: 'Neem Juice' },
];

const BestSellersSlider = () => {
  const [visibleCards, setVisibleCards] = useState(4);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    const updateVisibleCards = () => {
      setVisibleCards(window.innerWidth < 768 ? 3 : 4);
      setCurrentIndex(0);
    };

    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  const totalSteps = Math.max(products.length - visibleCards + 1, 1);

  const goToSlide = (idx) => {
    setCurrentIndex(idx >= totalSteps ? 0 : idx);
  };

  // Auto-slide logic with pause
  useEffect(() => {
    if (isPaused) return;

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSteps);
    }, 1500);

    return () => clearInterval(intervalRef.current);
  }, [isPaused, totalSteps]);

  return (
    <section className="pt-2 pb-20 bg-white">
      <h3 className="text-center text-[32px] sm:text-[40px] font-lobster mb-8">
        Best sellers
      </h3>

      <div className="overflow-hidden w-full px-6">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / products.length}%)`,
            width: `${(products.length * 100) / visibleCards}%`,
          }}
        >
          {products.map((product, idx) => (
            <Link
              to='/bestseller'
              key={idx}
              className="flex-shrink-0 px-2 flex justify-center"
              style={{ width: `${100 / products.length}%` }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div
                className="bg-white rounded-[30px] overflow-hidden shadow-lg w-[127px] sm:w-[180px] md:w-[250px] h-[190px] sm:h-[240px] md:h-[290px]"
              >
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: totalSteps }).map((_, idx) => (
          <span
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`w-4 h-2 rounded-full cursor-pointer transition-all ${
              currentIndex === idx ? 'bg-[#325E12] opacity-80' : 'bg-gray-300'
            }`}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default BestSellersSlider;
