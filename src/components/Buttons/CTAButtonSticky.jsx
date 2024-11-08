// CTAButton.jsx
import React from "react";
import HeroButtonApply from "./HeroButtonApply";

const CTAButtonSticky = () => {
  return (
    <div className="fixed bottom-20 right-2 z-20 text-center">
      <HeroButtonApply label="Apply Now" />
      <div className="text-xs mt-3  text-center animate-pulse">
        <p className="text-primary font-medium">Limited spots available!</p>
        <p className="text-white font-medium -mt-1.5">
          Limited spots available!
        </p>
      </div>
    </div>
  );
};

export default CTAButtonSticky;
