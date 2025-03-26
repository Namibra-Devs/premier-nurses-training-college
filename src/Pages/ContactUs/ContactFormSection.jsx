import React from "react";
import ContactForm from "./ContactForm";
import SocialMediaHandles from "../../components/UtilityComponents/SocialMediaHandles";

const ContactFormSection = () => {
  return (
    <>
      <div className="bg-white px-4 md:px-14 lg:px-24 xl:px-40 pb-14 pt-24 flex flex-col">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-10">
          <div className="text-left w-full md:w-[55%]">
            {/* title */}
            <h3 className="text-primary text-sm text-left uppercase font-medium">
              Get Started{" "}
              <span className="text-yellow-400 font-semibold">PNTC</span>
            </h3>
            {/* Subtitle */}
            <h1 className="text-gray-700 text-4xl md:text-5xl leading-2 tracking-tight font-semibold max-w-full mt-2 mb-2 md:mb-5">
              Get in touch with us. We're here to assist you.
            </h1>
            
          </div>
          <div className="flex flex-col items-start md:items-end mt-3 md:mt-0">
            <p className="font-medium uppercase tracking-tight text-left md:text-right text-gray-600 mb-0 md:mb-2">
              Reach out to us on
            </p>
            {/* Social media icons here */}
            <SocialMediaHandles iconColor="text-primary" gap="space-x-2" />
          </div>
        </div>
        {/* Overview Section Display, together with bg images fade */}
        <ContactForm />
      </div>
    </>
  );
};

export default ContactFormSection;
