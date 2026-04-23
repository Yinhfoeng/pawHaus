import React, { useState, useEffect } from "react";
import "./Booking.css";
import emailjs from '@emailjs/browser';

// ─── GOOGLE CALENDAR CONFIG ───────────────────────────────────────────────────
const GOOGLE_API_KEY     = "AIzaSyDAnOugt5K5pHWaa5P1wHDt8-gI07R3GpY"; 
const GOOGLE_CALENDAR_ID = "13a4341f2ab2915420cc006ea80d9be1aa113d91a044ed7cb8403c802d549e40@group.calendar.google.com"; 

// ── All possible time slots (fixed — same as before) ─────────────────────────
const ALL_SLOTS = [
  "10:00AM", "10:30AM", "11:00AM", "11:30AM",
  "12:00PM", "12:30PM", "01:00PM", "01:30PM",
  "02:00PM", "02:30PM", "03:00PM", "03:30PM",
];

// Convert "10:30AM" → "10:30" (24h) for API comparison
function slotTo24h(slot) {
  const [timePart, period] = [slot.slice(0, 5), slot.slice(5)];
  let [h, m] = timePart.split(":").map(Number);
  if (period === "PM" && h !== 12) h += 12;
  if (period === "AM" && h === 12) h = 0;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

// Check if a slot overlaps with any busy interval from Google Calendar API
function isSlotBusy(slot, dateStr, busyIntervals) {
  const time24    = slotTo24h(slot);
  const slotStart = new Date(`${dateStr}T${time24}:00+07:00`); // ← force UTC+7
  const slotEnd   = new Date(slotStart.getTime() + 30 * 60 * 1000);

  return busyIntervals.some(({ start, end }) => slotStart < end && slotEnd > start);
}

// ── Date helpers (same logic as your original) ────────────────────────────────
const formatDateBox = (date) => ({
  date: date.toLocaleDateString("en-GB", { day: "2-digit", month: "2-digit" }),
  day:  date.toLocaleDateString("en-US", { weekday: "long" }),
  iso:  date.toISOString().split("T")[0], // "YYYY-MM-DD" — needed for API
});

const dates = Array.from({ length: 4 }, (_, i) => {
  const d = new Date();
  d.setDate(d.getDate() + i);
  return formatDateBox(d);
});

const sizes    = ["Small", "Medium", "Large", "Extra Large"];
const services = ["Grooming", "Daycare", "Boarding", "Training"];

// ── Main Component ────────────────────────────────────────────────────────────
export default function Booking() {
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    dogName: "", breed: "", age: "", size: "", serviceType: "", notes: "",
  });

  const [selectedDate,  setSelectedDate]  = useState(dates[0].date);
  const [selectedIso,   setSelectedIso]   = useState(dates[0].iso);
  const [selectedSlot,  setSelectedSlot]  = useState("01:00PM");
  const [showOtherDate, setShowOtherDate] = useState(false);
  const [otherDate,     setOtherDate]     = useState("");

  // ── Google Calendar API state ─────────────────────────────────────────────
  const [busyIntervals, setBusyIntervals] = useState([]); // raw busy data from API
  const [loadingSlots,  setLoadingSlots]  = useState(false);
  const [slotsError,    setSlotsError]    = useState(null);

  // ── Fetch busy slots from Google Calendar freeBusy API ────────────────────
  // Runs every time the selected date changes
  useEffect(() => {
    const dateIso = otherDate || selectedIso;
    if (!dateIso) return;

    const fetchBusySlots = async () => {
      setLoadingSlots(true);
      setSlotsError(null);
      setBusyIntervals([]);

      try {
        const response = await fetch(
          `https://www.googleapis.com/calendar/v3/freeBusy?key=${GOOGLE_API_KEY}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              timeMin: `${dateIso}T00:00:00+07:00`,
              timeMax: `${dateIso}T23:59:59+07:00`,
              items:   [{ id: GOOGLE_CALENDAR_ID }],
            }),
          }
        );

        if (!response.ok) {
          const err = await response.json();
          throw new Error(err.error?.message || "Failed to load availability");
        }

        const data = await response.json();

        // ── Data transformation ──────────────────────────────────────────────
        // Raw API: { calendars: { "cal_id": { busy: [{ start, end }, ...] } } }
        // Transform: convert ISO strings → JS Date objects for easy comparison
        const rawBusy = data.calendars?.[GOOGLE_CALENDAR_ID]?.busy ?? [];
        const transformed = rawBusy.map((b) => ({
          start: new Date(b.start),
          end:   new Date(b.end),
          
        }));
        // ────────────────────────────────────────────────────────────────────
        console.log("Raw busy from API:", rawBusy);
        console.log("Transformed:", transformed);

        setBusyIntervals(transformed);
      } catch (err) {
        setSlotsError(err.message);
        // Fallback: use mock busy slots so demo still looks realistic
        setBusyIntervals([
          { start: new Date(`${dateIso}T03:30:00Z`), end: new Date(`${dateIso}T04:00:00Z`) }, // 10:30AM
          { start: new Date(`${dateIso}T05:30:00Z`), end: new Date(`${dateIso}T06:00:00Z`) }, // 12:30PM
          { start: new Date(`${dateIso}T07:30:00Z`), end: new Date(`${dateIso}T08:00:00Z`) }, // 02:30PM
        ]);
      } finally {
        setLoadingSlots(false);
      }
    };

    fetchBusySlots();
  }, [selectedIso, otherDate]);

  // ── Handlers ──────────────────────────────────────────────────────────────
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleDateSelect = (d) => {
    setSelectedDate(d.date);
    setSelectedIso(d.iso);
    setShowOtherDate(false);
    setOtherDate("");
    setSelectedSlot(null);
  };

  const handleOtherDate = (e) => {
    setOtherDate(e.target.value);
    setSelectedSlot(null);
  };

  const handleSubmit = () => {
    emailjs.send(
      "service_6e89y5h",
      "template_qt34qp7",
      {
        email:       form.email,
        firstName:   form.firstName,
        dogName:     form.dogName,
        serviceType: form.serviceType,
        date:        selectedDate || otherDate,
        time:        selectedSlot,
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

  // ── Build slots array dynamically from API data ────────────────────────────
  const dateIso = otherDate || selectedIso;
  const slots = ALL_SLOTS.map((time) => ({
    time,
    booked: isSlotBusy(time, dateIso, busyIntervals),
  }));

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <div className="booking-page">
      <div className="booking-content">
        <h1 className="booking-title">MANAGE BOOKING</h1>

        <div className="booking-body">
          {/* ── LEFT ── */}
          <div className="booking-left">
            <h2 className="section-label-1">Owner Information</h2>
            <div className="input-row">
              <input className="b-input" type="text"  name="firstName" placeholder="First Name"   value={form.firstName} onChange={handleChange} />
              <input className="b-input" type="text"  name="lastName"  placeholder="Last Name"    value={form.lastName}  onChange={handleChange} />
            </div>
            <div className="input-row">
              <input className="b-input" type="email" name="email"     placeholder="Email"        value={form.email}     onChange={handleChange} />
              <input className="b-input" type="text"  name="phone"     placeholder="Phone Number" value={form.phone}     onChange={handleChange} />
            </div>

            <h2 className="section-label-2">Pet Information</h2>
            <div className="input-row">
              <input className="b-input" type="text" name="dogName" placeholder="Dog Name" value={form.dogName} onChange={handleChange} />
              <input className="b-input" type="text" name="breed"   placeholder="Breed"    value={form.breed}   onChange={handleChange} />
            </div>
            <div className="input-row">
              <input className="b-input age" type="text" name="age" placeholder="Age" value={form.age} onChange={handleChange} />
              <select className="b-input b-select" name="size" value={form.size} onChange={handleChange}>
                <option value="" disabled>Size</option>
                {sizes.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <select className="b-input b-select b-full" name="serviceType" value={form.serviceType} onChange={handleChange}>
              <option value="" disabled>Service Type</option>
              {services.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>

            <h2 className="section-label-3">Anything We Should Know?</h2>
            <textarea
              className="b-textarea"
              name="notes"
              placeholder="Feeding instructions, behavior notes, medical needs or anything else we should know."
              value={form.notes}
              onChange={handleChange}
            />

            <button className="book-btn book-btn-desktop" onClick={handleSubmit}>Book Now</button>
          </div>

          {/* ── RIGHT ── */}
          <div className="booking-right">
            <h2 className="section-label-4">Choose Your Visit Date</h2>
            <div className="date-grid">
              {dates.map((d) => (
                <button
                  key={d.date}
                  className={`date-btn ${selectedDate === d.date && !showOtherDate ? "date-active" : ""}`}
                  onClick={() => handleDateSelect(d)}
                >
                  <span className="date-num">{d.date}</span>
                  <span className="date-day">{d.day}</span>
                </button>
              ))}
              <button
                className={`date-btn other-date-btn ${showOtherDate ? "date-active" : ""}`}
                onClick={() => { setShowOtherDate(true); setSelectedDate(""); }}
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
                onChange={handleOtherDate}
                style={{ marginTop: "12px", width: "100%" }}
              />
            )}

            {/* ── Slots section ── */}
            <h2 className="section-label-5">
              Available Slot
              {/* Loading state */}
              {loadingSlots && <span className="slots-loading"> Loading...</span>}
            </h2>

            {/* Error state */}
            {slotsError && (
              <div className="slots-error">
                ⚠️ Could not load live availability. Showing sample data.
              </div>
            )}

            {/* Slots grid — same className structure as your original */}
            <div className="slots-grid">
              {loadingSlots
                ? // Loading skeleton — same number of slots
                  ALL_SLOTS.map((s) => (
                    <div key={s} className="slot-btn slot-skeleton" />
                  ))
                : slots.map((s) => (
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
                  ))
              }
            </div>
          </div>

          <div className="booking-book-wrap">
            <button className="book-btn book-btn-mobile" onClick={handleSubmit}>Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
