import React from "react";

const Accreditation = () => {
  return (
    <div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Key Statics 1 */}
        <div data-aos="fade-up"
        data-aos-duration="800" className="bg-gray-100 rounded-3xl overflow-hidden p-4">
          <div className="">
            <div className="text-lg font-bold text-primary">
              <span className="">01</span>
            </div>
            <h3 className="text-base tracking-tight text-gray-600 font-semibold my-1">
              University For Development Studies (UDS)
            </h3>
            <p className="text-gray-500 text-sm">
              Of our student graduate every year
            </p>
          </div>
        </div>
        {/* Key Statics 2 */}
        <div data-aos="fade-up"
        data-aos-duration="800" className="bg-gray-100 rounded-3xl overflow-hidden p-4">
          <div className="">
            <div className="text-lg font-bold text-primary">
              <span className="">02</span>
            </div>
            <h3 className="text-base tracking-tight text-gray-600 font-semibold my-1">
              Nursing And Midwifery Council
            </h3>
            <p className="text-gray-500 text-sm">
              of our graduates secure employment within six months.
            </p>
          </div>
        </div>
        {/* Key Statics 3 */}
        <div  data-aos="fade-up"
        data-aos-duration="800"className="bg-gray-100 rounded-3xl overflow-hidden p-4">
          <div className="">
            <div className="text-lg font-bold text-primary">
              <span className="">03</span>
            </div>
            <h3 className="text-base tracking-tight text-gray-600 font-semibold my-1">
              Ghana Tertiary Education Commission
            </h3>
            <p className="text-gray-500 text-sm">
              15:1, ensuring personalized attention and support for every
              student.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accreditation;
