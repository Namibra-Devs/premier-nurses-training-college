import React from "react";
import { Router, Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Footer from "./components/Footer/Footer";
import AboutUs from "./Pages/About/AboutUs";
import Academics from "./Pages/Academics/Academics";
import Admissions from "./Pages/Admissions/Admissions";
import Students from "./Pages/Students/Students";
import ContactUs from "./Pages/ContactUs/ContactUs";
import RegistrationPage from "./features/ApplicationForm/Register/RegistrationPage";
import LoginPage from "./features/ApplicationForm/Login/LoginPage";
import AOS from "aos";
import "aos/dist/aos.css";
import AppSystem from "./features/ApplicationForm/AppSystem";
import SmoothScrollToTop from "./components/UtilityComponents/SmoothScrollToTop";


const App = () => {
  const location = useLocation();

  // Definition of the route where footer should not appear
  const hideFooterRoutes = [ "/registration-page", "/login-page", "/application-page"];

  return (
    <>
      <SmoothScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/students" element={<Students />} />
        <Route path="/contactus" element={<ContactUs />} />

        <Route path="/registration-page" element={<RegistrationPage />} />
        <Route path="/login-page" element={<LoginPage />} />
        <Route path="/application-page" element={<AppSystem /> } />
      </Routes>

      {/* Conditionally render Footer */}
      {!hideFooterRoutes.includes(location.pathname) && <Footer />}
    </>
  );
};
AOS.init();

export default App;