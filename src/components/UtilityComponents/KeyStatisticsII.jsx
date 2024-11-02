import React from "react";

const KeyStatisticsII = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-start gap-10">
        <div className="text-left">
          {/* title */}
          <h3 className="text-primary text-sm text-left uppercase font-medium">
            Brief Highlights
          </h3>
          {/* Subtitle */}
          <h1 className="text-gray-700 text-2xl leading-2 tracking-tight font-semibold max-w-xl mt-3 mb-5">
            Brief Highlights for Premier Nurses' Training College
          </h1>
        </div>
        <p className="font-normal text-sm text-gray-500 max-w-lg">
          At Premier Nurses' Training College, we are dedicated to shaping the
          future of healthcare by educating and inspiring the next generation of
          skilled and empathetic nurses.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {/* Key Statics 1 */}
        <div className="relative bg-gray-50 rounded-3xl overflow-hidden p-6 hover:shadow-custom-light transition-transform duration-500 transform hover:-translate-y-2">
          <div className="mt-14">
            <div className="absolute top-0 left-0 p-4 bg-yellow-400 rounded-br-3xl text-lg font-bold text-white">
              <span className="text-4xl flex items-center">
                <ion-icon name="diamond-outline"></ion-icon>
              </span>
            </div>
            <h3 className="text-base tracking-tight text-gray-600 font-semibold my-1">
              Financial Aid and Scholarships
            </h3>
            <p className="text-gray-500 text-sm">
              We believe that financial constraints should never limit one’s
              passion for healthcare. Our financial aid programs, including
              merit-based scholarships, make education accessible to all.
            </p>
          </div>
        </div>
        {/* Key Statics 1 */}
        <div className="relative bg-gray-50 rounded-3xl overflow-hidden p-6 hover:shadow-custom-light transition-transform duration-500 transform hover:-translate-y-2">
          <div className="mt-14">
            <div className="absolute top-0 left-0 p-4  bg-yellow-400 rounded-br-3xl text-lg font-bold text-white">
              <span className="text-4xl flex items-center">
                <ion-icon name="medal-outline"></ion-icon>
              </span>
            </div>
            <h3 className="text-base tracking-tight text-gray-600 font-semibold my-1">
              Excellence in Nursing Education
            </h3>
            <p className="text-gray-500 text-sm">
              Preparing compassionate, skilled, and dedicated nursing
              professionals who are ready to lead in healthcare. Our rigorous
              academic standards and practical training equip students for
              impactful careers in nursing.
            </p>
          </div>
        </div>
        {/* Key Statics 1 */}
        <div className="relative bg-gray-50 rounded-3xl overflow-hidden p-6 hover:shadow-custom-light transition-transform duration-500 transform hover:-translate-y-2">
          <div className="mt-14">
            <div className="absolute top-0 left-0 p-4  bg-yellow-400 rounded-br-3xl text-lg font-bold text-white">
              <span className="text-4xl flex items-center">
                <ion-icon name="people-circle-outline"></ion-icon>
              </span>
            </div>
            <h3 className="text-base tracking-tight text-gray-600 font-semibold my-1">
              Dedicated and Experienced Faculty
            </h3>
            <p className="text-gray-500 text-sm">
              Our faculty comprises seasoned healthcare professionals and
              educators committed to nurturing each student’s potential and
              guiding them toward excellence in nursing.
            </p>
          </div>
        </div>
        {/* Key Statics 1 */}
        <div className="relative bg-gray-50 rounded-3xl overflow-hidden p-6 hover:shadow-custom-light transition-transform duration-500 transform hover:-translate-y-2">
          <div className="mt-14">
            <div className="absolute top-0 left-0 p-4  bg-yellow-400 rounded-br-3xl text-lg font-bold text-white">
              <span className="text-4xl flex items-center">
                <ion-icon name="people-outline"></ion-icon>
              </span>
            </div>
            <h3 className="text-base tracking-tight text-gray-600 font-semibold my-1">
              Vibrant Student Community
            </h3>
            <p className="text-gray-500 text-sm">
              Join a dynamic community of future healthcare leaders. With
              numerous student clubs, events, and activities, our campus offers
              a supportive and engaging environment to enhance personal and
              professional growth.
            </p>
          </div>
        </div>
        {/* Key Statics 1 */}
        <div className="relative bg-primary rounded-3xl overflow-hidden p-6 transition-transform duration-500 transform hover:-translate-y-2">
          <div className="mt-14">
            <div className="absolute top-0 left-0 p-4 bg-yellow-400 rounded-br-3xl text-lg font-bold text-white">
              <span className="text-4xl flex items-center">
                <ion-icon name="receipt-outline"></ion-icon>
              </span>
            </div>
            <h3 className="text-base tracking-tight text-white font-semibold my-1">
              Accredited and Recognized Programs
            </h3>
            <p className="text-gray-50 text-sm font-medium">
              We are fully accredited by the National Nursing Accreditation
              Board, ensuring our programs meet the highest standards of nursing
              education and healthcare training.
            </p>
          </div>
        </div>
        {/* Key Statics 1 */}
        <div className="relative bg-gray-50 rounded-3xl overflow-hidden p-6 hover:shadow-custom-light transition-transform duration-500 transform hover:-translate-y-2">
          <div className="mt-14">
            <div className="absolute top-0 left-0 p-4  bg-yellow-400 rounded-br-3xl text-lg font-bold text-white">
              <span className="text-4xl flex items-center">
                <ion-icon name="flask-outline"></ion-icon>
              </span>
            </div>
            <h3 className="text-base tracking-tight text-gray-600 font-semibold my-1">
              State-of-the-Art Simulation Labs
            </h3>
            <p className="text-gray-500 text-sm">
              Hands-on learning is at the core of our curriculum. Our advanced
              simulation labs allow students to practice real-world skills in a
              safe and supportive environment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyStatisticsII;
