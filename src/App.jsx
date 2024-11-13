// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home"; // Set as Homepage component
import Footer from "./components/Footer/Footer";
import AboutUs from "./components/Pages/About/AboutUs";
import Academics from "./components/Pages/Academics/Academics";
import Admissions from "./components/Pages/Admissions/Admissions";

const App = () => {
  return (
    <>
      <Routes>
        {/* Setting the Home component as the default path */}
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/admissions" element={<Admissions />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
