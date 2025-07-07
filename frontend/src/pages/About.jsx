import React from "react";
import Seo from "../components/ui/Seo";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { IoPeople, IoShieldCheckmark, IoPerson } from "react-icons/io5";
import { BiSolidBadgeCheck } from "react-icons/bi";

const About = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col w-full">
      <Seo
        title="About Us - KBS Herbal"
        description="Learn more about KBS Herbal, our mission, and the natural remedies we offer."
        keywords="KBS Herbal, About Us, Natural Remedies"
        image="/images/about-us.jpg"
        url="https://kbsherbal.com/about"
      />
      <Header />
      <main className="flex-grow min-h-screen">
        {/* {banner section} */}
        <div
          className="relative w-full h-50 md:h-84 bg-cover bg-center rounded-b-3xl flex flex-col items-center justify-center text-center p-8 md:w-full md:h-96"
          style={{ backgroundImage: "url('/images/bg-about.webp')" }}
        >
          <div className="absolute inset-0 bg-black/50 rounded-b-3xl"></div>

          <h1 className="text-[#b5f500] text-3xl md:text-5xl z-10 font-serif pb-2">
            KBS HERBAL
          </h1>
          <h1 className="text-[#ffffff] text-3xl md:text-5xl z-10 font-serif pb-2">
            INDIA
          </h1>
          <p className="z-10 text-sm text-[#ffffff] font-serif md:text-lg">
            A house of genuine ayurvedic medicines
          </p>
        </div>
        {/* {about section} */}
        <div className="p-3 md:p-0">
          <div className="flex flex-col">
            <div className="bg-[#567d39] text-gray-100 p-4 rounded-lg shadow-2xl mt-6 mb-4 md:rounded-none font-sans">
              <h1 className="text-xl font-bold md:text-2xl">OUR STORY</h1>
              <div className="relative">
                <div className="float-right ml-4 mb-2 ">
                  <img
                    src="/images/founder.jpg"
                    alt="founder"
                    className="rounded-full w-40 h-40 object-cover"
                  />
                  <p className="text-sm font-medium">Founder: Deepak Goyal</p>
                </div>
                <p className="text-sm md:text-base mt-4 ">
                  At KBS Herbal India, we take pride in being a trusted name in
                  authentic Ayurvedic medicines, meticulously crafted at our
                  very own manufacturing unit situated in Sri ganga nagar ,
                  Rajasthan. For over 25 years, our mission has been deeply
                  rooted in the timeless wisdom of Ayurveda, delivering holistic
                  wellness with care and integrity.
                  <br />
                  <br />
                  <strong>
                    Guided by his father, Bhimsen Ji Goyal, he embraced Ayurveda
                    as a way of life—transforming it into a daily ritual
                    for his consumers.
                  </strong>
                  <br />
                  <br />
                  Our diverse range of products includes Herbal oils,
                  Anti-dandruff shampoos, Pure syrups, Healthy juices, Sexual
                  wellness solutions, and a specialized Skincare range for
                  women—all thoughtfully formulated to promote healing,
                  vitality, and everyday wellness.
                </p>
              </div>
            </div>

            <div className="md:p-4 lg:p-12">
              <div className="p-3 rounded-lg bg-[#e3f2ba] border border-[#325e12] mt-4 mb-4">
                <div className="flex items-center text-lg md:text-xl font-bold text-[#325e12]">
                  <IoPeople
                    className="text-[#325e12] inline-block mr-2"
                    size={35}
                  />
                  <h1>Over 10 lakh satisfied customers</h1>
                </div>
                <p className="text-[#325e12]">
                  For over two decades, we’ve proudly served more than 1 million
                  customers, earning their trust through our unwavering
                  commitment to quality products at prices every common man can
                  afford
                </p>
              </div>

              <div className="mt-10 flex flex-row">
                <img
                  className="w-24 md:mr-20 md:w-[150px]"
                  src="/images/vision.png"
                  alt="vision picture"
                />
                <div className="md:ml-3 w-full md:w-3/4">
                  <h1 className="pl-2 mb-2 text-[#325e12] text-xl font-bold">
                    OUR VISION
                  </h1>
                  <p className="pl-2 text-black text-sm md:text-basemt-4">
                    Our vision is to become a trusted name in every Indian
                    household by providing Ayurvedic solutions for medicine,
                    skincare, and personal care—driven by growing our brand
                    awareness and deep-rooted authenticity.
                  </p>
                  <div className="hidden bg-[#567d39] text-gray-100 p-4 rounded-lg mt-10 md:mt-15 md:block">
                    <h1 className="text-xl font-bold ">OUR MISION</h1>
                    <p className="text-sm md:text-base leading-relaxed mt-4 text-justify">
                      Our mission is to be a one-stop solution for every common
                      man's healing needs through pure, sustainable practices
                      offering products deeply rooted in our cultural heritage.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#567d39] text-gray-100 p-4 rounded-lg mt-10 md:mt-15 mb-10 md:hidden">
                <h1 className="text-xl font-bold ">OUR MISION</h1>
                <p className="text-sm md:text-base leading-relaxed mt-4 text-justify">
                  Our mission is to be a one-stop solution for every common
                  man's healing needs through pure, sustainable practices
                  offering products deeply rooted in our cultural heritage.
                </p>
              </div>
              <div className="mt-3">
                <h1 className="text-[#325e12] text-xl font-bold">
                  OUR CORE VALUES
                </h1>
                <div className="flex flex-col md:flex-row md:justify-center gap-4 mt-4 ">
                  <div className="bg-[#f4e7a5] p-4 rounded-lg shadow-2xl mt-4 mb-4 md:w-100">
                    <IoShieldCheckmark
                      className="inline-block text-[#325e12] mr-2"
                      size={25}
                    />
                    <span className="text-[#325e12] text-lg md:text-base font-bold">
                      Integrity
                    </span>
                    <p className="text-black mt-3">
                      We uphold honesty and tranparency in everything we do from
                      sourcing ingredients to customer service
                    </p>
                  </div>
                  <div className="bg-[#f4e7a5] p-4 rounded-lg shadow-2xl mt-4 mb-4 md:w-100">
                    <IoPerson
                      className="inline-block text-[#325e12] mr-2"
                      size={25}
                    />
                    <span className="text-[#325e12] text-lg md:text-base font-bold">
                      Integrity
                    </span>
                    <p className="text-black mt-3">
                      We uphold honesty and tranparency in everything we do from
                      sourcing ingredients to customer service
                    </p>
                  </div>
                  <div className="bg-[#f4e7a5] p-4 rounded-lg shadow-2xl mt-4 mb-4 md:w-100">
                    <BiSolidBadgeCheck
                      className="inline-block text-[#325e12] mr-2"
                      size={25}
                    />
                    <span className="text-[#325e12] text-lg md:text-base font-bold">
                      Integrity
                    </span>
                    <p className="text-black mt-3">
                      We uphold honesty and tranparency in everything we do from
                      sourcing ingredients to customer service
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-3 mb-3">
                <h1 className="pl-2 mb-2 text-[#325e12] text-xl font-bold text-center">
                  OUR ACCREDITATION
                </h1>
                <div className="flex flex-row justify-around mt-4">
                  <img
                    className="w-15 h-11 md:h-20"
                    src="/images/accreditation/iso2015.png"
                    alt="accreditation:iso2015"
                  />
                  <img
                    className="w-15 h-11 md:h-20"
                    src="/images/accreditation/iso.jpg"
                    alt="accreditation:iso"
                  />
                  <img
                    className="w-15 h-11 md:h-20"
                    src="/images/accreditation/gmp.webp"
                    alt="accreditation:gmp"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
