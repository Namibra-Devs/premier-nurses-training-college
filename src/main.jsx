import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ProfileProvider } from "./features/ApplicationForm/PersonalDetails/ProfileContext";
import { FormProvider } from "./features/ApplicationForm/FormContext/FormProvider";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProfileProvider>
        <FormProvider>
        <App />
        </FormProvider>
      </ProfileProvider>
    </BrowserRouter>
  </React.StrictMode>
);
