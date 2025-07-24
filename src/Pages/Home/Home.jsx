import React from "react";
import "../../index.css";
import MissionStatement from "./Sections/MissionStatement";
import AccreditationAffiliations from "./Sections/AccreditationAffiliations";
import Announcements from "./Sections/Announcements";
import CTA from "../../components/UtilityComponents/CTA";
import FAQSection from "./Sections/FAQSection";
import Hero from "../../components/PageHeaders/Hero";
import ScrollToTop from "../../components/UtilityComponents/ScrollToTop";

const Home = () => {
  return (
    <>
      <Hero/>
      <MissionStatement />
      <AccreditationAffiliations />
      <Announcements />
      <CTA />
      <FAQSection />
      <ScrollToTop />
    </>
  );
};

export default Home;
