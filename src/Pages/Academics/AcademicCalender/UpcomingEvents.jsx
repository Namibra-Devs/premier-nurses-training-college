import React from "react";
import eventsData from "./eventsData";

const UpcomingEvents = () => {
  return (
    <div className="md:max-w-[50%]">
      <div className="grid md:grid-cols-2 gap-4 mt-4 md:mt-0">
        {/* Events*/}
        {eventsData.map((event) => (
          <div
            key={event.id}
            className="bg-blue-100 rounded-3xl overflow-hidden p-6 hover:shadow-custom-light transition-transform duration-500 transform hover:-translate-y-2"
          >
            <div className="">
              <h3 className="text-base tracking-tight text-gray-800 font-semibold my-1">
                {event.title}
              </h3>
              <p className="text-gray-700 text-sm">{event.date}</p>
              <p className="text-gray-700 text-sm">{event.description}</p>
            </div>
          </div>
        ))}
        {/* Academic Calendar Download Button*/}
        <a href="/assets/academic-calendar.pdf"
              download className="bg-blue-100 rounded-3xl p-6 overflow-hidden group hover:shadow-custom-light">
          <div className="flex flex-col items-center text-center gap-4">
            <p className="text-sm">
            Download Academic Calendar
            </p>
            <span className="text-3xl transition-transform duration-500 transform group-hover:translate-y-2 ease-in-out"><ion-icon name="download"></ion-icon></span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default UpcomingEvents;
