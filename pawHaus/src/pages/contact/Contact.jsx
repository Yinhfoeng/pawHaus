import React, { useState } from "react";
import NavBar_Booking from "../../components/NavBar/Navbar_Booking";
import Copyright from "../../components/Copyright/Copyright";
import "./Contact.css";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "", message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    alert("Message sent!");
  };

  return (
    <div className="contact-page">
      <NavBar_Booking />

      <div className="contact-content">
        <h1 className="contact-title">CONTACT US</h1>

        <div className="contact-body">

          {/* LEFT */}
          <div className="contact-left">

            <h2 className="section-label">Information</h2>
            <div className="input-row">
              <input
                className="contact-input"
                type="text"
                name="firstName"
                placeholder="First Name"
                value={form.firstName}
                onChange={handleChange}
              />
              <input
                className="contact-input"
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={form.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="input-row">
              <input
                className="contact-input"
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
              />
              <input
                className="contact-input"
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
              />
            </div>

            <h2 className="section-label">Message</h2>
            <textarea
              className="contact-textarea"
              name="message"
              placeholder="Type your message here."
              value={form.message}
              onChange={handleChange}
            />

            <button className="send-btn" onClick={handleSubmit}>
              Send Message
            </button>

          </div>

          {/* RIGHT */}
          <div className="contact-right">

            <div className="info-block">
              <h2 className="info-title">Address</h2>
              <p className="info-text">
                No. 18, Street 240<br />
                Sangkat Chaktomuk, Khan Daun Penh<br />
                Phnom Penh 12302<br />
                Cambodia
              </p>
            </div>

            <div className="info-block">
              <h2 className="info-title">Phone Number</h2>
              <p className="info-text">+(855) 96 444 7314</p>
            </div>

            <div className="info-block">
              <h2 className="info-title">Follow Us</h2>
              <div className="social-list">
                <div className="social-item">
                  <img src={facebook} alt="Facebook" className="social-icon" />
                  <span className="social-text">Paw Haus</span>
                </div>
                <div className="social-item">
                  <img src={instagram} alt="Instagram" className="social-icon" />
                  <span className="social-text">@pawhaus.co</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Copyright />
    </div>
  );
}