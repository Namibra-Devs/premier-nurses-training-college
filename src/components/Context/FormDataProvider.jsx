import React, { useState, useEffect } from "react";
import { FormDataContext } from "./FormDataContext";


export const FormDataProvider = ({ children }) => {

  return (
    <FormDataContext.Provider value={{}}>
      {children}
    </FormDataContext.Provider>
  );
};
