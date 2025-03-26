import React from "react";

import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; // Social Icons
const SocialMediaHandles = ({iconColor, gap}) => {
  return (
    <>
      <div className="flex space-x-4 mb-4 md:mb-0  mt-6 md:mt-0">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-yellow-400 text-3xl hover:transition-transform duration-700 transform hover:-translate-y-2"
        >
          <FaFacebook/>
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-yellow-400 text-3xl hover:transition-transform duration-700 transform hover:-translate-y-2"
        >
          <FaTwitter/>
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-yellow-400 text-3xl hover:transition-transform duration-700 transform hover:-translate-y-2"
        >
          <FaInstagram/>
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-yellow-400 text-3xl hover:transition-transform duration-700 transform hover:-translate-y-2"
        >
          <FaLinkedin className="text-gray-700" />
        </a>
      </div>
    </>
  );
};

export default SocialMediaHandles;
