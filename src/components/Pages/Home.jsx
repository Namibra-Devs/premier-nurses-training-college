import React from "react";
import "../../index.css";
import MissionStatement from "../Sections/MissionStatement";
import AccreditationAffiliations from "../Sections/AccreditationAffiliations";
import Announcements from "../Sections/Announcements";
import CTAButtonSticky from "../Buttons/CTAButtonSticky";
import CTA from "../UtilityComponents/CTA";
import FAQSection from "../Sections/FAQSection";
import Hero from "../PageHeaders/Hero";

const Home = () => {
  return (
    <>
      <Hero/>
      <MissionStatement />
      <AccreditationAffiliations />
      <Announcements />
      <CTA />
      <FAQSection />
      <CTAButtonSticky />
    </>
  );
};

export default Home;
