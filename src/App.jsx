import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Pages/Home";
import Footer from "./components/Footer/Footer";
import AboutUs from "./components/Pages/About/AboutUs";
import Academics from "./components/Pages/Academics/Academics";
import Admissions from "./components/Pages/Admissions/Admissions";
import Students from "./components/Pages/Students/Students";
import ContactUs from "./components/Pages/ContactUs/ContactUs";
import RegistrationPage from "./components/Pages/Admissions/Application/Register/RegistrationPage";
import LoginPage from "./components/Pages/Admissions/Application/Login/LoginPage";
import AOS from "aos";
import "aos/dist/aos.css";
import ApplicationPage from "./components/ApplicationForm/ApplicationPage";

const App = () => {
  const location = useLocation();

  // Definition of the route where footer should not appear
  const hideFooterRoutes = [ "/registration-page", "/login-page", "/application-page"];

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/students" element={<Students />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/registration-page" element={<RegistrationPage />} />
        <Route path="/login-page" element={<LoginPage />} />
        <Route path="/application-page" element={<ApplicationPage/>} />
      </Routes>

      {/* Conditionally render Footer */}
      {!hideFooterRoutes.includes(location.pathname) && <Footer />}
    </>
  );
};
AOS.init();

export default App;