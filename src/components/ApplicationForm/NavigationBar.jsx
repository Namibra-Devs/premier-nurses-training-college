import React from "react";
import ProfileDropdown from "./PersonalDetails/ProfileDropdown";

const NavigationBar = ({close, setOpen }) => {
  return (
    <div className="bg-white flex items-center justify-between gap-5 md:gap-10 py-3 ">
        <div className="flex items-center overflow-hidden">
          <div className="flex items-center text-2xl cursor-pointer mr-2 md:mr-3 bg-blue-100 p-1 rounded-full"
            onClick={() => setOpen(!close)}>
            <ion-icon name={`${close ? "menu" : "menu"}`}></ion-icon>
          </div>
          {/* title */}
          <h3 className="text-gray-800 text-sm md:text-lg text-left capitalize font-medium">
            Admission, Application System
            <span className="text-blue-600 font-semibold"> PNTC</span>
          </h3>
        </div>

        {/* Profile picture and Logout */}
        <ProfileDropdown />
      </div>
  )
}

export default NavigationBar