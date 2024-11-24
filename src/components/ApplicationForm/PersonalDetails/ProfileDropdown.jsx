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
        className="current flex items-center justify-center h-8 w-8 rounded-full overflow-hidden border border-primary cursor-pointer"
        onClick={() => setDropdownOpen(!isDropdownOpen)}
      >
        {profilePicture ? (
          <img
            src={profilePicture}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        ) : (
          <ion-icon
            name="person-circle-outline"
            className="text-3xl text-gray-500"
          ></ion-icon>
        )}
      </span>

      {/* Dropdown Menu */}
      <div
        className={`absolute right-0 mt-2 bg-white shadow-lg rounded-lg w-40 z-10 overflow-hidden transition-transform duration-300 ease-in-out ${
          isDropdownOpen
            ? "scale-100 opacity-100"
            : "scale-75 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-4 py-2 border-b text-gray-800 font-medium">
          John Doe
        </div>
        <button
          onClick={handleLogout}
          className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileDropdown;
