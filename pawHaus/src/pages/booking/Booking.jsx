import React, { useState } from "react";
import "./Booking.css";
import emailjs from '@emailjs/browser';

const formatDateBox = (date) => ({
  date: date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
  }),
  day: date.toLocaleDateString("en-US", {
    weekday: "long",
  }),
});

const dates = Array.from({ length: 4 }, (_, index) => {
  const date = new Date();
  date.setDate(date.getDate() + index);
  return formatDateBox(date);
});

const slots = [
  { time: "10:00AM", booked: false },
  { time: "10:30AM", booked: false },
  { time: "11:00AM", booked: false },
  { time: "11:30AM", booked: true },
  { time: "12:00PM", booked: false },
  { time: "12:30PM", booked: true },
  { time: "01:00PM", booked: false },
  { time: "01:30PM", booked: false },
  { time: "02:00PM", booked: false },
  { time: "02:30PM", booked: true },
  { time: "03:00PM", booked: false },
  { time: "03:30PM", booked: false },
];

const sizes = ["Small", "Medium", "Large", "Extra Large"];
const services = ["Grooming", "Daycare", "Boarding", "Training"];

export default function Booking() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dogName: "",
    breed: "",
    age: "",
    size: "",
    serviceType: "",
    notes: "",
  });
  const [selectedDate, setSelectedDate] = useState(dates[0].date);
  const [selectedSlot, setSelectedSlot] = useState("01:00PM");
  const [showOtherDate, setShowOtherDate] = useState(false);
  const [otherDate, setOtherDate] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 const handleSubmit = () => {
emailjs.send(
  "service_6e89y5h",
  "template_qt34qp7",
  {
    email: form.email,
    firstName: form.firstName,
    dogName: form.dogName,
    serviceType: form.serviceType,
    date: selectedDate || otherDate,
    time: selectedSlot,
  },
  "SE3twn0KWnyXp_cRl"
)
  .then(() => {
    alert("Thank you for your booking! An email confirmation has been sent to you.");
  })
  .catch((error) => {
    console.error(error);
    alert("Failed to send email confirmation. Please try again.");
  });
};
  return (
    <div className="booking-page">
      <div className="booking-content">
        <h1 className="booking-title">MANAGE BOOKING</h1>

        <div className="booking-body">
          {/* LEFT */}
          <div className="booking-left">
            {/* Owner Info */}
            <h2 className="section-label-1">Owner Information</h2>
            <div className="input-row">
              <input
                className="b-input"
                type="text"
                name="firstName"
                placeholder="First Name"
                value={form.firstName}
                onChange={handleChange}
              />
              <input
                className="b-input"
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={form.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="input-row">
              <input
                className="b-input"
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
              />
              <input
                className="b-input"
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
              />
            </div>

            {/* Pet Info */}
            <h2 className="section-label-2">Pet Information</h2>
            <div className="input-row">
              <input
                className="b-input"
                type="text"
                name="dogName"
                placeholder="Dog Name"
                value={form.dogName}
                onChange={handleChange}
              />
              <input
                className="b-input"
                type="text"
                name="breed"
                placeholder="Breed"
                value={form.breed}
                onChange={handleChange}
              />
            </div>
            <div className="input-row">
              <input
                className="b-input age"
                type="text"
                name="age"
                placeholder="Age"
                value={form.age}
                onChange={handleChange}
              />
              <select
                className="b-input b-select"
                name="size"
                value={form.size}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Size
                </option>
                {sizes.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
            <select
              className="b-input b-select b-full"
              name="serviceType"
              value={form.serviceType}
              onChange={handleChange}
            >
              <option value="" disabled>
                Service Type
              </option>
              {services.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>

            {/* Notes */}
            <h2 className="section-label-3">Anything We Should Know?</h2>
            <textarea
              className="b-textarea"
              name="notes"
              placeholder="Feeding instructions, behavior notes, medical needs or anything else we should know."
              value={form.notes}
              onChange={handleChange}
            />

            {/* Book Now */}
            <button className="book-btn" onClick={handleSubmit}>
              Book Now
            </button>
          </div>

          {/* RIGHT */}
          <div className="booking-right">
            {/* Date */}
            <h2 className="section-label-4">Choose Your Visit Date</h2>
            <div className="date-grid">
              {dates.map((d) => (
                <button
                  key={d.date}
                  className={`date-btn ${selectedDate === d.date ? "date-active" : ""}`}
                  onClick={() => {
                    setSelectedDate(d.date);
                    setShowOtherDate(false);
                  }}
                >
                  <span className="date-num">{d.date}</span>
                  <span className="date-day">{d.day}</span>
                </button>
              ))}
              <button
                className={`date-btn other-date-btn ${showOtherDate ? "date-active" : ""}`}
                onClick={() => {
                  setShowOtherDate(true);
                  setSelectedDate("");
                }}
              >
                <span className="calendar-icon">📅</span>
                <span className="date-day">Other date</span>
              </button>
            </div>

            {showOtherDate && (
              <input
                className="b-input"
                type="date"
                value={otherDate}
                onChange={(e) => setOtherDate(e.target.value)}
                style={{ marginTop: "12px", width: "100%" }}
              />
            )}

            {/* Slots */}
            <h2 className="section-label-5">Available Slot</h2>
            <div className="slots-grid">
              {slots.map((s) => (
                <button
                  key={s.time}
                  className={`slot-btn 
                    ${s.booked ? "slot-booked" : ""} 
                    ${selectedSlot === s.time && !s.booked ? "slot-active" : ""}`}
                  onClick={() => !s.booked && setSelectedSlot(s.time)}
                  disabled={s.booked}
                >
                  {s.time}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
}
