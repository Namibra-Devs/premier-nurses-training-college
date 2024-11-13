import React from 'react'
import requirementsData from "./requirementsData";
import Accordion from './Accordion';

const RequirementsAndAnswers = () => {
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-4">
        {requirementsData.map((faq, index) => (
            <Accordion
              key={index}
              requirement={faq.requirement}
              answer={faq.answer}
            />
          ))}
    </div>
  )
}

export default RequirementsAndAnswers;