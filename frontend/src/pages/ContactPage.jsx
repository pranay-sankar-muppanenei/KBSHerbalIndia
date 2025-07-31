import React from "react";
import Seo from "../components/ui/Seo";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Seo
        title="Contact Us - KBS Herbal"
        description="Reach out to KBS Herbal for any queries. We are happy to assist you."
        keywords="Contact, KBS Herbal, Support"
        image="/images/contact-us.jpg"
        url="https://kbsherbal.com/contact"
      />
      <Header />

      <main className="flex-grow px-4 py-10 bg-white">
        <h2 className="text-3xl md:text-5xl font-semibold text-center mb-4">
          Get in touch
        </h2>
        <p className="text-center text-gray-500 mb-8 text-sm md:text-base">
          Reach out easily with our contact form
        </p>

        <div className="max-w-6xl mx-auto border   bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row">
          {/* Left Column: Contact Info */}
          <div className="bg-[#73965a] rounded-xl p-6 sm:p-8 text-white w-full md:w-1/2 relative flex flex-col justify-between items-start">
  {/* Contact Info Content */}
  <div className="space-y-4 text-sm sm:text-base">
    <h2 className="text-xl sm:text-2xl font-semibold mb-4">
      Contact Information
    </h2>
    <div className="flex items-center gap-3">
      <FaPhoneAlt size={16} />
      <span>9414090158 , 077422 06611</span>
    </div>
    <div className="flex items-center gap-3">
      <FaEnvelope size={16} />
      <span>saleskbsherbal@gmail.com</span>
    </div>
    <div className="flex items-start gap-3">
      <FaMapMarkerAlt size={16} className="mt-1" />
      <span>
        H.O. 108, 109, Gagan Path, <br />
        Jawahar Nagar, Sri Ganganagar, <br />
        Rajasthan 335001
      </span>
    </div>
  </div>

  {/* Social Icons */}
  <div className="flex justify-center w-full gap-4 mt-4">
    <a href="#" aria-label="Instagram" className="hover:text-pink-300">
      <FaInstagram size={20} />
    </a>
    <a href="#" aria-label="WhatsApp" className="hover:text-green-300">
      <FaWhatsapp size={20} />
    </a>
    <a href="#" aria-label="YouTube" className="hover:text-red-300">
      <FaYoutube size={20} />
    </a>
  </div>
</div>


          {/* Right Column: Contact Form */}
          <div className="w-full md:w-1/2 p-6 sm:p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2  gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="border-b border-black bg-transparent focus:outline-none p-2 text-sm"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="border-b border-black bg-transparent focus:outline-none p-2 text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="border-b border-black bg-transparent focus:outline-none p-2 text-sm"
                />
                <input
                  type="tel"
                  placeholder="+91 Phone Number"
                  className="border-b border-black bg-transparent focus:outline-none p-2 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Subject?
                </label>
                <div className="flex flex-wrap gap-4 text-sm text-gray-700">
                  {["General Inquiry", "Product Inquiry", "Feedback", "Support"].map(
                    (label, i) => (
                      <label key={i} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="subject"
                          className="accent-[#749452]"
                        />
                        {label}
                      </label>
                    )
                  )}
                </div>
              </div>

              <div>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full border-b border-black bg-transparent focus:outline-none p-2 text-sm"
                />
              </div>

              <div className="text-right">
                <button
                  type="submit"
                  className="bg-[#73965a] text-white px-6 py-2 rounded-md hover:bg-[#5c7c4b] transition text-sm"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
