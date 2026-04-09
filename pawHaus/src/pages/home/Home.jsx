import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Copyright from "../../components/Copyright/Copyright";
import heroDog from "../../assets/1.png";
import fresh from "../../assets/13.png";
import pink from "../../assets/12.png";
import collar from "../../assets/11.png";
import testimonialDog from "../../assets/2.png";
import locationImg from "../../assets/location.png";
import facebook from "../../assets/facebook.png";
import telephone from "../../assets/telephone.png";
import instagram from "../../assets/instagram.png";
import "./Home.css";

const StarIcon = ({ size = 60 }) => (
  <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
    <line
      x1="30"
      y1="0"
      x2="30"
      y2="60"
      stroke="white"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <line
      x1="0"
      y1="30"
      x2="60"
      y2="30"
      stroke="white"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <line
      x1="8"
      y1="8"
      x2="52"
      y2="52"
      stroke="white"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <line
      x1="52"
      y1="8"
      x2="8"
      y2="52"
      stroke="white"
      strokeWidth="4"
      strokeLinecap="round"
    />
  </svg>
);

export default function Home() {
  return (
    <div className="page">
      {/* NAVBAR */}
      <NavBar />

      {/* HERO */}
      <div className="hero">
        <div className="hero-left">
          <h1 className="hero-title">Find Trusted Care For Your Pets.</h1>
          <p className="hero-subtitle">
            Daycare, training, boarding, and grooming in one place. Safe, clean,
            and structured care for every pet. Reliable service you can count
            on.
          </p>
          <div className="btn-group">
            <Link to="/booking" className="btn-primary">Book Now</Link>
            <button className="btn-secondary">View Services</button>
          </div>
        </div>

        <div className="hero-right">
          <div className="star star-1">
            <StarIcon size={72} />
          </div>
          <div className="star star-2">
            <StarIcon size={50} />
          </div>
          <div className="star star-3">
            <StarIcon size={38} />
          </div>
          <img src={heroDog} alt="Happy dog" className="dog-img" />
        </div>
      </div>

      {/* WHO WE ARE */}
      <div className="who-we-are">
        <div className="who-left">
          <h2 className="who-title">
            WHO
            <br />
            WE ARE
          </h2>
        </div>
        <div className="who-right">
          <p className="who-text">
            At Paw Haus, we provide safe and structured care for every pet. Our
            trained and reliable team handles each service with attention and
            consistency. Your pet stays in a clean, comfort-focused environment
            built for routine and well-being.
          </p>
          <button className="who-btn">Learn More</button>
        </div>
      </div>

      {/* BESTSELLERS SECTION – UPDATED */}
      <div className="bestsellers">
        <div className="bestsellers-header">
          <h2 className="bestsellers-title">BESTSELLERS</h2>
          <span className="see-all">SEE ALL</span>
        </div>

        <div className="products-grid">
          {/* Card 1 */}
          <div className="product-card">
            <p className="product-category">TREAT</p>
            <div className="product-img-wrapper">
              <img src={fresh} alt="Fresh Kisses" className="product-img" />
            </div>
            <div className="product-footer">
              <div>
                <p className="product-name">FRESH KISSES</p>
                <p className="product-desc">Healthy. Tasty. Rewarding.</p>
              </div>
              <p className="product-price">$16.00</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="product-card">
            <p className="product-category">TOY</p>
            <div className="product-img-wrapper">
              <img src={pink} alt="Pink Toy" className="product-img" />
            </div>
            <div className="product-footer">
              <div>
                <p className="product-name">PINK</p>
                <p className="product-desc">Playtime made better.</p>
              </div>
              <p className="product-price">$25.00</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="product-card">
            <p className="product-category">ACCESSORY</p>
            <div className="product-img-wrapper">
              <img src={collar} alt="Leather Collar" className="product-img" />
            </div>
            <div className="product-footer">
              <div>
                <p className="product-name">LEATHER COLLAR</p>
                <p className="product-desc">Real leather, made personal.</p>
              </div>
              <p className="product-price">$50.00</p>
            </div>
          </div>
        </div>
      </div>

      {/* TESTIMONIAL SECTION – UPDATED (button now outside + below the box) */}
      <div className="testimonial">
        <h2 className="testimonial-title">TESTIMONIAL</h2>

        <div className="testimonial-content">
          {/* LEFT COLUMN: box + button below it */}
          <div className="testimonial-left">
            <div className="testimonial-box">
              <div className="testimonial-header">
                <h3 className="testimonial-name">Jennie Kim</h3>
                <div className="stars">★★★★★</div>
              </div>

              <p className="testimonial-text">
                I’ve tried a few places before, but Paw Haus stands out. The
                team is organized, responsive, and clearly experienced. I booked
                daycare and grooming, and both were handled smoothly. My dog
                came back clean, calm, and well taken care of, which says a lot
                because she’s usually anxious in new environments. I also like
                that everything runs on a clear routine, so I know what to
                expect each time. It feels reliable, and that’s the main reason
                I keep coming back.
              </p>
            </div>

            {/* Button is now OUTSIDE the white box and below it */}
            <button className="read-more-btn">Read More</button>
          </div>
        </div>
      </div>

      {/* QUESTIONS SECTION */}
      <div className="questions">
        <div className="questions-content">
          <h2 className="questions-title">HAVE ANY QUESTIONS?</h2>
          <button className="questions-btn">Contact Us</button>
        </div>
        <img src={testimonialDog} alt="Dog" className="questions-dog" />
      </div>

      {/* FOOTER SECTION */}
      <div className="footer">
        {/* LEFT */}
        <div className="footer-left">
          <a href="https://maps.app.goo.gl/idKbq7xAYURuq6vq8" target="_blank" rel="noopener noreferrer">
            <img src={locationImg} alt="Map" className="map-img" />
          </a>
          <h3 className="find-us-title">HOW TO FIND US</h3>
          <p className="find-us-address">
            No. 18, Street 240
            <br />
            Sangkat Chaktomuk, Khan Daun Penh
            <br />
            Phnom Penh 12302
            <br />
            Cambodia
          </p>
        </div>

        {/* RIGHT */}
        <div className="footer-right">
          {/* Newsletter */}
          <div className="newsletter">
            <h2 className="newsletter-title">
              Get the Latest Updates.
              <br />
              Stay informed with our newest
              <br />
              services, offers, and pet care tips!
            </h2>
            <div className="email-input-wrapper">
              <span className="email-icon">✉</span>
              <input
                type="email"
                placeholder="Enter your email address"
                className="email-input"
              />
            </div>
            <button className="subscribe-btn">Subscribe</button>
            <p className="no-spam">No spam. Only helpful information.</p>
          </div>

          {/* Social */}
          <div className="social">
            <h3 className="social-title">
              TRUSTED BY PET OWNERS ACROSS CAMBODIA
            </h3>
            <div className="social-grid">
              <div className="social-item">
                <img src={facebook} alt="Facebook" className="social-icon" />
                <span>Paw Haus</span>
              </div>
              <div className="social-item">
                <img src={telephone} alt="Phone" className="social-icon" />
                <span>+(855) 96 444 7314</span>
              </div>
              <div className="social-item">
                <img src={instagram} alt="Instagram" className="social-icon" />
                <span>@pawhaus.co</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <Copyright />
    </div>
  );
}
