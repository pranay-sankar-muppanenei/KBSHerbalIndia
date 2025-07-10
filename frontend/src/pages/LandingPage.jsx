import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Link } from 'react-router-dom';
import ExploreProducts from './ExploreProducts';
import HealingSlider from './HealingSlider';
import BestSellersSlider from './BestSellersSlider';

const concerns = [
  { label: 'Mind', img: '/mind.png' },
  { label: 'Lungs', img: '/lungs.png' },
  { label: 'Liver', img: '/liver.png' },
  { label: 'Ortho', img: '/ortho.png' },
  { label: 'Heart', img: '/heart.png' },
  { label: 'Kidney', img: '/kindney.png' },
  { label: 'Stomach', img: '/stomach.png' },
  { label: 'Sexual', img: '/sexual.png' },
  { label: 'Immunity', img: '/immunity.png' },
];

function LandingPage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
     <section
  className="bg-[url('/background.png')] bg-cover bg-center rounded-b-[30px] w-full min-h-[700px] md:h-[700px] overflow-hidden"
>
  <div className="w-full px-4 flex flex-col md:flex-row items-center justify-between pt-10 md:pt-0 h-full">
    {/* Image: comes first on mobile, second on desktop */}
    <div className="order-1 md:order-2 w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0 md:pr-12">
      <img
        src="/shakthi.png"
        alt="Shakti Pushp"
        className="w-[300px] sm:w-[350px] md:w-[507px] max-h-[650px] rounded-[30px] object-contain"
      />
    </div>
    {/* Text: comes second on mobile, first on desktop */}
    <div className="order-2 md:order-1 w-full md:w-1/2 text-center md:text-left md:pl-12">
      <h2 className="font-lobster text-[40px] sm:text-[55px] md:text-[70px] leading-[1] text-[#303615]">
        For memory power & <br /> Immunity
      </h2>
      <Link to="/shopall">
        <button className="flex items-center justify-center w-[200px] sm:w-[220px] md:w-[242px] h-[44px] mt-6 mx-auto md:mx-0 rounded-[30px] bg-white font-lobster text-black text-[20px] sm:text-[25px] md:text-[35px] shadow-md transition">
          Shop Now
        </button>
      </Link>
    </div>
  </div>
</section>


      {/* Shop By Concern Section */}
      <section className="py-12 px-4 flex flex-col items-center">
        <h3 className="text-center text-[32px] sm:text-[45px] font-lobster mb-10 sm:mb-12 relative inline-block after:absolute after:content-[''] after:w-10 after:h-[2px] after:bg-black after:bottom-[-5px] after:left-1/2 after:-translate-x-1/2">
            Shop By Concern
        </h3>

        <div className="w-full max-w-[1400px] mx-auto flex flex-wrap justify-center gap-y-6 sm:gap-y-12 gap-x-4 sm:gap-x-10">
            {concerns.map((item) => (
            <div key={item.label} className="flex flex-col items-center">
                <div className="w-[100px] h-[100px] sm:w-[240px] sm:h-[250px] rounded-[100px] bg-[#D9D9D9]/20 border border-black/30 shadow-[0_0_4px_0_rgba(0,0,0,0.25)] flex items-center justify-center">
                <img src={item.img} alt={item.label} className="w-[60%] h-[60%] object-contain" />
                </div>
                <p className="mt-2 sm:mt-4 text-center text-black font-medium text-sm sm:text-lg">{item.label}</p>
            </div>
            ))}
        </div>
      </section>
     <section className="bg-[#7B9A5E] w-full min-h-[710px] py-10 px-0 flex flex-col md:flex-row items-center justify-center">
  {/* Image */}
  <div className="w-full order-2 md:order-1 md:w-1/2 flex md:justify-end justify-center px-0">
    <img
      src="/herbal.png"
      alt="Herbal Bowl"
      className="w-[400px] md:w-[460px] lg:w-[500px] h-auto object-contain"
    />
  </div>

  {/* Text */}
  <div className="w-full order-1 md:order-2 md:w-1/2 px-6 text-white">
    <h3 className="text-2xl sm:text-3xl md:text-4xl leading-snug font-semibold font-metamorphous">
      KBS HERBAL India brings the timeless wisdom of Ayurveda, channeling our dadì’s trusted nuskhe into products crafted from healing ingredients that nurture you from within.
    </h3>
  </div>
      </section>


      <ExploreProducts/> 
      <HealingSlider/>
      <BestSellersSlider/>
      <Footer />
    </>
  );
}

export default LandingPage;
