import React, { useState } from "react";
import AppSystem from "./AppSystem";
import NavigationBar from "./NavigationBar";

const ApplicationPage = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="bg-white fixed w-full px-2 md:px-10 py-2 flex flex-col border-x-2 border-primary">
      <NavigationBar />
      {/* Application System Display */}
      <AppSystem open={open} setOpen={setOpen} />
    </div>
  );
};

export default ApplicationPage;
