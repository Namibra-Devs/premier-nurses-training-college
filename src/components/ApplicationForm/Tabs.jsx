import React from "react";

const Tabs = ({ tabs, currentTab, setCurrentTab }) => {
  return (
    <div className="bg-white h-screen w-[30%] rounded mt-3 pr-4 flex flex-col items-start justify-start gap-2 border-l border-blue-100">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`flex items-center gap-2 py-2 pl-2 text-lg ${
            currentTab === index ? "border-l-2 border-blue-500 text-blue-600" : "text-gray-700"
          }`}
          onClick={() => setCurrentTab(index)}
        >
          <span className="text-xl">{tab.icon}</span>
          <span>{tab.label}</span>
        </button>
      ))}
    </div>
  );
};

export default Tabs;
