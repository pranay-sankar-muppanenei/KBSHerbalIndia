import React, { useState, useEffect } from 'react';

const products = [
  {
    img: '/rose.png',
    name: 'Rose Juice',
  },
  {
    img: '/shakti.jpg',
    name: 'Shikh Pushp',
  },
  {
    img: '/alovera.png',
    name: 'Shikh Pushp',
  },
  {
    img: '/alovera.png',
    name: 'Shikh Pushp',
  },
  {
    img: '/shakti.jpg',
    name: 'Shikh Pushp',
  },

  {
    img: '/alovera.png',
    name: 'Aloe Vera Juice',
  },
  {
    img: '/rose.png',
    name: 'Neem Juice',
  },
];

const BestSellersSlider = () => {
  const [visibleCards, setVisibleCards] = useState(4);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(3);
      } else {
        setVisibleCards(4);
      }
      setCurrentIndex(0); // Reset to first when screen changes
    };

    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  const totalSteps = products.length - visibleCards + 1;

  const goToSlide = (idx) => {
    setCurrentIndex(idx);
  };

  return (
    <section className="pt-2 pb-20 bg-white">
      <h3 className="text-center text-[32px] sm:text-[40px] font-lobster mb-8">
        Best sellers
      </h3>

      <div className="overflow-hidden w-full px-6">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / visibleCards}%)`,
            width: `${(products.length * 100) / visibleCards}%`,
          }}
        >
          {products.map((product, idx) => (
            <div
              key={idx}
              style={{
                width: `${100 / products.length}%`,
              }}
              className="flex-shrink-0 px-2 flex justify-center"
            >
              <div
                className="bg-white rounded-[30px] overflow-hidden shadow-lg"
                style={{
                  width: window.innerWidth < 768 ? 127 : 250,
                  height: window.innerWidth < 768 ? 190 : 290,
                }}
              >
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: totalSteps }).map((_, idx) => (
          <span
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`w-4 h-2 rounded-full cursor-pointer ${
              currentIndex === idx ? 'bg-[#325E12] opacity-80' : 'bg-gray-300'
            }`}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default BestSellersSlider;
