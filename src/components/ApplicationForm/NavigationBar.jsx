import React, { useState } from "react";
import ProfileDropdown from "./PersonalDetails/ProfileDropdown";

const NavigationBar = ({open, setOpen }) => {
  return (
    <div className="flex items-center justify-between gap-5 md:gap-10 py-3">
        <div className="flex items-center">
          <div
            className="flex items-center text-3xl cursor-pointer mr-3"
            onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "menu" : "menu"}`}></ion-icon>
          </div>
          {/* title */}
          <h3 className="text-gray-800 text-lg text-left capitalize font-medium">
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