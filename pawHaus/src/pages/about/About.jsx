import React from "react";
import { Link } from "react-router-dom";
import Copyright from "../../components/Copyright/Copyright";
import NavBar_About from "../../components/NavBar/Navbar_About";
import teamImg from "../../assets/team.png";
import "./About.css";

export default function About() {
  return (
    <div className="about-page">
      <NavBar_About />

      {/* HERO */}
      <section className="about-hero">
        <h1 className="about-hero-title">ABOUT US</h1>
      </section>

      {/* MISSION & VALUES */}
      <section className="about-section">
        <h2 className="about-section-label">OUR MISSION AND VALUES</h2>
        <div className="mission-grid">
          <p className="about-body">
            To provide safe, structured, and reliable care where every pet feels
            secure, comfortable, and well looked after. We focus on consistency,
            proper routines, and attentive handling so owners feel confident every
            time they trust us with their pets.
          </p>
          <p className="about-body">
            We prioritize safety in every service. We operate with discipline and
            consistency, not guesswork. Our team is trained, attentive, and
            accountable. We maintain clean, calm environments that support each
            pet's well-being. We treat every pet with care, respect, and patience.
          </p>
        </div>
      </section>

      {/* WHAT WE PROVIDE */}
      <section className="about-section">
        <h2 className="about-section-label">WHAT WE PROVIDE</h2>
        <div className="steps-grid">
          <div className="step-card step-blue">
            <p className="step-number">STEP ONE</p>
            <h3 className="step-title">Book Your Service</h3>
            <p className="step-body">
              Select daycare, training, boarding, or grooming and reserve your
              preferred time. We confirm your booking and prepare everything in
              advance for a smooth experience.
            </p>
          </div>
          <div className="step-card step-yellow">
            <p className="step-number">STEP TWO</p>
            <h3 className="step-title">Drop Off Your Pet</h3>
            <p className="step-body">
              Our team completes a quick check-in, reviews any notes, and places
              your pet into a safe, structured routine. Each pet receives proper
              supervision, care, and attention throughout their stay.
            </p>
          </div>
          <div className="step-card step-green">
            <p className="step-number">STEP THREE</p>
            <h3 className="step-title">Pick Up Your Pet</h3>
            <p className="step-body">
              Your pet leaves clean, calm, and well cared for. You receive a
              consistent experience every time, with your pet returning comfortable
              and ready to go home.
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="about-section">
        <h2 className="about-section-label">TESTIMONIAL</h2>
        <div className="testimonial-card">
          <div className="testimonial-header">
            <span className="testimonial-name">Jennie Kim</span>
            <span className="testimonial-stars">★ ★ ★ ★ ★</span>
          </div>
          <p className="testimonial-body">
            I've tried a few places before, but Paw Haus stands out. The team is
            organized, responsive, and clearly experienced. I booked daycare and
            grooming, and both were handled smoothly. My dog came back clean, calm,
            and well taken care of, which says a lot because she's usually anxious
            in new environments. I also like that everything runs on a clear
            routine, so I know what to expect each time. It feels reliable, and
            that's the main reason I keep coming back.
          </p>
        </div>
        <Link to="/booking" className="service-btn">
          Book Now
        </Link>
      </section>

      {/* MEET THE PACK */}
      <section className="about-section">
        <h2 className="about-section-label">MEET THE PACK</h2>
        <img src={teamImg} alt="Meet the pack" className="team-full-img" />
      </section>

      <Copyright />
    </div>
  );
}