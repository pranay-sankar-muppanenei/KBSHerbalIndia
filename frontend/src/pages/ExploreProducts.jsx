import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const productGroups = [
  [
    { label: "Hair Care", img: "/neem.png", bg: "#F8EBAE" },
    { label: "Skin & Beauty", img: "/kavya.png", bg: "#F3DAEB" },
    { label: "Stress & Mental Wellness", img: "/Shankh pushpi.png", bg: "#D9EDD5" },
    { label: "Digestive Health", img: "/acid.png", bg: "#F3D4D4" },
    { label: "Sexual Wellness", img: "/Hotman.png", bg: "#FDF1B6" },
    { label: "Heart Health", img: "/cholestral.png", bg: "#F7D8DC" },
    { label: "Joint & Muscle Care", img: "/Shankh pushpi.png", bg: "#D9EDD5" },
    { label: "Best seller products", img: "/surya.png", bg: "#FCE9C7" },
  ],
  [
    { label: "Sexual Wellness", img: "/Hotman.png", bg: "#FDF1B6" },
    { label: "Heart Health", img: "/cholestral.png", bg: "#F7D8DC" },
    { label: "Joint & Muscle Care", img: "/Shankh pushpi.png", bg: "#D9EDD5" },
    { label: "Best seller products", img: "/surya.png", bg: "#FCE9C7" },
  ],
];


function hexToRgba(hex, alpha) {
  let r = 0, g = 0, b = 0;

  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  } else if (hex.length === 7) {
    r = parseInt(hex[1] + hex[2], 16);
    g = parseInt(hex[3] + hex[4], 16);
    b = parseInt(hex[5] + hex[6], 16);
  }

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}


function ExploreProducts() {
   const [activeGroup, setActiveGroup] = useState(0);
  const navigate = useNavigate();

  return (
    <section className="py-12 px-4 text-center">
      <h3 className="text-3xl font-lobster mb-10 relative inline-block after:absolute after:content-[''] after:w-10 after:h-[2px] after:bg-black after:bottom-[-5px] after:left-1/2 after:-translate-x-1/2">
        Explore Our Products
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-6">
  {productGroups[activeGroup].map((item, idx) => (
    <div
      key={idx}
      className="rounded-[20px] p-4 shadow-md flex flex-col items-center"
      style={{ backgroundColor: hexToRgba(item.bg, 0.66) }}
       onClick={() => navigate('/shopall', { state: { activeTab: item.label } })}
    >
      <img src={item.img} alt={item.label} className="h-[170px] object-contain mb-4" />
      <button
        className="px-2 py-1 font-montaga  rounded-[5px] border border-black/50 text-black font-medium text-md shadow-sm"
        style={{
          backgroundColor: item.bg,
        }}
      >
        {item.label}
      </button>
    </div>
  ))}
</div>


      {/* Pagination Dots */}
      <div className="flex justify-center gap-3 mt-4">
        {productGroups.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveGroup(idx)}
            className={`w-[10px] h-[10px] rounded-full transition-all duration-300 ${
              idx === activeGroup ? 'bg-[#325E12] opacity-80 scale-125' : 'bg-[#325E12] opacity-30'
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default ExploreProducts;
