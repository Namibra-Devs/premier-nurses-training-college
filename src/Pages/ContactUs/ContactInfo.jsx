import React from "react";
import contactusData from "./contactusData";
import MapSection from "../../components/map/MapSection";

const ContactInfo = () => {
  return (
    <>
      <div className="bg-blue-50 px-4 md:px-14 lg:px-24 xl:px-40 py-24 flex flex-col">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-10">
          <div className="text-left w-full md:w-[35%]">
            {/* Title */}
            <h3 className="text-primary text-sm text-left uppercase font-medium">
              Contact Info{" "}
              <span className="text-yellow-400 font-semibold">PNTC</span>
            </h3>
            {/* Subtitle */}
            <h1 className="text-gray-700 text-4xl leading-2 tracking-tight font-semibold max-w-full mt-2 mb-2 md:mb-5">
              We're always happy to assist you.
            </h1>
          </div>
          {/* Info*/}
          <div>
            <h3 className="text-left capitalize font-medium mb-3">Reach out</h3>
            <div className="flex flex-col items-start gap-2">
              <p className="text-gray-500 font-normal">{contactusData.email}</p>
              {contactusData.phoneNumbers.map((phone, index) => (
                <p key={index} className="text-gray-500 font-normal">
                  {phone}
                </p>
              ))}
            </div>
          </div>
          {/* Location Address */}
          <div>
            <h3 className="text-left capitalize font-medium mb-3">Location</h3>
            <div className="flex flex-col items-start gap-2">
              <p className="text-gray-500 font-normal">
                {contactusData.officeLocation.addressLine1}
              </p>
              <p className="text-gray-500 font-normal">
                {contactusData.officeLocation.addressLine2}
              </p>
              <p className="text-gray-500 font-normal">
                {contactusData.officeLocation.city}
              </p>
              <p className="text-gray-500 font-normal">
                {contactusData.officeLocation.country}
              </p>
            </div>
          </div>
          {/* Working Hourse */}
          <div>
            <h3 className="text-left capitalize font-medium mb-3">
              Working Hours
            </h3>
            <div className="flex flex-col items-start gap-2">
              <p className="text-gray-500 font-normal">
                Weekdays: {contactusData.workingHours.weekdays}
              </p>
              <p className="text-gray-500 font-normal">
                Weekends: {contactusData.workingHours.weekends}
              </p>
            </div>
          </div>
        </div>
      </div>
      <MapSection/>
    </>
  );
};

export default ContactInfo;
