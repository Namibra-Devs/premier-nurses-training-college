import React from "react";
import { MdClose } from "react-icons/md";
import { RiSearch2Line} from "react-icons/ri";

const Searchform = ({ searchb_open, setSearchbOpen }) => {
  return (
    <>
      {/* Search Form */}
      <div
        className={`z-50 fixed inset-0 h-full top-0 overflow-y-auto bottom-0 px-10
          transform duration-500 ease border-l-4 border-primary 
          ${searchb_open ? "translate-y-0" : "-translate-y-full"} backdrop-blur-md`}
      >
        {/* Close Icon */}
        <div className="relative">
          <div
            onClick={() => setSearchbOpen(false)}
            className="absolute -right-6 top-3 bg-slate-200 h-8 w-8 rounded-full hover:bg-primary hover:text-white duration-200 text-slate-500 text-xl flex justify-center items-center cursor-pointer"
          >
            <MdClose/>
          </div>
        </div>
        <div className="flex justify-center items-center h-screen">
          <div className="flex items-center rounded-full bg-slate-950/20 border-2 border-primary pl-4 overflow-hidden">
            <input
              type="text"
              className="w-full bg-transparent font-[Poppins] outline-none focus:outline-none flex py-3 px-4 text-white"
              placeholder="Search anything here..."
            />
            {/* Search icon button */}
            <button
              type="submit"
              className="relative py-4 px-4 bg-primary text-white cursor-pointer text-2xl"
            >
              <RiSearch2Line />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Searchform;
