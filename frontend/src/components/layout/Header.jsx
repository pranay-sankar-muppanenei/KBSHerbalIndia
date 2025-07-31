import { useState } from "react";
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdHeartEmpty, IoMdCart } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { AnimatePresence } from "framer-motion";

import MobileSidebar from "./MobileSidebar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen((prev) => !prev);

  return (
    <header className="bg-[#FFFADC] sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center lg:px-20">

        {/* Mobile Hamburger */}
        <button
          type="button"
          onClick={toggleSidebar}
          className="md:hidden text-2xl text-[#40602a] hover:text-gray-800"
          aria-label="Open mobile menu"
        >
          <GiHamburgerMenu />
        </button>

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center justify-center ml-12 md:ml-0"
          aria-label="KBS Herbal Home"
        >
          <img
            src="/images/logo.png"
            alt="KBS Herbal Logo"
            className="h-10 md:h-15 lg:w-[50px] lg:h-[50px]"
          />
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center space-x-6 text-[#40602a] font-medium text-sm lg:text-base"
          role="navigation"
          aria-label="Main navigation"
        >
          <Link to="/shopall">Shop all</Link>
          <Link to="/health">Health</Link>
          <Link to="/hair">Hair</Link>
          <Link to="/skin">Skin</Link>
          <Link to="/bestseller">Best Sellers</Link>
          <Link to="/about">About us</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* Action Icons */}
        <div className="flex items-center gap-4 text-[#40602a]">
          <Link to="#" aria-label="Search">
            <IoSearchOutline className="text-2xl hover:text-gray-800" />
          </Link>
          <Link to="#" aria-label="Wishlist">
            <IoMdHeartEmpty className="text-2xl hover:text-gray-800" />
          </Link>
          <Link to="#" aria-label="Cart">
            <IoMdCart className="text-2xl hover:text-gray-800" />
          </Link>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && <MobileSidebar onClose={toggleSidebar} />}
      </AnimatePresence>
    </header>
  );
};

export default Header;
