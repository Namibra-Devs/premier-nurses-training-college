import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./Mylinks";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  return (
    <>
      {links.map((link) => (
        <div>
          {/* Desktop menus */}
          <div className="text-left md:cursor-pointer group">
            <h1
              className="py-1.5 flex justify-between items-center font-normal md:pr-0 pr-5 group"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              <span className="text-xl md:hidden inline">
                <ion-icon
                  name={`${
                    heading === link.name ? "chevron-up" : "chevron-down"
                  }`}
                ></ion-icon>
              </span>
              <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <ion-icon name="chevron-down"></ion-icon>
              </span>
            </h1>
            {link.submenu && (
              <div>
                <div className="absolute hidden group-hover:md:block hover:md:block">
                  <div className="py-3">
                    <div
                      className="w-4 h-4 left-3 absolute 
                    mt-1 bg-white rotate-45"
                    ></div>
                  </div>
                  <div
                    className={`bg-white p-5 grid grid-cols-1 gap-10 transition-all duration-300 ${
                      link.sublinks ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                      maxHeight: link.sublinks ? "500px" : "0", // adjust maxHeight to suit your needs
                      overflow: "hidden",
                      transition: "max-height 0.3s ease, opacity 0.3s ease",
                    }}
                  >
                    {link.sublinks &&
                      link.sublinks.map((mysublinks) => (
                        <div key={mysublinks.Head}>
                          <h1 className="text-base font-medium text-gray-600 uppercase">
                            {mysublinks.Head}
                          </h1>
                          {mysublinks.sublink.map((slink) => (
                            <li
                              key={slink.name}
                              className="text-sm text-gray-600 my-2.5"
                            >
                              <Link
                                to={slink.link}
                                className="hover:text-primary"
                              >
                                {slink.name}
                              </Link>
                            </li>
                          ))}
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Mobile menus */}
          <div
            className={`
              md:hidden overflow-hidden transition-all duration-700 ease-in-out
              ${
                heading === link.name
                  ? "max-h-screen opacity-100"
                  : "max-h-0 opacity-0"
              }
            `}
          >
            {/* Sublinks */}
            {link.sublinks.map((slinks) => (
              <div key={slinks.Head}>
                <div className="my-4  border-l-2 border-primary">
                  {slinks.sublink.map((slink) => (
                    <li
                      key={slink.name}
                      className="py-1 pl-8 text-gray-600 hover:text-primary duration-300 font-normal"
                    >
                      <Link to={slink.link}>{slink.name}</Link>
                    </li>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
