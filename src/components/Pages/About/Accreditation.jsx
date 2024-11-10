import React from "react";

const Accreditation = () => {
  return (
    <div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Key Statics 1 */}
        <div className="bg-gray-100 rounded-3xl overflow-hidden p-4">
          <div className="">
            <div className="text-lg font-bold text-primary">
              <span className="">01</span>
            </div>
            <h3 className="text-base tracking-tight text-gray-600 font-semibold my-1">
              University For Development Studies (UDS)
            </h3>
          </div>
        </div>
        {/* Key Statics 2 */}
        <div className="bg-gray-100 rounded-3xl overflow-hidden p-4">
          <div className="">
            <div className="text-lg font-bold text-primary">
              <span className="">02</span>
            </div>
            <h3 className="text-base tracking-tight text-gray-600 font-semibold my-1">
              Nursing And Midwifery Council
            </h3>
          </div>
        </div>
        {/* Key Statics 3 */}
        <div className="bg-gray-100 rounded-3xl overflow-hidden p-4">
          <div className="">
            <div className="text-lg font-bold text-primary">
              <span className="">03</span>
            </div>
            <h3 className="text-base tracking-tight text-gray-600 font-semibold my-1">
              Ghana Tertiary Education Commission
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accreditation;
