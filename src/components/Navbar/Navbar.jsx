import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LogoWhite from "../../assets/logo-white.png";
import LogoBlack from "../../assets/logo-black.png";
import NavLinks from "./NavLinks";
import Searchform from "../Searchform/Searchform";
import NavButtonApply from "../Buttons/NavButtonApply";
import { MdMenu, MdClose } from "react-icons/md";
import { RiSearch2Line} from "react-icons/ri";

import { AiOutlineMail } from "react-icons/ai"; // Mail
import { FiPhone } from "react-icons/fi"; // Phone
import { BsClock } from "react-icons/bs"; // Time
import { GoLocation } from "react-icons/go"; // Location
import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa"; // Social Icons
import { RiTwitterXFill, RiInstagramLine } from "react-icons/ri"; //Social icons

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
    <main className="relative z-50">
      
      {/*Desktop Info Nav ----------------------------------------------------- */}
      <div className="top-nav z-50 backdrop-brightness-75 text-center md:px-40 py-2">
        {/* Info nav menu toggle */}
        <div
          className="text-white text-sm flex items-center justify-center md:hidden cursor-pointer"
          onClick={() => setTnOpen(!tn_open)}
        >
          <ion-icon name={`${tn_open ? "list" : "apps"}`}></ion-icon>{" "}
          <span className="uppercase text-sm font-semibold">Menu</span>
        </div>
        <div className="hidden md:flex justify-between items-center font-medium ">
          <ul className="flex items-center justify-between text-sm gap-4 list-none text-white/80 font-medium">
            <li className="flex items-center gap-1">
              <AiOutlineMail />
              <a href="#" className="text-[11px]">
                info@pntc.edu.gh
              </a>
            </li>
            <li className="flex items-center gap-1">
              <GoLocation />
              <a href="#" className="text-[11px]">
                Moshie Zongo-Kumasi
              </a>
            </li>
            <li className="flex items-center gap-1">
              <FiPhone />
              <a href="#" className="text-[11px]">
                +233545897944, +233248520715
              </a>
            </li>
            <li className="flex items-center gap-1">
              <BsClock />
              <p className="text-[11px]">Mon - Fri: 9:00am - 5:00pm</p>
            </li>
          </ul>
          <ul className="text-white flex items-center gap-3">
            <a
              href="#"
              className="hover:text-yellow-400 hover:scale-110 duration-500 ease"
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              className="hover:text-yellow-400 hover:scale-110 duration-500 ease"
            >
              <RiInstagramLine />
            </a>
            <a
              href="#"
              className="hover:text-yellow-400 hover:scale-110 duration-500 ease"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="hover:text-yellow-400 hover:scale-110 duration-500 ease"
            >
              <FaWhatsapp />
            </a>
            <a
              href="#"
              className="hover:text-yellow-400 hover:scale-110 duration-500 ease"
            >
              <RiTwitterXFill />
            </a>
          </ul>
        </div>
      </div>
      {/* End Desktop Info Nav ----------------------------------------------------- */}

      {/* Main Nav ----------------------------------------------------- */}
      <nav
        className={`fixed left-0 right-0 w-full transition-all duration-700 ${
          isScrolled
            ? "top-0 z-50 py-5 bg-white shadow-custom-light"
            : "bg-transparent border-b-2 border-transparent"
        }`}
      >
        <div className="flex justify-between items-center font-medium md:px-40 py-1">
          {/* ----------------------------------------------------- */}
          <div className="z-40 px-5 md:px-0 md:w-auto w-full flex justify-between">
            <Link to="/">
              <img
                src={isScrolled ? LogoBlack : LogoWhite}
                alt="logo"
                className="md:cursor-pointer h-8"
              />
            </Link>

            <div
              className={`flex items-center gap-3 flex-row-reverse ${
                isScrolled ? "text-gray-600" : "text-white"
              } `}
            >
              {/* Menu ----------------------------------------------------- */}
              <div
                className="text-3xl cursor-pointer md:hidden ml-2 md:ml-0"
                onClick={() => setOpen(!open)}
              >
                {open ? <MdMenu /> : <MdMenu />}
              </div>

              {/* Mobile version of SearchIcon (visible on mobile, hidden on desktop) */}
              <div
                className="flex md:hidden cursor-pointer text-2xl"
                onClick={() => setSearchbOpen(!searchb_open)}
              >
                <RiSearch2Line />
              </div>
            </div>
          </div>
          {/* ----------------------------------------------------- */}

          {/* Menu menus or links display here ----------------------------------------------------- */}
          <ul
            className={`hidden md:flex capitalize text-sm ${
              isScrolled ? "text-gray-500" : "text-white/80"
            } font-medium items-center gap-3`}
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
                isScrolled ? "md:text-gray-600" : "text-white"
              } cursor-pointer text-2xl `}
              onClick={() => setSearchbOpen(true)}
            >
              <RiSearch2Line />
            </div>
          </div>
          {/* ----------------------------------------------------- */}
        </div>
      </nav>
      {/*End Main Nav ----------------------------------------------------- */}

      {/* Mobile nav  ----------------------------------------------------- */}
      <div
        className={`z-50
          md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 border-l-2 border-primary
          duration-500 ${open ? "left-0" : "left-[-100%]"}
          `}
      >
        <div className="flex justify-between items-center p-3">
          {/* Logo */}
          <Link to="/">
            <img
              src={LogoBlack}
              alt="logo"
              className="md:cursor-pointer h-8"
            />
          </Link>
          {/* Close Icon */}
          <div
            onClick={() => setOpen(false)}
            className="bg-slate-200 h-8 w-8 rounded-full hover:bg-primary hover:text-white duration-200 text-slate-500 text-xl flex justify-center items-center cursor-pointer"
          >
            <MdClose />
          </div>
        </div>

        <div className="py-10 pl-4">
          <ul className="my-10 text-gray-600">
            <NavLinks />
          </ul>
        </div>
      </div>

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
            {tn_open ? <MdClose /> : <MdClose />}
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
              <GoLocation />
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
              <BsClock />
              <p className="text-[13px] ml-3 md:ml-0">
                Mon - Fri: 9:00am - 5:00pm
              </p>
            </li>
          </ul>
          <ul className="bg-white w-full p-4 rounded-md text-slate-600 text-md flex items-center gap-3">
            <a
              href="#"
              className="hover:text-primary duration-500 text-3xl mr-1 md:mr-0"
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              className="hover:text-primary duration-500 text-3xl mr-1 md:mr-0"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="hover:text-primary duration-500 text-3xl mr-1 md:mr-0"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="hover:text-primary duration-500 text-3xl mr-1 md:mr-0"
            >
              <ion-icon name="logo-whatsapp"></ion-icon>
            </a>
            <a
              href="#"
              className="hover:text-primary duration-500 text-3xl mr-1 md:mr-0"
            >
              <FaTwitter />
            </a>
          </ul>
        </div>
      </div>
      {/* End Info Nav --------------------------------------------------------- */}

      {/* Overlay -------------------------------------------------------------- */}
      {searchb_open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-50"
          onClick={() => setSearchbOpen(false)}
        ></div>
      )}
      {/* ----------------------------------------------------------------------- */}

      {/* Search Component ----------------------------------------------------- */}
      <Searchform searchb_open={searchb_open} setSearchbOpen={setSearchbOpen} />
      {/*End Search Component ----------------------------------------------------- */}
    </main>
  );
}