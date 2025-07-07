import { Link } from "react-router-dom";
import { FaInstagram, FaYoutubeSquare, FaWhatsappSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#fdf6d1] text-black py-8">
      <div className="flex flex-wrap justify-between gap-6 max-w-6xl mx-auto px-4">

        {/* Contact Info */}
        <div className="flex flex-col gap-2">
          <h2 className="text-[#40602a] font-semibold text-lg">Get in Touch</h2>
          <p className="text-sm leading-relaxed">
            <strong> For inquiries, please email us at: </strong><br />
            <span className="underline">saleskbsherbal@gmail.com</span>
          </p>
          <p className="text-sm leading-relaxed">
            <strong>Address: </strong> H.no: 109 Gagan path , Jawahar Nagar ,<br /> Sriganganagar, Rajasthan, 335001
          </p>
          <p className="text-sm leading-relaxed"><strong>Phone: </strong>9414090158, 7742206611</p>
          <div className="flex items-center gap-3 mt-2">
            <a href="https://www.instagram.com/kbsherbal/" target="_blank" rel="noopener noreferrer" className="hover:text-[#40602a]">
              <FaInstagram size={22} />
            </a>
            <a href="https://www.youtube.com/@kbsherbal" target="_blank" rel="noopener noreferrer" className="hover:text-[#40602a]">
              <FaYoutubeSquare size={22} />
            </a>
            <a href="https://wa.me/919414090158" target="_blank" rel="noopener noreferrer" className="hover:text-[#40602a]">
              <FaWhatsappSquare size={22} />
            </a>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-col gap-2">
          <h2 className="text-[#40602a] font-semibold text-lg">Categories</h2>
          <ul className="flex flex-col gap-1 text-sm text-black font-sans">
            <li><Link to="#" className="hover:text-[#40602a]">Hair Care</Link></li>
            <li><Link to="#" className="hover:text-[#40602a]">Skin & Beauty</Link></li>
            <li><Link to="#" className="hover:text-[#40602a]">Stress & Mental Wellness</Link></li>
            <li><Link to="#" className="hover:text-[#40602a]">Digestive Health</Link></li>
            <li><Link to="#" className="hover:text-[#40602a]">Joint & Muscle Care</Link></li>
            <li><Link to="#" className="hover:text-[#40602a]">Sexual Wellness</Link></li>
            <li><Link to="#" className="hover:text-[#40602a]">Heart Health</Link></li>
            <li><Link to="#" className="hover:text-[#40602a]">Best Seller Products</Link></li>
          </ul>
        </div>

        {/* Information */}
        <div className="flex flex-col gap-2">
          <h2 className="text-[#40602a] font-semibold text-lg">Information</h2>
          <ul className="flex flex-col gap-1 text-sm text-black">
            <li><Link to="/about" className="hover:text-[#40602a]">About Us</Link></li>
            <li><Link to="/terms-and-conditions" className="hover:text-[#40602a]">Terms and Conditions</Link></li>
            <li><Link to="/shipping-return-refunds" className="hover:text-[#40602a]">Shipping and Returns Policy</Link></li>
            <li><Link to="#" className="hover:text-[#40602a]">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2">
          <h2 className="text-[#40602a] font-semibold text-lg">Quick Links</h2>
          <ul className="flex flex-col gap-1 text-sm text-black">
            <li><Link to="#" className="hover:text-[#40602a]">Rewards</Link></li>
            <li><Link to="#" className="hover:text-[#40602a]">My Account</Link></li>
            <li><Link to="#" className="hover:text-[#40602a]">FAQs</Link></li>
            <li><Link to="#" className="hover:text-[#40602a]">Track Your Order</Link></li>
          </ul>
        </div>

      </div>

      {/* Footer Bottom */}
      <p className="text-center text-xs text-[#40602a] font-medium mt-6">
        &copy; {new Date().getFullYear()} KBS Herbal. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
