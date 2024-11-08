import React, { useState, useRef } from "react";

const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null); // To calculate content height

  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div className="flex flex-col gap-5">
      <button
        onClick={toggleAccordion}
        className="flex justify-between w-full p-4 text-left text-sm font-semibold
         text-gray-800 hover:text-primary duration-500 bg-slate-100 md:bg-slate-50 rounded-2xl"
      >
        {/* Question */}
        {question}
        <span>
          <ion-icon
            name={`${isOpen ? "remove-outline" : "add-outline"}`}
          ></ion-icon>
        </span>
      </button>
      {/* Asnwer Wrapper div with transition */}
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-500"
        style={{
          maxHeight: isOpen ? contentRef.current.scrollHeight : 0,
        }}
      >
        <div className="px-4 pb-4 text-gray-600">
          <p className="text-sm">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
