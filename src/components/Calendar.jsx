import React, { useState } from "react";

const Calendar = () => {
  const [events, setEvents] = useState([]);

  return (
    <div>
      <h2>Family Calendar</h2>
      <div className="calendar">
        {events.length > 0 ? (
          events.map((event, index) => (
            <div key={index} className="calendar-event">
              {event.name} - {event.date}
            </div>
          ))
        ) : (
          <p>No Events Listed</p>
        )}
      </div>
    </div>
  );
};

export default Calendar;
