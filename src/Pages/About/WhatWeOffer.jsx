import React from "react";

const WhatWeOffer = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-start justify-between gap-5 md:gap-10 mb-10 md:mb-0">
        <div className="text-left">
          {/* title */}
          <h3 data-aos="fade-up"
          data-aos-duration="400" className="text-white text-sm text-left uppercase font-medium">
            What We Offer At{" "}
            <span className="text-yellow-400 font-semibold">PNTC</span>
          </h3>
          {/* Subtitle */}
          <h1 data-aos="fade-up"
          data-aos-duration="500" className="text-white text-2xl leading-2 tracking-tight font-semibold max-w-full mt-3 mb-0 md:mb-5">
            What We Offer
          </h1>
        </div>
        <p data-aos="fade-up"
          data-aos-duration="600" className="font-normal text-base text-left md:text-right text-gray-50 max-w-lg">
          We strive to empower our students with a quality education that
          combines rigorous academics with real-world application.
        </p>
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Key Statics 1 */}
        <div data-aos="fade-up"
          data-aos-duration="400" className="relative bg-blue-100 rounded-3xl overflow-hidden p-6 hover:shadow-custom-light transition-transform duration-500 transform hover:-translate-y-2">
          <div className="mt-14">
            <div className="absolute top-0 left-0 p-4 bg-yellow-400 rounded-br-3xl text-lg font-bold text-white">
              <span className="text-4xl flex items-center">
                <ion-icon name="people-circle-outline"></ion-icon>
              </span>
            </div>
            <h3 className="text-base tracking-tight text-gray-800 font-semibold my-1">
              Experienced Faculty
            </h3>
            <p className="text-gray-700 text-sm">
              Learn from industry professionals with a wealth of experience and
              insight.
            </p>
          </div>
        </div>
        {/* Key Statics 2 */}
        <div data-aos="fade-up"
          data-aos-duration="500" className="relative bg-blue-100 rounded-3xl overflow-hidden p-6 hover:shadow-custom-light transition-transform duration-500 transform hover:-translate-y-2">
          <div className="mt-14">
            <div className="absolute top-0 left-0 p-4  bg-yellow-400 rounded-br-3xl text-lg font-bold text-white">
              <span className="text-4xl flex items-center">
                <ion-icon name="medal-outline"></ion-icon>
              </span>
            </div>
            <h3 className="text-base tracking-tight text-gray-800 font-semibold my-1">
              State-of-the-Art Facilities
            </h3>
            <p className="text-gray-700 text-sm">
              Modern labs and simulation rooms offer immersive training.
            </p>
          </div>
        </div>
        {/* Key Statics 3 */}
        <div data-aos="fade-up"
          data-aos-duration="600" className="relative bg-blue-100 rounded-3xl overflow-hidden p-6 hover:shadow-custom-light transition-transform duration-500 transform hover:-translate-y-2">
          <div className="mt-14">
            <div className="absolute top-0 left-0 p-4  bg-yellow-400 rounded-br-3xl text-lg font-bold text-white">
              <span className="text-4xl flex items-center">
                <ion-icon name="diamond-outline"></ion-icon>
              </span>
            </div>
            <h3 className="text-base tracking-tight text-gray-800 font-semibold my-1">
              Comprehensive Curriculum
            </h3>
            <p className="text-gray-700 text-sm">
              Courses cover essential nursing skills, patient care, and
              specialized fields.
            </p>
          </div>
        </div>
        {/* Key Statics 4 */}
        <div data-aos="fade-up"
          data-aos-duration="700" className="relative bg-blue-100 rounded-3xl overflow-hidden p-6 hover:shadow-custom-light transition-transform duration-500 transform hover:-translate-y-2">
          <div className="mt-14">
            <div className="absolute top-0 left-0 p-4  bg-yellow-400 rounded-br-3xl text-lg font-bold text-white">
              <span className="text-4xl flex items-center">
                <ion-icon name="people-outline"></ion-icon>
              </span>
            </div>
            <h3 className="text-base tracking-tight text-gray-800 font-semibold my-1">
              Community Engagement
            </h3>
            <p className="text-gray-700 text-sm">
              We encourage students to participate in health initiatives,
              strengthening their commitment to community service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
