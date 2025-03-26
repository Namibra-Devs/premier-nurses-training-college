import React from "react";
import ContactInfo from "./ContactInfo";
import ContactFormSection from "./ContactFormSection";
import ContactUsHeader from "../../components/PageHeaders/ContactUsHeader";

const ContactUs = () => {
  return (
    <>
      {/* Contactus page header */}
      <ContactUsHeader/>
      <ContactFormSection/>
      <ContactInfo/>
    </>
  );
};

export default ContactUs;
