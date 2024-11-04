import React from "react";
import BlogList from "../Media/BlogList";
import NewsList from "../Media/NewsList";

const Announcements = () => {
  return (
    <div className="px-4 md:px-40 py-24">
      {/* Announcement Header */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-10">
        <div className="w-full flex flex-col items-end">
          {/* title */}
          <h3 className="text-primary text-sm uppercase font-medium">
            Announcements
          </h3>
          {/* Subtitle */}
          <h1 className="text-gray-700 text-2xl leading-2 tracking-tight font-semibold max-w-xl mt-3 mb-5">
            All Announcements
          </h1>
        </div>
      </div>
      <BlogList />
      <NewsList />
    </div>
  );
};

export default Announcements;
