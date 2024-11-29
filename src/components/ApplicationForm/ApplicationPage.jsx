import React, { useState, useContext } from "react";
import AppSystem from "./AppSystem";
import ProfileDropdown from "./PersonalDetails/ProfileDropdown";

const ApplicationPage = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="bg-white fixed w-full px-2 md:px-10 py-2 flex flex-col border-x-2 border-primary">
      <div className="flex items-center justify-between gap-5 md:gap-10">
        <div className="flex items-center">
          <div
            className="flex items-center text-3xl cursor-pointer mr-3"
            onClick={() => setOpen(!open)}
          >
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
      {/* Application System Display */}
      <AppSystem open={open} setOpen={setOpen} />
    </div>
  );
};

export default ApplicationPage;
