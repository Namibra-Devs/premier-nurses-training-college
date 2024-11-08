import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import NavLinks from "./NavLinks";
import Searchform from "../Searchform/Searchform";
import ButtonNav from "../Buttons/ButtonNav";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [tn_open, setTnOpen] = useState(false);
  const [searchb_open, setSearchbOpen] = useState(false);
  return (
    <>
      {/*Desktop Top Nav */}
      <div className="top-nav z-50 backdrop-brightness-75 text-center py-0.5 md:py-0">
        <div
          className="text-white text-sm flex items-center justify-center md:hidden cursor-pointer"
          onClick={() => setTnOpen(!tn_open)}
        >
          <ion-icon name={`${tn_open ? "list" : "apps"}`}></ion-icon>{" "}
          <span className="uppercase text-sm font-semibold">Menu</span>
        </div>
        <div className="hidden md:flex justify-between items-center font-medium md:px-20 p-2">
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
                newcollege.edu.gh
              </a>
            </li>
            <li className="flex items-center gap-1">
              <ion-icon name="call"></ion-icon>
              <a href="#" className="text-[13px]">
                +23325678990
              </a>
            </li>
            <li className="flex items-center gap-1">
              <ion-icon name="time"></ion-icon>
              <a href="#" className="text-[13px]">
                Mon - Fri: 9:00am - 5:00pm
              </a>
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
      {/*Mobile Top Nav */}
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

        <ButtonNav />

        <div className="flex flex-col items-start gap-4 font-medium md:px-20 px-4 p-2 mt-10">
          <ul className="bg-white w-full p-4 rounded-md text-slate-600 flex flex-col items-start 
          justify-between gap-4 text-sm list-none font-normal">
            <li className="flex items-center gap-1 mb-3 md:mb-0 w-full group hover:text-primary duration-500">
              <ion-icon name="mail"></ion-icon>
              <a href="#" className="ml-3 md:ml-0">info@pntc.edu.gh</a>
            </li>
            <li className="flex items-center gap-1 mb-3 md:mb-0 w-full group hover:text-primary duration-500">
              <ion-icon name="location"></ion-icon>
              <a href="#" className="ml-3 md:ml-0">newcollege.edu.gh</a>
            </li>
            <li className="flex items-center gap-1 mb-3 md:mb-0 w-full group hover:text-primary duration-500">
              <ion-icon name="call"></ion-icon>
              <a href="#" className="ml-3 md:ml-0">+23325678990</a>
            </li>
            <li className="flex items-center gap-1 mb-3 md:mb-0 w-full">
              <ion-icon name="time"></ion-icon>
              <p className="text-[13px] ml-3 md:ml-0">
                Mon - Fri: 9:00am - 5:00pm
              </p>
            </li>
          </ul>
          <ul className="bg-white w-full p-4 rounded-md text-lg text-slate-600 text-md flex items-center gap-3">
            <a href="#" className="hover:text-primary duration-500 text-lg mr-5 md:mr-0">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
            <a href="#" className="hover:text-primary duration-500 text-lg mr-5 md:mr-0">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
            <a href="#" className="hover:text-primary duration-500 text-lg mr-5 md:mr-0">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
            <a href="#" className="hover:text-primary duration-500 text-lg mr-5 md:mr-0">
              <ion-icon name="logo-whatsapp"></ion-icon>
            </a>
            <a href="#" className="hover:text-primary duration-500 text-lg mr-5 md:mr-0">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </ul>
        </div>
      </div>
      {/* Main Nav */}
      <nav className="bg-transparent">
        <div className="flex items-center font-medium justify-around lg:p-2 py-0">
          <div className="z-40 p-5 md:w-auto w-full flex justify-between">
            <img src={Logo} alt="logo" className="md:cursor-pointer h-12" />
            <div className="flex items-center gap-3 flex-row-reverse">
              <div
                className={`text-3xl cursor-pointer md:hidden ml-2 md:ml-0 ${
                  open ? "text-slate-400" : "text-white"
                }`}
                onClick={() => setOpen(!open)}
              >
                <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
              </div>
              {/* Mobile version of SearchIcon (visible on mobile, hidden on desktop) */}
              <div
                className={`block md:hidden text-white cursor-pointer text-2xl relative z-50 ${
                  searchb_open ? "text-slate-400" : "text-white"
                }`}
                onClick={() => setSearchbOpen(!searchb_open)}
              >
                <ion-icon
                  name={`${searchb_open ? "close" : "search"}`}
                ></ion-icon>
              </div>
            </div>
          </div>
          <ul className="md:flex hidden capitalize text-sm text-white font-normal items-center gap-4 font-[Poppins]">
            <li>
              <Link to="/" className="px-3 inline-block">
                Home
              </Link>
            </li>
            <NavLinks />
            <li>
              <Link to="/" className="px-3 inline-block">
                Contact
              </Link>
            </li>
          </ul>
          <div className="flex items-center gap-4">
            {/* Apply button */}
            <div className="md:block hidden">
              <ButtonNav />
            </div>
            {/* Desktop version of SearchIcon (hidden on mobile, visible on desktop) */}
            <div
              className="hidden md:block text-white cursor-pointer text-2xl "
              onClick={() => setSearchbOpen(true)}
            >
              <ion-icon name="search"></ion-icon>
            </div>
          </div>

          {/* Mobile nav */}
          <div
            className={`z-30
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4 text-sm
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
          >
            <ul className="my-10">
              <li>
                <Link
                  to="/"
                  className="pb-2 inline-block font-normal text-gray-900"
                >
                  Home
                </Link>
              </li>
              <NavLinks />
              <li>
                <Link
                  to="/"
                  className="pt-2 inline-block font-normal text-gray-900"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
            <div className="py-5 text-center">
              <ButtonNav />
            </div>
          </div>
        </div>
      </nav>
      {/* Overlay */}
      {searchb_open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30"
          onClick={() => setSearchbOpen(false)}
        ></div>
      )}
      {/* Search Component */}
      <Searchform searchb_open={searchb_open} setSearchbOpen={setSearchbOpen} />
    </>
  );
};

export default Navbar;
