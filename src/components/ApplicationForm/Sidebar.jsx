import React from "react";

const Sidebar = ({ tabs, currentTab, setCurrentTab, open }) => {
  return (
    <div
      className={`bg-white h-full my-auto overflow-hidden pr-2 md:pr-4 flex flex-col items-start justify-start gap-2 transition-all duration-700 ease-in-out ${
        open ? "w-[350px]" : "w-[40px]"
      }`}>
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`flex items-center w-full text-left gap-2 py-2 text-sm leading-[10px] ${
            currentTab === index
              ? " bg-primary shadow-custom-light text-white rounded"
              : "text-gray-700"
          } `}
          onClick={() => setCurrentTab(index)}>
          <span className="text-2xl">{tab.icon}</span>
          <span className={`${open ? "opacity-100" : "opacity-0"} transition-opacity duration-1000`}>
            {tab.label}
          </span>
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
