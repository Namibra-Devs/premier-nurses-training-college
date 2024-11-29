import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import NavLinks from "./NavLinks";
import Searchform from "../Searchform/Searchform";
import NavButtonApply from "../Buttons/NavButtonApply";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [tn_open, setTnOpen] = useState(false);
  const [searchb_open, setSearchbOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Change background after scrolling 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/*Desktop Info Nav ----------------------------------------------------- */}
      <div className="top-nav z-50 backdrop-brightness-75 text-center md:px-36 xl:px-40 py-2">
        {/* Info nav menu toggle */}
        <div
          className="text-white text-sm flex items-center justify-center md:hidden cursor-pointer"
          onClick={() => setTnOpen(!tn_open)}
        >
          <ion-icon name={`${tn_open ? "list" : "apps"}`}></ion-icon>{" "}
          <span className="uppercase text-sm font-semibold">Menu</span>
        </div>
        <div className="hidden md:flex justify-between items-center font-medium ">
          <ul className="flex items-center justify-between text-sm gap-4 list-none text-white font-medium">
            <li className="flex items-center gap-1">
              <ion-icon name="mail"></ion-icon>
              <a href="#" className="text-[13px]">
                info@pntc.edu.gh
              </a>
            </li>
            <li className="flex items-center gap-1">
              <ion-icon name="location"></ion-icon>
              <a href="#" className="text-[13px]">
                Adum Kumasi
              </a>
            </li>
            <li className="flex items-center gap-1">
              <ion-icon name="call"></ion-icon>
              <a href="#" className="text-[13px]">
                +233264256825, +233243519083
              </a>
            </li>
            <li className="flex items-center gap-1">
              <ion-icon name="time"></ion-icon>
              <p className="text-[13px]">Mon - Fri: 9:00am - 5:00pm</p>
            </li>
          </ul>
          <ul className="text-white flex items-center gap-3">
            <a
              href="#"
              className="hover:text-yellow-400 hover:scale-110 duration-500 ease"
            >
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
            <a
              href="#"
              className="hover:text-yellow-400 hover:scale-110 duration-500 ease"
            >
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
            <a
              href="#"
              className="hover:text-yellow-400 hover:scale-110 duration-500 ease"
            >
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
            <a
              href="#"
              className="hover:text-yellow-400 hover:scale-110 duration-500 ease"
            >
              <ion-icon name="logo-whatsapp"></ion-icon>
            </a>
            <a
              href="#"
              className="hover:text-yellow-400 hover:scale-110 duration-500 ease"
            >
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </ul>
        </div>
      </div>
      {/* End Desktop Info Nav ----------------------------------------------------- */}

      {/*Mobile Info Nav ----------------------------------------------------- */}
      <div
        className={`z-50
        md:hidden bg-slate-50 fixed w-full top-0 bottom-0 pb-10 pt-4 px-4 text-sm
        duration-500 text-center ${tn_open ? "left-0" : "left-[-100%]"}
        `}
      >
        <div className="flex justify-end">
          <div
            className="bg-slate-200 h-8 w-8 rounded-full hover:bg-primary hover:text-white duration-200 text-slate-500 text-xl flex justify-center items-center md:hidden cursor-pointer"
            onClick={() => setTnOpen(!tn_open)}
          >
            <ion-icon name={`${tn_open ? "close" : "close"}`}></ion-icon>
          </div>
        </div>

        {/* Apply Button */}
        <NavButtonApply />

        <div className="flex flex-col items-start gap-4 font-medium md:px-20 px-4 p-2 mt-10">
          <ul
            className="bg-white w-full p-4 rounded-md text-slate-600 flex flex-col items-start 
          justify-between gap-4 text-sm list-none font-normal"
          >
            <li className="flex items-center gap-1 mb-3 md:mb-0 w-full group hover:text-primary duration-500">
              <ion-icon name="mail"></ion-icon>
              <a href="#" className="ml-3 md:ml-0">
                info@pntc.edu.gh
              </a>
            </li>
            <li className="flex items-center gap-1 mb-3 md:mb-0 w-full group hover:text-primary duration-500">
              <ion-icon name="location"></ion-icon>
              <a href="#" className="ml-3 md:ml-0">
                Adum Kumasi{" "}
              </a>
            </li>
            <li className="flex items-center gap-1 mb-3 md:mb-0 w-full group hover:text-primary duration-500">
              <ion-icon name="call"></ion-icon>
              <a href="#" className="ml-3 md:ml-0">
                +233264256825, +233243519083
              </a>
            </li>
            <li className="flex items-center gap-1 mb-3 md:mb-0 w-full">
              <ion-icon name="time"></ion-icon>
              <p className="text-[13px] ml-3 md:ml-0">
                Mon - Fri: 9:00am - 5:00pm
              </p>
            </li>
          </ul>
          <ul className="bg-white w-full p-4 rounded-md text-slate-600 text-md flex items-center gap-3">
            <a
              href="#"
              className="hover:text-primary duration-500 text-3xl mr-5 md:mr-0"
            >
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
            <a
              href="#"
              className="hover:text-primary duration-500 text-3xl mr-5 md:mr-0"
            >
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
            <a
              href="#"
              className="hover:text-primary duration-500 text-3xl mr-5 md:mr-0"
            >
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
            <a
              href="#"
              className="hover:text-primary duration-500 text-3xl mr-5 md:mr-0"
            >
              <ion-icon name="logo-whatsapp"></ion-icon>
            </a>
            <a
              href="#"
              className="hover:text-primary duration-500 text-3xl mr-5 md:mr-0"
            >
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </ul>
        </div>
      </div>
      {/* End Info Nav ----------------------------------------------------- */}

      {/* Main Nav ----------------------------------------------------- */}
      <nav
        className={`lg:px-20 py-3 fixed left-0 w-full transition-all duration-700 ${
          isScrolled
            ? "top-0 z-50 py-5 bg-white md:bg-transparent md:backdrop-blur-sm md:backdrop-brightness-75 md:shadow-custom-light "
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center font-medium justify-around">
          {/* ----------------------------------------------------- */}
          <div className="z-40 px-5 md:px-0 md:w-auto w-full flex justify-between">
            <Link to="/">
              <img src={Logo} alt="logo" className="md:cursor-pointer h-12" />
            </Link>

            <div className={`flex items-center gap-3 flex-row-reverse ${isScrolled ? "text-gray-600" : "text-white"} `}>
              {/* Menu ----------------------------------------------------- */}
              <div
                className="text-3xl cursor-pointer md:hidden ml-2 md:ml-0"
                onClick={() => setOpen(!open)}>
                <ion-icon name={`${open ? "menu" : "menu"}`}></ion-icon>
              </div>

              {/* Mobile version of SearchIcon (visible on mobile, hidden on desktop) */}
              <div
                className="block md:hidden cursor-pointer text-2xl"
                onClick={() => setSearchbOpen(!searchb_open)}>
                <ion-icon name={`${searchb_open ? "search" : "search"}`}></ion-icon>
              </div>
            </div>
          </div>
          {/* ----------------------------------------------------- */}

          {/* Menu menus or links display here ----------------------------------------------------- */}
          <ul
            className={`hidden md:flex capitalize text-sm ${
              isScrolled ? "text-gray-600 md:text-white" : "text-white"
            } font-normal items-center gap-4`}
          >
            <NavLinks />
          </ul>
          {/* ----------------------------------------------------- */}

          {/* ----------------------------------------------------- */}
          <div className="flex items-center gap-4">
            {/* Apply button */}
            <div className="md:block hidden">
              <NavButtonApply />
            </div>
            {/* Desktop version of SearchIcon (hidden on mobile, visible on desktop) */}
            <div
              className={`hidden md:block ${
                isScrolled ? "md:text-white" : "text-white"
              } cursor-pointer text-2xl `}
              onClick={() => setSearchbOpen(true)}
            >
              <ion-icon name="search"></ion-icon>
            </div>
          </div>
          {/* ----------------------------------------------------- */}

          {/* Mobile nav  ----------------------------------------------------- */}
          <div
            className={`z-50
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
          >
            {/* Close Icon */}
            <div className="relative">
              <div
                onClick={() => setOpen(false)}
                className="absolute right-4 top-3 bg-slate-200 h-8 w-8 rounded-full hover:bg-primary hover:text-white duration-200 text-slate-500 text-xl flex justify-center items-center cursor-pointer"
              >
                <ion-icon name="close"></ion-icon>
              </div>
            </div>
            <div className="py-24 pl-4">
              <ul className="my-10">
                <NavLinks />
              </ul>
              <div className="py-5 text-center">
                {/* Apply Button */}
                <NavButtonApply />
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/*End Main Nav ----------------------------------------------------- */}

      {/* Overlay ----------------------------------------------------- */}
      {searchb_open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-50"
          onClick={() => setSearchbOpen(false)}
        ></div>
      )}
      {/* ----------------------------------------------------- */}

      {/* Search Component ----------------------------------------------------- */}
      <Searchform searchb_open={searchb_open} setSearchbOpen={setSearchbOpen} />
      {/*End Search Component ----------------------------------------------------- */}
    </>
  );
};

export default Navbar;
