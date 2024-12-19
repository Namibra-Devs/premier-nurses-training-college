import React from "react";

const Sidebar = ({ tabs, currentTab, setCurrentTab, open }) => {
  return (
    <div
      className={`bg-white h-full overflow-hidden pr-2 flex flex-col items-start justify-start transition-all duration-700 ease-in-out ${
        open ? "w-[40px] " : "w-[700px] md:w-[350px]"
      }`}>
      <div className="flex flex-col items-start justify-start gap-2 w-full">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`flex items-center w-full text-left gap-2 px-0.5 py-2 text-sm leading-[10px] ${
              currentTab === index
                ? " bg-primary shadow-custom-light text-white rounded"
                : "text-gray-700"
            } `}
            onClick={() => setCurrentTab(index)}>
            <span className="text-2xl">{tab.icon}</span>
            <span className={`${open ? "opacity-0" : "opacity-100"} transition-opacity duration-200`}>{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
