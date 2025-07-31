import {Link} from 'react-router-dom';
import {motion} from 'motion/react';
import {FaInstagram, FaYoutubeSquare, FaWhatsappSquare} from 'react-icons/fa';

const sidebarVariants = {
  hidden: { x: '-100%' },
  visible: { x: 0 },
  exit: { x: '-100%' },
};

const MobileSidebar = ({ onClose }) => {
  return (
    <motion.aside
      className="fixed top-0 left-0 w-3/4 h-full bg-white z-50 shadow-lg flex flex-col gap-6"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={sidebarVariants}
      transition={{type: 'spring',ease : 'easeInOut', duration: 0.3 }}
    >
      <div className='flex items-center justify-between mb-6 p-4'>
      <h1 className='text-xl font-medium font-serif text-[#325e12]'>Menu</h1>
      <button onClick={onClose} className="self-end text-xl font-bold text-[#547c37]">✕</button>
   </div>
      <nav className="flex flex-col gap-2 divide-y divide-gray-300 text-sm font-medium text-[#567d39] p-3 font-sans">
         <Link className='pl-3 ' to="/shopall" onClick={onClose}>Shop All</Link>
        <Link className='pl-3 pt-2' to="/health" onClick={onClose}>Health Care</Link>
        <Link className='pl-3 pt-2' to="/skin" onClick={onClose}>Skin Care</Link>
        <Link className='pl-3 pt-2' to="/hair" onClick={onClose}>Hair Care</Link>
        <Link className='pl-3 pt-2' to="/about" onClick={onClose}>About Us</Link>
        <Link className='pl-3 pt-2' href="contact" onClick={onClose}>Contact</Link>
      </nav>
       <div className="flex items-center gap-3 p-3">
                  <a href="https://www.instagram.com/kbsherbal/" target="_blank" rel="noopener noreferrer" className="hover:text-[#577e3a]">
                    <FaInstagram size={22} />
                  </a>
                  <a href="https://www.youtube.com/@kbsherbal" target="_blank" rel="noopener noreferrer" className="hover:text-[#577e3a]">
                    <FaYoutubeSquare size={22} />
                  </a>
                  <a href="https://wa.me/919414090158" target="_blank" rel="noopener noreferrer" className="hover:text-[#577e3a]">
                    <FaWhatsappSquare size={22} />
                  </a>
                </div>
    </motion.aside>
  );
};

export default MobileSidebar;
