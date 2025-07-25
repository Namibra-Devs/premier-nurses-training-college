import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import ButtonOutline from "../Buttons/ButtonOutline";
import HeroButtonApply from "../Buttons/HeroButtonApply";
import { HeroSliders } from "../../assets/data/data";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === HeroSliders.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [HeroSliders.length]);


  // Array of messages to rotate through
  const messages = [
    "Empowering Tomorrow’s Healthcare Leaders.",
    "Not All Heroes Wear Capes. The Real Heroes Wear Scrubs.",
  ];

  // State to track the current message index
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade-out effect
      setTimeout(() => {
        // Change message after fade-out
        setCurrentMessageIndex(
          (prevIndex) => (prevIndex + 1) % messages.length
        );
        setFade(true); // Fade in the new message
      }, 700); // Adjust timing to sync with CSS transition
    }, 5000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <header className="relative h-[80vh] md:h-screen overflow-hidden rounded-b-3xl">
      <Navbar />
      {/* Background images with fade transition */}
      {HeroSliders.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          } md:bg-top bg-cover`}
          style={{ backgroundImage: `url(${slide})`}}
        />
      ))}

      <div className="relative flex flex-col justify-center text-center items-center gap-3 h-full">
        <h2
          className={`text-white text-lg md:text-2xl font-light px-4 md:px-52 transition-opacity duration-700 ${
            fade ? "opacity-100 -z-5" : "opacity-0 -z-5"
          }`}
        >
          {messages[currentMessageIndex]}
        </h2>
        <h1 className="md:text-6xl text-4xl tracking-tight text-white font-semibold py-5 px-4 md:px-64">
          Premier <span className="text-yellow-400">Nurses'</span> Training
          College - PNTC
        </h1>
        <p className="text-white mb-4 text-sm md:text-[15px] px-4">
          Nursing is a work of heart. Discover eight reason to transform your
          nursing carrier.
        </p>
        <div className="text-xl flex items-center gap-0 md:gap-4">
          <HeroButtonApply label="Apply Now" link="/registration-page" />
          <ButtonOutline label="Admission List" link="admissions" />
        </div>
      </div>
    </header>
  );
};

export default Hero;
