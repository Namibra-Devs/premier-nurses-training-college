import React from "react";
import ButtonView from "../../Buttons/ButtonView";
import BlogCard from "./BlogCard";

const BlogList = () => {
  return (
    <div>
      <div className="text-left">
        {/* title */}
        <h3
          data-aos="fade-up"
          className="text-primary text-sm tracking mb-4 text-left uppercase font-medium"
        >
          Our Blogs
        </h3>
        {/* Description */}
        <p
          data-aos-duration="800"
          className="font-normal text-base text-gray-500 max-w-lg"
        >
          Sorround yourself with the community and resources help bring your
          vission to life and keep you updated.
        </p>
      </div>

      <div className="blog-list grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        <BlogCard />
        <div className="flex flex-col justify-center items-start md:items-end">
          <h3
            data-aos="fade-up"
            className="text-gray-600 text-xl font-semibold leading-tight tracking-tight text-left md:text-right mb-6"
          >
            Sorround yourself with the community and resources.
          </h3>
          <a data-aos-duration="800" href="/">
            <ButtonView label="View More" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
