import React from "react";

const GoogleCalender = () => {
  return (
    <div>
      <iframe
        src="https://calendar.google.com/calendar/embed?src=your_calendar_id&ctz=Your_Timezone"
        style={{ border: 0 }}
        width="100%"
        height="600"
        frameBorder="0"
        scrolling="no"
      ></iframe>
    </div>
  );
};

export default GoogleCalender;
