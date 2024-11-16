import React from "react";
import { Blogs } from "./BlogData";

const BlogCard = () => {
  return (
    <>
      {Blogs.map((blog, index) => (
        // Blog item
        <a
          href={blog.url} // Use the URL from each blog item
          key={index}
          className="blog-item relative group rounded-3xl overflow-hidden transition-transform duration-500 transform hover:-translate-y-2"
        >
          <img
            src={blog.image}
            alt={blog.title}
            className="blog-image object-cover w-full h-full"
          />

          {/* Content overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent p-6 flex flex-col justify-end">
            <div className="flex items-center justify-between gap-5">
              <h3 className="blog-title text-white leading-tight tracking-tight text-base font-semibold">
                {blog.title}
              </h3>
              <span className="border group-hover:backdrop-brightness-75 group-hover:translate-x-2 text-white duration-500 text-xl flex items-center rounded-full p-2">
                <ion-icon name="arrow-redo-outline"></ion-icon>
              </span>
            </div>
            <p className="blog-date font-normal text-sm text-yellow-200 mt-1">
              {blog.date}
            </p>
            {/* <p className="blog-description font-normal text-sm text-gray-200 max-w-lg mt-1">
                {blog.description}
              </p> */}
          </div>
        </a>
      ))}
    </>
  );
};

export default BlogCard;
