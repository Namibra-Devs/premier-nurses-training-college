// NewsList.jsx
import React from "react";
import { News } from "../UtilityComponents/NewsData";

function NewsList() {
  return (
    <div className="pt-24">
      <div className="text-left">
        {/* title */}
        <h3 className="text-primary text-sm tracking mb-4 text-left uppercase font-medium">
          News
        </h3>
        {/* Description */}
        <p className="font-normal text-sm text-gray-500 max-w-lg">
          Sorround yourself with the community and resources help bring your
          vission to life and keep you updated.
        </p>
      </div>
      <div className="news-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-10">
        {News.map((newsItem, index) => (
          <a
            href={newsItem.url} // Use the URL from each blog item
            key={index}
            className="news-item rounded-3xl overflow-hidden group transition-transform duration-500 transform hover:-translate-y-2"
          >
            <div className="overflow-hidden rounded-3xl">
              <img
                src={newsItem.image}
                alt={newsItem.title}
                className="news-image object-cover w-full inset-0 rounded-3xl group-hover:scale-110 duration-700 ease-in-out"
              />
            </div>

            {/* Contents */}
            <div className="flex flex-col md:flex-row items-start gap-5 mt-5 pb-5">
              {/* Date */}
              <h3 className="news-date font-medium text-sm text-primary w-[30%]">
                {newsItem.date}
              </h3>
              <div>
                {/* Title */}
                <h2 className="news-title text-gray-600 leading-tight tracking-tight text-xl font-semibold">
                  {newsItem.title}
                </h2>
                <hr className="my-3" />
                {/* Description */}
                <p className="news-description font-normal text-sm text-gray-500 max-w-lg mt-1">
                  {newsItem.description}
                </p>

                <a
                  href="/"
                  className="text-primary text-xs font-normal flex items-center gap-2 mt-5"
                >
                  Read More<ion-icon name="chevron-forward-outline"></ion-icon>
                </a>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default NewsList;
