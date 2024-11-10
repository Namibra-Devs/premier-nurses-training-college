// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home"; // Set as Homepage component
import Footer from "./components/Footer/Footer";
import AboutUs from "./components/Pages/About/AboutUs";

const App = () => {
  return (
    <>
      <Routes>
        {/* Setting the Home component as the default path */}
        <Route path="/Home" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
