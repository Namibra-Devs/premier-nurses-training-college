import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import Footer from "./components/Footer/Footer";
import AboutUs from "./components/Pages/About/AboutUs";
import Academics from "./components/Pages/Academics/Academics";
import Admissions from "./components/Pages/Admissions/Admissions";
import Students from "./components/Pages/Students/Students";
import ContactUs from "./components/Pages/ContactUs/ContactUs";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/students" element={<Students />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
