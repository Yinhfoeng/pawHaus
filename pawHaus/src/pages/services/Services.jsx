import React from "react";
import { Link } from "react-router-dom";
import dog from "../../assets/14.png";
import dog2 from "../../assets/15.png";
import dog3 from "../../assets/16.png";
import dog4 from "../../assets/17.png";
import dog5 from "../../assets/18.png";
import dog6 from "../../assets/19.png";
import dog7 from "../../assets/20.png";
import dog8 from "../../assets/21.png";
import dog9 from "../../assets/22.png";
import paw from "../../assets/paw.png";
import "./Services.css";

export default function Services() {
  return (
    <div className="services-page">
      <div className="hero">
        <img src={dog} alt="Happy dog" className="golden-img" />

        <div className="hero-left">
          <h1 className="hero-title">WHAT WE OFFER</h1>
        </div>

        <div className="hero-right" />
      </div>

      <section className="service-section">
        <div className="service-block">
          <div className="service-section-header">
            <h2 className="service-section-title">
              DOG <br /> DAYCARE
            </h2>
          </div>

          <div className="main-card-wrapper">
            <img src={paw} alt="paw" className="paw-decoration" />

            <div className="main-card">
              <div className="main-card-text">
                <h3 className="main-card-subtitle">
                  A FUN, SAFE DAY FOR YOUR PUP
                </h3>
                <p className="main-card-body">
                  Give your pup a balanced mix of play, socialization, and
                  enrichment in a safe and professionally supervised
                  environment. With structured routines, dedicated rest time,
                  and personalized care, we create a positive experience that
                  keeps your dog happy, engaged, and well cared for throughout
                  the day.
                </p>
                <Link to="/booking" className="btn btn-primary">
                  Book Daycare
                </Link>
              </div>

              <div className="main-card-img-wrap">
                <img src={dog2} alt="Daycare dog" className="main-card-dog dog1" />
              </div>
            </div>
          </div>

          <h3 className="options-label">OUR DAYCARE OPTIONS</h3>

          <div className="options-grid two-col">
            <div className="option-card daycare-card">
              <div className="option-card-content">
                <h4 className="option-title">HALF DAY</h4>
                <p className="option-body">
                  A shorter stay that still offers plenty of play, social
                  interaction, and attentive care. Ideal for dogs who benefit
                  from activity and stimulation without a full-day commitment,
                  while still enjoying a safe and positive daycare experience.
                </p>
              </div>

              <div className="option-img-wrap">
                <img src={dog4} alt="Half day dogs" className="option-dog half-day" />
              </div>
            </div>

            <div className="option-card daycare-card">
              <div className="option-img-wrap">
                <img src={dog3} alt="Full day dog" className="option-dog" />
              </div>

              <div className="option-card-content">
                <h4 className="option-title">FULL DAY</h4>
                <p className="option-body">
                  A full day of supervised play, socialization, and rest in a
                  safe and engaging environment. Dogs enjoy structured
                  activities, time to interact with others, and scheduled breaks
                  to relax and recharge, ensuring a balanced and enjoyable
                  experience from drop-off to pick-up.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="service-block">
          <div className="service-section-header">
            <h2 className="service-section-title">
              DOG <br /> BOARDING
            </h2>
          </div>

          <div className="main-card">
            <div className="main-card-text">
              <h3 className="main-card-subtitle">
                A COMFORTABLE STAY AWAY FROM HOME
              </h3>
              <p className="main-card-body">
                Give your dog a safe and relaxing place to stay while you're
                away. Our boarding provides a comfortable, home-like environment
                with personalized care, regular routines, and plenty of
                attention. With supervised care, cozy rest areas, and daily
                activity, we ensure your dog feels secure, well cared for, and
                at ease throughout their stay.
              </p>
              <Link to="/booking" className="btn btn-primary">
                Book Boarding
              </Link>
            </div>

            <div className="main-card-img-wrap">
              <img src={dog5} alt="Boarding dog" className="main-card-dog dog2" />
            </div>
          </div>

          <h3 className="options-label">OUR BOARDING OPTIONS</h3>

          <div className="options-grid three-col">
            <div className="option-card text-only">
              <h4 className="option-title">STANDARD KENNEL</h4>
              <p className="option-body">
                A clean, safe, and comfortable space where your dog can rest and
                relax during their stay. Each standard kennel includes cozy
                bedding and a structured routine with regular feeding, potty
                breaks, and supervised activity, helping your dog feel secure,
                settled, and well cared for.
              </p>
            </div>

            <div className="option-card text-only">
              <h4 className="option-title">PRIVATE SUITE</h4>
              <p className="option-body">
                A quieter, more spacious option designed for dogs who prefer a
                calm and relaxed environment. With extra room to stretch out and
                added privacy, this space provides a more peaceful stay while
                still including attentive care and a consistent daily routine.
              </p>
            </div>

            <div className="option-card text-only">
              <h4 className="option-title">LUXURY SUITE</h4>
              <p className="option-body">
                A premium boarding experience offering extra space, plush
                bedding, and personalized attention. Designed for comfort and
                relaxation, this option ensures your dog enjoys a calm,
                enjoyable stay with added care and a more home-like atmosphere.
              </p>
            </div>
          </div>
        </div>

        <div className="service-block">
          <div className="service-section-header">
            <h2 className="service-section-title">
              DOG <br /> GROOMING
            </h2>
          </div>

          <div className="main-card">
            <div className="main-card-text">
              <h3 className="main-card-subtitle">
                CARE THAT KEEPS YOUR DOG LOOKING THEIR BEST
              </h3>
              <p className="main-card-body">
                Keep your dog looking and feeling their best with our gentle and
                professional grooming services. From bathing and brushing to
                nail trimming and coat care, every session is designed to ensure
                comfort, cleanliness, and a positive experience for your dog.
              </p>
              <Link to="/booking" className="btn btn-primary">
                Book Grooming
              </Link>
            </div>

            <div className="main-card-img-wrap">
              <img src={dog6} alt="Grooming dog" className="main-card-dog dog3" />
            </div>
          </div>

          <h3 className="options-label">OUR GROOMING OPTIONS</h3>

          <div className="options-grid two-col grooming-grid">
            <div className="option-card grooming-img-card">
              <img src={dog7} alt="Grooming dog" className="grooming-tall-dog" />
            </div>

            <div className="grooming-text-col">
              <div className="option-card two-col">
                <h4 className="option-title">FULL GROOM</h4>
                <p className="option-body two-col">
                  Complete grooming service to keep your pet clean and
                  well-maintained. Includes a gentle bath, thorough brushing,
                  nail trimming, ear cleaning, and professional styling for a
                  neat, polished look.
                </p>
              </div>

              <div className="option-card two-col">
                <h4 className="option-title">TRIM & TIDY</h4>
                <p className="option-body two-col">
                  Light trimming around the face, paws, and body to maintain a
                  neat and well-groomed appearance between full grooms. Helps
                  manage overgrowth, keep hygiene in check, and maintain your
                  pet’s overall shape and comfort.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="service-block">
          <div className="service-section-header">
            <h2 className="service-section-title">TRAINING</h2>
          </div>

          <div className="main-card">
            <div className="main-card-text">
              <h3 className="main-card-subtitle">
                POSITIVE TRAINING FOR BETTER BEHAVIOR
              </h3>
              <p className="main-card-body">
                Help your dog build good habits and positive behavior through
                structured, reward-based training. Our approach focuses on
                improving obedience, boosting confidence, and strengthening your
                bond. Each session is tailored to your dog’s needs to ensure
                steady progress.
              </p>
              <Link to="/booking" className="btn btn-primary">
                Book Training
              </Link>
            </div>

            <div className="main-card-img-wrap">
              <img src={dog8} alt="Training dog" className="main-card-dog dog4" />
            </div>
          </div>

          <h3 className="options-label">OUR TRAINING PROGRAMS</h3>

          <div className="options-grid two-col training-grid">
            <div className="training-text-col">
              <div className="option-card two-col">
                <h4 className="option-title">BASIC TRAINING</h4>
                <p className="option-body two-col">
                  Focuses on essential commands and good behavior, helping your
                  dog build a strong foundation. This creates better
                  communication and sets the stage for continued learning and
                  confidence.
                </p>
              </div>

              <div className="option-card two-col">
                <h4 className="option-title">ADVANCED TRAINING</h4>
                <p className="option-body two-col">
                  For dogs ready to go further, focusing on improving obedience,
                  focus, and overall responsiveness through consistent training.
                  This helps build confidence and more reliable behavior in
                  everyday situations.
                </p>
              </div>
            </div>

            <div className="option-card training-img-card">
              <img src={dog9} alt="Training dog" className="training-tall-dog" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}