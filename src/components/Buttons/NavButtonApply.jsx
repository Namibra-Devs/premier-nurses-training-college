import React from "react";
import { externalLinks } from "../Navbar/Mylinks";

const NavButtonApply = () => {
  return (
    <a 
      href={externalLinks.register} 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <button
        className="bg-primary md:bg-yellow-500 hover:bg-yellow-400 rounded-3xl 
      duration-500 ease text-white px-6 py-2 text-sm uppercase font-medium hover:scale-110"
      >
        Apply Now
      </button>
    </a>
  );
};

export default NavButtonApply;
