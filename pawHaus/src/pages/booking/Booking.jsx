import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import "./Booking.css";
import Copyright from "../../components/Copyright/Copyright";

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState("07/04");
  const [selectedTime, setSelectedTime] = useState("01:00PM");

  const dates = [
    { key: "05/04", day: "Saturday" },
    { key: "06/04", day: "Sunday" },
    { key: "07/04", day: "Monday" },
    { key: "08/04", day: "Tuesday" },
  ];

  const times = [
    "10:00AM",
    "10:30AM",
    "11:00AM",
    "11:30AM",
    "12:00PM",
    "12:30PM",
    "01:00PM",
    "01:30PM",
    "02:00PM",
    "02:30PM",
    "03:00PM",
    "03:30PM",
  ];

  return (
    <div className="booking-page">
      <NavBar />

      <div className="booking-container">
        <h1 className="booking-title">MANAGE BOOKING</h1>

        <div className="form-grid">
          {/* LEFT COLUMN - Booking Details */}
          <div className="left-column">
            <h2 className="section-title">Booking Details</h2>

            {/* Owner Info */}
            <div className="form-group">
              <h3 className="subsection-title">Owner Info</h3>
              <div className="input-row">
                <input
                  type="text"
                  placeholder="First Name"
                  className="input-field"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="input-field"
                />
              </div>
              <div className="input-row">
                <input
                  type="email"
                  placeholder="Email"
                  className="input-field"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="input-field"
                />
              </div>
            </div>

            {/* Pet Info */}
            <div className="form-group">
              <h3 className="subsection-title">Pet Info</h3>
              <div className="input-row">
                <input
                  type="text"
                  placeholder="Dog Name"
                  className="input-field"
                />
                <input
                  type="text"
                  placeholder="Breed"
                  className="input-field"
                />
              </div>
              <div className="input-row">
                <input type="text" placeholder="Age" className="input-field" />
                <select className="input-field">
                  <option value="">Size</option>
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select>
              </div>
              <select className="input-field full-width">
                <option value="">Service Type</option>
                <option value="daycare">Daycare</option>
                <option value="grooming">Grooming</option>
                <option value="boarding">Boarding</option>
                <option value="training">Training</option>
              </select>
            </div>
          </div>

          {/* RIGHT COLUMN - Date & Time */}
          <div className="right-column">
            <h2 className="section-title">Choose Your Visit Date</h2>
            <div className="date-grid">
              {dates.map((d) => (
                <button
                  key={d.key}
                  onClick={() => setSelectedDate(d.key)}
                  className={`date-btn ${selectedDate === d.key ? "selected" : ""}`}
                >
                  {d.key}
                  <br />
                  <span className="date-day">{d.day}</span>
                </button>
              ))}
              <button className="other-date-btn">
                📅
                <br />
                <span className="date-day">Other date</span>
              </button>
            </div>

            <h2 className="section-title">Available Slot</h2>
            <div className="time-grid">
              {times.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`time-btn ${selectedTime === time ? "selected" : ""}`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Notes Section */}
        <div className="notes-section">
          <h3 className="notes-title">Anything We Should Know?</h3>
          <textarea
            className="notes-textarea"
            placeholder="Feeding instructions, behavior notes, medical needs or anything else we should know."
            rows="4"
          />
        </div>

        <button className="book-now-btn">Book Now</button>
      </div>

      {/* Footer */}
      <Copyright />
    </div>
  );
};

export default Booking;
