import React from "react";

const Searchform = ({ searchb_open, setSearchbOpen }) => {
  return (
    <div>
      {/* Seach Form*/}
      <div
        className={`bg-white fixed md:w-[600px] h-full top-0 overflow-y-auto bottom-0 px-10
        duration-500 border-l-4 border-primary ${
          searchb_open ? "left-0" : "left-[-600px]"
        }`}
      >
        {/* Close Icon */}
        <div className="float-right mt-6 hidden md:block">
          <div
            onClick={() => setSearchbOpen(false)}
            className=" bg-slate-200 h-8 w-8 rounded-full hover:bg-primary hover:text-white duration-200 text-slate-500 text-xl flex justify-center items-center cursor-pointer"
          >
            <ion-icon name="close"></ion-icon>
          </div>
        </div>
        <div class="flex justify-center items-center h-screen">
          <div class="flex items-center rounded-full bg-gray-100 border-2 border-primary w-full pl-4 overflow-hidden">
            <input
              type="text"
              class="w-full bg-transparent font-[Poppins] outline-none focus:outline-none flex px-4 text-gray-600 text-base outline-0"
              placeholder="Search Here"
            />
            {/*search icon button */}
            <button
              type="submit"
              class="relative py-2 px-4 bg-primary text-white cursor-pointer text-2xl"
            >
              <ion-icon name="search"></ion-icon>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchform;
