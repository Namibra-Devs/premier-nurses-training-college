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
              <span className="text-sm md:hidden inline">
                <ion-icon
                  name={`${
                    heading === link.name ? "chevron-up" : "chevron-down"
                  }`}
                ></ion-icon>
              </span>
              <span className="text-sm md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <ion-icon name="chevron-down"></ion-icon>
              </span>
            </h1>

            {/* Desktop Submenus */}
            {link.submenu && (
              <div className="">
                <div className="absolute hidden group-hover:md:block ">
                  <div className="py-3">
                    <div
                      className="w-4 h-4 left-3 absolute 
                    mt-1 bg-primary rotate-45"
                    ></div>
                  </div>
                  <div
                    className={`bg-gradient-to-b from-primary to to-transparent backdrop-blur-sm p-5 grid grid-cols-1 transform transition-all duration-500 ${
                      link.sublinks
                        ? "opacity-100 translate-y-0 o"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
                  >
                    {link.sublinks &&
                      link.sublinks.map((mysublinks) => (
                        <div key={mysublinks.Head}>
                          <h1 className="text-base font-medium text-white uppercase">
                            {mysublinks.Head}
                          </h1>
                          {mysublinks.sublink.map((slink) => (
                            <li
                              key={slink.name}
                              className="text-sm text-white my-2.5"
                            >
                              <Link
                                to={slink.link}
                                className="hover:text-yellow-400 duration-500"
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
