import React from "react";
import { Blogs } from "../UtilityComponents/BlogDetails";
import { Link } from "react-router-dom";
import ButtonView from "../Buttons/ButtonView";

const BlogList = () => {
  return (
    <div>
      <div className="text-left">
        {/* title */}
        <h3 className="text-primary text-sm tracking mb-4 text-left uppercase font-medium">
          Our Blogs
        </h3>
        {/* Description */}
        <p className="font-normal text-sm text-gray-500 max-w-lg">
          Sorround yourself with the community and resources help bring your
          vission to life and keep you updated.
        </p>
      </div>

      <div className="blog-list grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
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

        <div className="flex flex-col justify-center items-start md:items-end">
          <h3 className="text-gray-600 text-xl font-semibold leading-tight tracking-tight text-left md:text-right mb-6">
            Sorround yourself with the community and resources.
          </h3>
          <a href="/">
            <ButtonView label="View More" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
