import React from 'react';
import { FaHome, FaBoxOpen, FaTshirt, FaEnvelope, FaGem, FaSprayCan, FaBlogger, FaFire } from 'react-icons/fa';
import { GiAmpleDress } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className='bg-white shadow-md'>
      <div className='container mx-auto flex justify-center items-center py-4'>
        <nav className='flex space-x-6'>
          <a href="#" className='group flex flex-col items-center text-gray-600'>
            <FaHome className="text-lg group-hover:text-pink-600 transition-colors" />
            <span className="text-xs mt-1 relative">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 transition-all duration-300 group-hover:w-full"></span>
            </span>
          </a>
          <a href="#" className='group flex flex-col items-center text-gray-600'>
            <FaBoxOpen className="text-lg group-hover:text-pink-600 transition-colors" />
            <span className="text-xs mt-1 relative">
              Categories
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 transition-all duration-300 group-hover:w-full"></span>
            </span>
          </a>
          <a href="#" className='group flex flex-col items-center text-gray-600'>
            <FaTshirt className="text-lg group-hover:text-pink-600 transition-colors" />
            <span className="text-xs mt-1 relative">
              Men's
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 transition-all duration-300 group-hover:w-full"></span>
            </span>
          </a>
          <a href="#" className='group flex flex-col items-center text-gray-600'>
            <GiAmpleDress className="text-lg group-hover:text-pink-600 transition-colors" />
            <span className="text-xs mt-1 relative">
              Women's
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 transition-all duration-300 group-hover:w-full"></span>
            </span>
          </a>
          <a href="#" className='group flex flex-col items-center text-gray-600'>
            <FaGem className="text-lg group-hover:text-pink-600 transition-colors" />
            <span className="text-xs mt-1 relative">
              Jewelry
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 transition-all duration-300 group-hover:w-full"></span>
            </span>
          </a>
          <a href="#" className='group flex flex-col items-center text-gray-600'>
            <FaSprayCan className="text-lg group-hover:text-pink-600 transition-colors" />
            <span className="text-xs mt-1 relative">
              Perfume
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 transition-all duration-300 group-hover:w-full"></span>
            </span>
          </a>
          <a href="#" className='group flex flex-col items-center text-gray-600'>
            <FaBlogger className="text-lg group-hover:text-pink-600 transition-colors" />
            <span className="text-xs mt-1 relative">
              Blog
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 transition-all duration-300 group-hover:w-full"></span>
            </span>
          </a>
          <a href="#" className='group flex flex-col items-center text-gray-600'>
            <FaFire className="text-lg group-hover:text-pink-600 transition-colors" />
            <span className="text-xs mt-1 relative">
              Hot Offers
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 transition-all duration-300 group-hover:w-full"></span>
            </span>
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;