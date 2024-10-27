import React from "react";
import Navbar from "./components/Navbar/Navbar";
import ButtonPrimary from "./components/Buttons/ButtonPrimary";
import ButtonOutline from "./components/Buttons/ButtonOutline";

const App = () => {
  return (
    <>
      <header
        className="h-screen bg-Hero bg-cover
      font-[Poppins] md:bg-top bg-center"
      >
        <Navbar />
        <div className="flex flex-col justify-center text-center items-center gap-3 h-3/4">
          <h2 className="text-white text-lg md:text-2xl font-light px-4 md:px-52">
            Not All Heroes Wears Capes, The Real Heroes Wears Scrubs
          </h2>
          <h1 className="md:text-6xl text-4xl tracking-tight text-white font-semibold py-5 px-4 md:px-64">
            Premier Nurses' Training College - PNTC
          </h1>
          <p className="text-white mb-4 text-sm md:text-[15px] px-4">
            Nursing is a work of heart. Discover eight reason to transform your
            nursing carrier.
          </p>
          <div className="text-xl flex items-center gap-4">
            <ButtonPrimary />
            <ButtonOutline/>
          </div>
        </div>
      </header>
    </>
  );
};

export default App;
