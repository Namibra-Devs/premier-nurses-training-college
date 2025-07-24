import React, { useState, useEffect } from "react";
import { IoArrowUpCircle } from "react-icons/io5";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when the page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-6 right-6">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-gradient-to-r from-teal to bg-primary text-white p-2 rounded-full shadow-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-white transition"
        >
          <IoArrowUpCircle size={20} />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
