import React, { useState, useEffect, useContext } from "react";
import { AiOutlineUser, AiOutlineUpload, AiOutlineDelete } from "react-icons/ai";
import { FormDataContext } from "../Context/FormDataContext";

const Referee = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [errors, setErrors] = useState({});
  const { refereeData, setRefereeData } = useContext(FormDataContext || "");

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100); // Trigger the animation
  }, []);

  const validate = () => {
    const newErrors = {};

    if (!refereeData.refereeName || !/^[a-zA-Z\s]+$/.test(refereeData.refereeName)) {
      newErrors.refereeName = "Name is required and should contain only alphabets.";
    }

    if (!refereeData.address) {
      newErrors.address = "Address is required.";
    }

    if (!refereeData.contact || !/^\d{10}$/.test(refereeData.contact)) {
      newErrors.contact = "Contact is required and must be a 10-digit number.";
    }

    if (!refereeData.letter) {
      newErrors.letter = "A referee letter (PDF) is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type !== "application/pdf") {
        alert("Only PDF files are allowed!");
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        alert("File size should not exceed 5MB");
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        setRefereeData({ ...refereeData, letter: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteFile = () => {
    setRefereeData({ ...refereeData, letter: null });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (validate()) {
  //     alert("Form submitted successfully!");
  //     // Proceed with submission logic
  //   }
  // };

  return (
    <div
      className={`transform transition-transform duration-500 ${
        isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
      }`}
    >
      <div className="md:col-span-2">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <AiOutlineUser className="text-blue-500" /> Referee Information
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Must be a Doctor, Senior Police/Army Officer, Head of Institution, or Reverend Minister/Clergy.
        </p>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                name="refereeName"
                value={refereeData.refereeName || ""}
                onChange={(e) =>
                  setRefereeData({ ...refereeData, refereeName: e.target.value })
                }
                className="block w-full p-2 border border-gray-300 rounded mb-1"
              />
              {errors.refereeName && <p className="text-red-600 text-sm">{errors.refereeName}</p>}

              <label className="block text-gray-700 font-medium mb-2">
                Address
              </label>
              <input
                type="text"
                placeholder="Enter Address"
                value={refereeData.address || ""}
                onChange={(e) =>
                  setRefereeData({ ...refereeData, address: e.target.value })
                }
                className="block w-full p-2 border border-gray-300 rounded mb-1"
              />
              {errors.address && <p className="text-red-600 text-sm">{errors.address}</p>}
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Contact
              </label>
              <input
                type="text"
                placeholder="Enter Contact"
                value={refereeData.contact || ""}
                onChange={(e) =>
                  setRefereeData({ ...refereeData, contact: e.target.value })
                }
                className="block w-full p-2 border border-gray-300 rounded mb-1"
              />
              {errors.contact && <p className="text-red-600 text-sm">{errors.contact}</p>}

              <label className="block text-gray-700 font-medium mb-2">
                Upload Referee Letter (PDF only)
              </label>
              <label className="flex items-center gap-2 cursor-pointer text-blue-500 hover:underline p-2 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200">
                <AiOutlineUpload className="text-xl" />
                <span>Browse File</span>
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>
              {errors.letter && <p className="text-red-600 text-sm">{errors.letter}</p>}
            </div>
          </div>
          <div className="mt-4">
            {refereeData.letter ? (
              <>
                <h4 className="text-green-600 font-medium">Uploaded Letter:</h4>
                <iframe
                  src={refereeData.letter}
                  title="Referee Letter"
                  className="w-full h-64 border border-gray-300 rounded"
                ></iframe>
              </>
            ) : (
              <p className="text-sm text-gray-600 mt-2">No letter uploaded.</p>
            )}
          </div>
          <div className="flex items-center justify-start mt-4">
            <button
              type="button"
              onClick={handleDeleteFile}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 flex items-center"
            >
              <AiOutlineDelete className="text-lg mr-2" />
              Delete Letter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Referee;
