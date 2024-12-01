import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ProfileProvider } from "./components/ApplicationForm/PersonalDetails/ProfileContext";
import { FormDataProvider } from "./components/Context/FormDataProvider";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProfileProvider>
        <FormDataProvider>
        <App />
        </FormDataProvider>
      </ProfileProvider>
    </BrowserRouter>
  </React.StrictMode>
);
