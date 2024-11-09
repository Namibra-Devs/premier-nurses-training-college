import React from "react";
import faculty01 from "../../../assets/Aboutus/Faculty/faculty01.jpg";

const WhyChooseUs = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-start justify-between gap-5 md:gap-10 mb-10 md:mb-0">
        <div className="text-left">
          {/* title */}
          <h3 className="text-primary text-sm text-left uppercase font-medium">
            Why Choose Us{" "}
            <span className="text-yellow-400 font-semibold">PNTC</span>
          </h3>
          {/* Subtitle */}
          <h1 className="text-gray-700 text-3xl md:text-2xl lg:text-3xl leading-2 tracking-tight font-semibold max-w-full mt-3 mb-0 md:mb-5">
            We believe in the importance of healthcare innovative education and
            training.
          </h1>
        </div>
        <p className="font-normal text-base text-left md:text-right text-gray-600 max-w-lg">
          Our graduates are known for their dedication, skill, and readiness to
          address the complexities of today’s healthcare environment.
        </p>
      </div>
      <div className="flex flex-col items-stretch md:flex-row md:items-start justify-between gap-4">
        <div className="rounded-3xl overflow-hidden md:max-w-[50%]">
          <img src={faculty01} alt="faculty01" />
        </div>
        <div className="grid md:grid-cols-2 gap-4 md:max-w-[50%]">
          {/* Key Statics 1 */}
          <div className="bg-primary rounded-3xl overflow-hidden p-6 hover:shadow-custom-light transition-transform duration-500 transform hover:-translate-y-2">
            <div className="">
              <h3 className="text-base tracking-tight text-white font-semibold my-1">
                Excellence in Skill
              </h3>
              <p className="text-gray-50 text-sm">
                Our graduates are highly skilled and prepared for real-world
                healthcare challenges.
              </p>
            </div>
          </div>
          {/* Key Statics 2 */}
          <div className="bg-blue-100 rounded-3xl overflow-hidden p-6 hover:shadow-custom-light transition-transform duration-500 transform hover:-translate-y-2">
            <div className="">
              <h3 className="text-base tracking-tight text-gray-800 font-semibold my-1">
                Guidance and Support
              </h3>
              <p className="text-gray-700 text-sm">
                We provide a nurturing environment that supports each student's
                journey.
              </p>
            </div>
          </div>
          {/* Key Statics 3 */}
          <div className="bg-blue-100 rounded-3xl overflow-hidden p-6 hover:shadow-custom-light transition-transform duration-500 transform hover:-translate-y-2">
            <div className="">
              <h3 className="text-base tracking-tight text-gray-800 font-semibold my-1">
                High Standards
              </h3>
              <p className="text-gray-700 text-sm">
                Courses cover essential nursing skills, patient care, and
                specialized fields.
              </p>
            </div>
          </div>
          {/* Key Statics 4 */}
          <div className="bg-blue-100 rounded-3xl overflow-hidden p-6 hover:shadow-custom-light transition-transform duration-500 transform hover:-translate-y-2">
            <div className="">
              <h3 className="text-base tracking-tight text-gray-800 font-semibold my-1">
                Career Fulfillment
              </h3>
              <p className="text-gray-700 text-sm">
                We empower students to pursue rewarding careers in healthcare.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
