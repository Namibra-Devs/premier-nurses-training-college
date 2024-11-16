import React from "react";

const NewsCard = ({ url, image, title, date, description }) => {
  return (
    <div>
      {/* Wrap the entire content in an anchor tag */}
      <a
        href={url}
        className="rounded-3xl overflow-hidden group hover:border-b transition-transform duration-500 transform hover:-translate-y-2 block"
      >
        <div className="overflow-hidden rounded-3xl">
          <img
            src={image}
            alt={title}
            className="news-image object-cover w-full rounded-3xl group-hover:scale-110 duration-700 ease-in-out"
          />
        </div>

        {/* Contents */}
        <div className="flex flex-col md:flex-row items-start gap-5 mt-5 pb-5">
          <h3 className="news-date font-medium text-sm text-primary w-[30%]">
            {date}
          </h3>
          <div>
            <h2 className="news-title text-gray-600 leading-tight tracking-tight text-xl font-semibold">
              {title}
            </h2>
            <hr className="my-3" />
            <p className="news-description font-normal text-sm text-gray-500 max-w-lg mt-1">
              {description}
            </p>

            {/* Read More Button */}
            <a
              href={url}
              className="text-primary text-xs font-normal flex items-center gap-2 group-hover:gap-4 duration-500 ease mt-5"
            >
              Read More<ion-icon name="chevron-forward-outline"></ion-icon>
            </a>
          </div>
        </div>
      </a>
    </div>
  );
};

export default NewsCard;
