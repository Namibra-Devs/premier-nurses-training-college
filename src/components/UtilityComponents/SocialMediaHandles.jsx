import React from "react";

const SocialMediaHandles = ({iconColor, gap}) => {
  return (
    <>
      {/* Social media */}
      <div data-aos="fade-up"
        data-aos-duration="800" className={`flex ${gap} space-x-4 mb-4 md:mb-0 mt-6 md:mt-0`}>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-white ${iconColor} hover:text-yellow-400 text-3xl hover:transition-transform duration-700 transform hover:-translate-y-2`}
        >
          <ion-icon name
          ="logo-facebook"></ion-icon>
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-white ${iconColor} hover:text-yellow-400 text-3xl hover:transition-transform duration-700 transform hover:-translate-y-2`}
        >
          <ion-icon name
          ="logo-twitter"></ion-icon>
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-white ${iconColor} hover:text-yellow-400 text-3xl hover:transition-transform duration-700 transform hover:-translate-y-2`}
        >
          <ion-icon name
          ="logo-instagram"></ion-icon>
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-white ${iconColor} hover:text-yellow-400 text-3xl hover:transition-transform duration-700 transform hover:-translate-y-2`}
        >
          <ion-icon name
          ="logo-linkedin"></ion-icon>
        </a>
      </div>
    </>
  );
};

export default SocialMediaHandles;
