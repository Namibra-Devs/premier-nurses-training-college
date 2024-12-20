import React, { useState, useContext } from "react";
import { ProfileContext } from "./ProfileContext";

const ProfileDropdown = () => {
  const { profilePicture } = useContext(ProfileContext);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    console.log("Logout triggered!");
    // Implement logout logic here
  };

  return (
    <div className="relative">
      {/* Profile Picture */}
      <span
        className="current flex items-center justify-center h-8 w-8 rounded-full overflow-hidden cursor-pointer border border-primary"
        onClick={() => setDropdownOpen(!isDropdownOpen)}>
        {profilePicture ? (
          <img
            src={profilePicture}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-4xl flex items-center text-gray-500">
            <ion-icon name="person-circle-outline"></ion-icon>
          </div>
        )}
        <span className="absolute -bottom-2 right-0 bg-blue-50 text-primary text-xs rounded-full p-0.5 flex items-center"><ion-icon name="chevron-down-outline"></ion-icon></span>
      </span>

      {/* Dropdown Menu */}
      <div className="relative">
        <div
          className={`absolute right-0 mt-2 bg-gray-50 border-t border-primary shadow-custom-light rounded w-40 z-10 overflow-hidden transition-transform duration-300 ease-in-out ${
            isDropdownOpen
              ? "scale-90 opacity-100"
              : "scale-75 opacity-0 pointer-events-none"
          }`}
        >
          {/* Blue Arrow */}
          <div
            className="absolute top-[-10px] right-2 w-3.5 h-3.5 bg-primary transform rotate-45"
            style={{ zIndex: -1 }}
          ></div>

          {/* Name Option */}
          <div className="flex items-center px-4 py-2 border-b text-gray-800 font-medium gap-2">
            <ion-icon name="person-circle-outline" class="text-xl"></ion-icon>
            John Doe
          </div>

          {/* Logout Option */}
          <button
            onClick={handleLogout}
            className="flex items-center w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 gap-2"
          >
            <ion-icon name="log-out-outline" class="text-xl"></ion-icon>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileDropdown;
