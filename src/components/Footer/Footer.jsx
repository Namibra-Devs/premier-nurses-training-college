import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-800 to bg-primary text-gray-200 pt-24 overflow-hidden rounded-t-3xl">
      <div className=" px-4 md:px-14 lg:px-40">
        <div className="flex flex-wrap justify-between mb-4 md:mb-8">
          {/* Contact Information */}
          <div className="w-full md:w-1/3 mb-8">
            <h2 className="text-4xl font-bold text-yellow-400">
              PNTC.
              <span className="text-white text-sm ml-2">
                Nurses' Training College
              </span>
            </h2>
            <p className="flex items-center my-4 text-sm pr-0 md:pr-8">
              We are dedicated to shaping the future of healthcare by educating
              and inspiring the next generation of skillednurses.
            </p>
            <p className="flex items-center mb-2">
              <span className="mr-4 text-yellow-400">
                <ion-icon
                  name="call"
                  className="mr-2 text-yellow-400"
                ></ion-icon>
              </span>
              +233264256825, +233243519083
            </p>
            <p className="flex items-center mb-2">
              <span className="mr-4 text-yellow-400">
                <ion-icon
                  name="mail"
                  className="mr-2 text-yellow-400"
                ></ion-icon>
              </span>
              info@pntc.edu.gh
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/5 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">
              Quick Links
            </h2>
            <ul>
              <li className="flex items-center mb-2">
                <span className="mr-4 text-yellow-400">
                  <ion-icon
                    name="caret-forward-outline"
                    className="mr-2 text-yellow-400"
                  ></ion-icon>
                </span>
                <a href="/" className="hover:text-yellow-400 duration-500 ease">
                  Home
                </a>
              </li>
              <li className="flex items-center mb-2">
                <span className="mr-4 text-yellow-400">
                  <ion-icon
                    name="caret-forward-outline"
                    className="mr-2 text-yellow-400"
                  ></ion-icon>
                </span>
                <a
                  href="/aboutus"
                  className="hover:text-yellow-400 duration-500 ease"
                >
                  About Us
                </a>
              </li>
              <li className="flex items-center mb-2">
                <span className="mr-4 text-yellow-400">
                  <ion-icon
                    name="caret-forward-outline"
                    className="mr-2 text-yellow-400"
                  ></ion-icon>
                </span>
                <a
                  href="/#programs"
                  className="hover:text-yellow-400 duration-500 ease"
                >
                  Programs
                </a>
              </li>
              <li className="flex items-center mb-2">
                <span className="mr-4 text-yellow-400">
                  <ion-icon
                    name="caret-forward-outline"
                    className="mr-2 text-yellow-400"
                  ></ion-icon>
                </span>
                <a
                  href="/admissions"
                  className="hover:text-yellow-400 duration-500 ease"
                >
                  Admissions
                </a>
              </li>
              <li className="flex items-center mb-2">
                <span className="mr-4 text-yellow-400">
                  <ion-icon
                    name="caret-forward-outline"
                    className="mr-2 text-yellow-400"
                  ></ion-icon>
                </span>
                <a
                  href="/contactus"
                  className="hover:text-yellow-400 duration-500 ease"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div className="w-full md:w-1/5 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">
              Useful Links
            </h2>
            <ul className="">
              <li className="flex items-center font-medium mb-2">
                <span className="mr-4 text-yellow-400">
                  <ion-icon name="caret-forward-outline"></ion-icon>
                </span>
                <a
                  href="/library"
                  className="hover:text-yellow-400 duration-500 ease"
                >
                  Library
                </a>
              </li>
              <li className="flex items-center font-medium mb-2">
                <span className="mr-4 text-yellow-400">
                  <ion-icon name="caret-forward-outline"></ion-icon>
                </span>
                <a
                  href="/#alumni"
                  className="hover:text-yellow-400 duration-500 ease"
                >
                  Alumni
                </a>
              </li>
              <li className="flex items-center font-medium mb-2">
                <span className="mr-4 text-yellow-400">
                  <ion-icon name="caret-forward-outline"></ion-icon>
                </span>
                <a
                  href="/#careers"
                  className="hover:text-yellow-400 duration-500 ease"
                >
                  Careers
                </a>
              </li>
              <li className="flex items-center font-medium mb-2">
                <span className="mr-4 text-yellow-400">
                  <ion-icon name="caret-forward-outline"></ion-icon>
                </span>
                <a
                  href="/#news"
                  className="hover:text-yellow-400 duration-500 ease"
                >
                  News
                </a>
              </li>
              <li className="flex items-center font-medium mb-2">
                <span className="mr-4 text-yellow-400">
                  <ion-icon name="caret-forward-outline"></ion-icon>
                </span>
                <a
                  href="/#blog"
                  className="hover:text-yellow-400 duration-500 ease"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Address & Workign Hours */}
          <div className="w-full md:w-1/4 mb-8">
            <div className="flex flex-col items-start">
              <div className="flex flex-col items-start mb-8">
                <h2 className="text-2xl font-semibold mb-2 text-white">
                  PNTC Adress
                </h2>
                <p className="flex items-center">
                  Box KS3797, Kumasi, Ghana, 00233
                </p>
              </div>
              <div className="flex flex-col items-start">
                <h2 className="text-2xl font-semibold mb-2 text-white">
                  Working Hours
                </h2>
                <p className="flex items-center">Mon - Fri 9:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-dashed border-blue-500"></div>

        {/*Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center py-6">
          <p>
            &copy; {new Date().getFullYear()} Premier Nurses' Training College.
            All Rights Reserved.
          </p>
          {/* Social media */}
          <div className="flex space-x-4 mb-4 md:mb-0  mt-6 md:mt-0">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-400 text-3xl hover:transition-transform duration-700 transform hover:-translate-y-2"
            >
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-400 text-3xl hover:transition-transform duration-700 transform hover:-translate-y-2"
            >
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-400 text-3xl hover:transition-transform duration-700 transform hover:-translate-y-2"
            >
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-400 text-3xl hover:transition-transform duration-700 transform hover:-translate-y-2"
            >
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
