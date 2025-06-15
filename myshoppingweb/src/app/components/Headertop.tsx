import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Headertop = () => {
  return (
    <div className="border-b border-gray-200 py-4 px-4">
      <div className="flex items-center">
        {/* Social media icons - now on the left */}
        <div className="flex gap-3 mr-4">
          <a href="#" className="text-gray-600 hover:text-blue-500">
            <FaFacebook size={18} />
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-400">
            <FaTwitter size={18} />
          </a>
          <a href="#" className="text-gray-600 hover:text-pink-500">
            <FaInstagram size={18} />
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600">
            <FaLinkedin size={18} />
          </a>
        </div>

        {/* FREE SHIPPING (centered) */}
        <div className="text-gray-600 text-sm flex-1 text-center">
          <b>FREE SHIPPING</b> THIS WEEK ORDER OVER - $55
        </div>

        {/* Currency and language selectors - still on the right */}
        <div className="flex gap-4 ml-auto">
          <select 
            className="text-gray-600 text-[12px] w-[70px]" 
            name="currency"
            id="currency"
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="LKR">LKR</option>
          </select>
          
          <select 
            className="text-gray-600 text-[12px] w-[100px]"
            name="language"
            id="language"
          >
            <option value="ENGLISH">ENGLISH</option>
            <option value="FRENCH">FRENCH</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Headertop;