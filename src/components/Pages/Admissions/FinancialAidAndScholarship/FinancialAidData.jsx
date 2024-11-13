import React from "react";
import aidData from "./AidData";

const FinancialAidData = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4">
      {/* Dates */}
      {aidData.map((aid, index) => (
        <div
          key={index}
          className="relative bg-gray-100 rounded-3xl overflow-hidden p-4"
        >
          <div className="">
            <h3 className="text-xl tracking-tight text-gray-600 font-semibold my-1">
              {aid.title}
            </h3>
            <p className="text-gray-500 text-sm my-2">
              {aid.description}
            </p>
            <div className="mt-5">
              {aid.options.map((option, idx) => (
                <div key={idx} className="my-2 flex items-start">
                  <div className="flex items-start">
                    <span className="text-lg text-gray-500 mr-2">
                      <ion-icon name="checkmark-circle-sharp"></ion-icon>
                    </span>
                    <div>
                        <a href={option.url} key={idx} className="bg-blue-200 px-3 py-1 rounded-3xl text-gray-600">
                          {option.name}
                        </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <span className="absolute bottom-0 left-[25%] h-1 w-[50%] bg-primary"></span>
        </div>
      ))}
    </div>
  );
};

export default FinancialAidData;
