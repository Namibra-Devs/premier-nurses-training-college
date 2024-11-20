import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Pages/Home";
import Footer from "./components/Footer/Footer";
import AboutUs from "./components/Pages/About/AboutUs";
import Academics from "./components/Pages/Academics/Academics";
import Admissions from "./components/Pages/Admissions/Admissions";
import Students from "./components/Pages/Students/Students";
import ContactUs from "./components/Pages/ContactUs/ContactUs";
import RegistrationForm from "./components/Pages/Admissions/Application/RegistrationForm";
import LoginForm from "./components/Pages/Admissions/Application/LoginForm";
import ApplicationForm from "./components/Pages/Admissions/Application/ApplicationForm";

const App = () => {
  const location = useLocation();

  // Definition of the route where footer should not appear
  const hideFooterRoutes = ['/registration-form', '/login-form', '/application-form'];
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/students" element={<Students />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/registration-form" element={<RegistrationForm/>} />
        <Route path="/login-form" element={<LoginForm/>} />
        <Route path="/application-form" element={<ApplicationForm/>} />
      </Routes>

      {/* Conditionally render Footer */}
      {!hideFooterRoutes.includes(location.pathname) && <Footer />}
    </>
  );
};

export default App;
