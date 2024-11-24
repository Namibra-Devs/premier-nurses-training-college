import React, { useState, useContext } from "react";
import { ProfileContext } from "./ProfileContext";

const ProfilePictureUpload = () => {
  const [preview, setPreview] = useState("");
  const { setProfilePicture } = useContext(ProfileContext);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file)); // Create a URL for the image
      const reader = new FileReader();
      reader.onloadend = () => setProfilePicture(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="relative">
      <input
        type="file"
        id="profile"
        accept="image/*"
        className="hidden"
        onChange={handleFileUpload} // Handle file selection
      />
      <label
        htmlFor="profile"
        className="flex items-center justify-center w-full py-1 pl-1 pr-3 bg-gray-100 border border-gray-300 rounded-3xl cursor-pointer hover:bg-gray-200"
      >
        <span className="current flex items-center justify-center h-6 w-6 rounded-full overflow-hidden border border-primary">
          {preview ? (
            <img
              src={preview}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          ) : (
            <ion-icon
              name="person-circle-outline"
              class="text-2xl text-gray-500"
            ></ion-icon>
          )}
        </span>
        <span className="text-gray-600 text-xl mx-1 flex items-center">
          <ion-icon name="cloud-upload-outline"></ion-icon>
        </span>
        <span className="text-gray-600 text-sm">Upload Profile Picture</span>
      </label>
    </div>
  );
};

export default ProfilePictureUpload;
