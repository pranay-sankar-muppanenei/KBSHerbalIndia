import { motion } from 'framer-motion';

const ShopAllControlBar = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <motion.div
      className="flex justify-start md:justify-center space-x-4 mb-6 flex-nowrap border border-2 border-[#5b7e42] w-full overflow-x-auto scrollbar-thin scrollbar-thumb-[#5b7e42] scrollbar-track-gray-200"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => setActiveTab(tab.value)}
          className={`text-sm md:text-md bg-transparent text-[#87a373] outline-none focus:outline-none px-4 py-2 rounded-lg transition-colors duration-300 ${
            activeTab === tab.value ? 'text-[#5b7e42] font-bold' : ''
          }`}
        >
          {tab.name}
        </button>
      ))}
    </motion.div>
  );
};

export default ShopAllControlBar;
