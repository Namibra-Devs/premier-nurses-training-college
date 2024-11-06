import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import ButtonPrimary from "../../components/Buttons/ButtonPrimary";
import ButtonOutline from "../../components/Buttons/ButtonOutline";
import "../../index.css";
import MissionStatement from "../Sections/MissionStatement";
import AccreditationAffiliations from "../Sections/AccreditationAffiliations";
import Announcements from "../Sections/Announcements";
import CTAButtonSticky from "../Buttons/CTAButtonSticky";
import CTA from "../UtilityComponents/CTA";
import FAQSection from "../Sections/FAQSection";

const Home = () => {
  // Array of messages to rotate through
  const messages = [
    "Empowering Tomorrow’s Healthcare Leaders.",
    "Not All Heroes Wear Capes; The Real Heroes Wear Scrubs.",
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
    <>
      <header
        className="h-screen bg-Hero bg-cover
      font-[Poppins] md:bg-top bg-center"
      >
        <Navbar />
        <div className="flex flex-col justify-center text-center items-center gap-3 h-3/4">
          <h2
            className={`text-white text-lg md:text-2xl font-light px-4 md:px-52 transition-opacity duration-700 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            {messages[currentMessageIndex]}
          </h2>
          <h1 className="md:text-6xl text-4xl tracking-tight text-white font-semibold py-5 px-4 md:px-64">
            Premier <span className="text-yellow-400">Nurses'</span>{" "}
            Training College - PNTC
          </h1>
          <p className="text-white mb-4 text-sm md:text-[15px] px-4">
            Nursing is a work of heart. Discover eight reason to transform your
            nursing carrier.
          </p>
          <div className="text-xl flex items-center gap-4">
            <a
              href="/"
              className="bg-yellow-500 hover:bg-yellow-400 rounded-3xl md:py-1 border-2 border-transparent duration-500 hover:scale-110"
            >
              <ButtonPrimary />
            </a>
            <a href="/admissions">
              <ButtonOutline label="Admissions" />
            </a>
          </div>
        </div>
      </header>
      <MissionStatement />
      <CTA />
      <AccreditationAffiliations />
      <Announcements />
      <CTA />
      <FAQSection/>
      <CTAButtonSticky />
    </>
  );
};

export default Home;
