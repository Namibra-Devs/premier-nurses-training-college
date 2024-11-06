// FAQSection.jsx
import React from "react";

import faqData from "../UtilityComponents/FAQList";
import Accordion from "../UtilityComponents/Accordion";
import FrequestAskedQImg from "../../assets/sections/frequestlly-asked-q.jpg";

const FAQSection = () => {
  return (
    <section className="px-4 md:px-40 py-24 -w-2xl mx-auto bg-white">
      <div className="text-left">
        {/* title */}
        <h3 className="text-primary text-sm text-left uppercase font-medium">
          FAQS
        </h3>
        {/* Subtitle */}
        <h1 className="text-gray-700 text-2xl leading-2 tracking-tight font-semibold max-w-xl mt-3 mb-6">
          Frequently Asked Questions
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <img
            src={FrequestAskedQImg}
            alt="Frequently Asked Questions Image"
            className="rounded-3xl w-full"
          />
        <div>
          {faqData.map((faq, index) => (
            <Accordion
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
