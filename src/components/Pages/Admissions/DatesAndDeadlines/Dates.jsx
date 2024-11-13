import React from 'react'
import importantDates from "./importantDates";

const Dates = () => {
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
      {/* Dates */}
      {importantDates.map((date, index) => (
        <div
          key={index}
          className="relative bg-gray-100 rounded-3xl overflow-hidden p-4"
        >
          <div className="mt-14">
            <div className="absolute top-0 left-0 p-4  bg-primary rounded-br-3xl text-lg font-bold text-white">
              <span className="text-2xl"><ion-icon name="calendar-outline"></ion-icon></span>
            </div>
            <h3 className="text-base tracking-tight text-gray-600 font-semibold my-1">
              {date.title}
            </h3>
            <p className="text-gray-700 text-sm font-medium my-2">{date.date}</p>
            <p className="text-gray-500 text-sm">{date.description}</p>
          </div>
          <span className='absolute bottom-0 left-[25%] h-1 w-[50%] bg-primary'></span>
        </div>
      ))}
    </div>
  )
}

export default Dates