// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home"; // Set as Homepage component
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Routes>
        {/* Setting the Home component as the default path */}
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
