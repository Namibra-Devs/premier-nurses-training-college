import React from "react";
import facultyDirectoryData from "./facultyDirectoryData";
import ButtonView from "../../../components/Buttons/ButtonView";

const FDirectories = () => {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Key Statics 1 */}
        {facultyDirectoryData.map((faculty, index) => (
          <div
            key={index}
            className="relative bg-blue-100 group rounded-3xl overflow-hidden"
          >
            <img
              src={faculty.image}
              alt={faculty.name}
              className="w-full object-cover rounded-2xl mx-auto mb-4"
            />
            <span className="absolute inset-0 m-auto text-4xl text-white flex items-center justify-center">
              <ion-icon name="add-outline"></ion-icon>
            </span>
            <div
              className="absolute top-0 left-0 p-4 rounded-3xl bg-transparent backdrop-blur-sm 
            backdrop-brightness-75 opacity-0 group-hover:opacity-100 overflow-hidden w-0 h-0 
            group-hover:w-full group-hover:h-full duration-700 ease-in-out text-white"
            >
              <span className="text-4xl flex items-center">
                <ion-icon name="person-circle-outline"></ion-icon>
              </span>
              {/* Details */}
              <div className="mt-8">
                <h3 className="text-base font-semibold">
                  Name: {faculty.name}
                </h3>
                <p className="text-sm text-gray-50 font-medium">
                  Title: {faculty.title}
                </p>
                <p className="text-sm text-gray-50 font-medium">
                  Qualification: {faculty.qualifications}
                </p>
                <p className="text-sm text-gray-50 font-medium">
                  Speciality {faculty.specialization}
                </p>
                <p className="text-sm text-gray-50 font-medium">
                  Email: {faculty.email}
                </p>
                <p className="text-sm text-gray-50 font-medium">
                  Phone: {faculty.phone}
                </p>
              </div>
            </div>
            <h3 className="text-base text-center font-semibold mb-4">
              {faculty.name}
            </h3>
          </div>
        ))}
      </div>
      <a href="/" className="self-end mt-10">
        <ButtonView label="View More" />
      </a>
    </>
  );
};
export default FDirectories;
