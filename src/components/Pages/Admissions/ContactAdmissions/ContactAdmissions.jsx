import React from "react";
import Contact from "./Contact";

const ContactAdmissions = () => {
  return (
    <div className="bg-gray-50 px-4 md:px-14 lg:px-24 xl:px-40 py-24 flex flex-col">
      <div className="flex flex-col md:flex-row items-start justify-between gap-5 md:gap-10 mb-10 md:mb-2">
        <div className="text-left flex flex-row-reverse items-start">
          {/* Subtitle */}
          <h1 className="text-gray-700 text-2xl leading-2 tracking-tight font-semibold max-w-full mt-2 mb-2 md:mb-5">
            Contact Admissions Office
          </h1>
        </div>
        <p className="font-normal text-base text-left md:text-right text-gray-600 max-w-lg">
          Have questions about the application process or need support? Our
          admissions team is here to help.
        </p>
      </div>
      {/* Application Process Display */}
      <Contact />
    </div>
  );
};

export default ContactAdmissions;
