// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home"; // Set as Homepage component
import Footer from "./components/Footer/Footer";
import AboutUs from "./components/Pages/About/AboutUs";
import Academics from "./components/Pages/Academics/Academics";

const App = () => {
  return (
    <>
      <Routes>
        {/* Setting the Home component as the default path */}
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Academics" element={<Academics />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
