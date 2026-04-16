import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar_Shop from "../../components/NavBar/Navbar_Shop";
import Copyright from "../../components/Copyright/Copyright";
import "./Checkout.css";

export default function Checkout({ cart = [] }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    postal: "",
    address: "",
  });
  const [delivery, setDelivery] = useState("express");
  const [payment, setPayment] = useState("cash");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const shipping = delivery === "express" ? 5 : 0;
  const subtotal = cart.reduce((sum, item) => {
    return sum + parseFloat(item.price.replace("$", "")) * item.qty;
  }, 0);
  const total = subtotal + shipping;

  const navigate = useNavigate();

  return (
    <div className="checkout-page">
      <NavBar_Shop />

      <div className="checkout-content">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>
        <h1 className="checkout-title">CHECKOUT</h1>

        <div className="checkout-body">
          {/* LEFT */}
          <div className="checkout-left">
            {/* Contact Info */}
            <h2 className="co-section-label">Contact Information</h2>
            <div className="co-input-row">
              <input
                className="co-input"
                type="text"
                name="firstName"
                placeholder="First Name"
                value={form.firstName}
                onChange={handleChange}
              />
              <input
                className="co-input"
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={form.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="co-input-row">
              <input
                className="co-input"
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
              />
              <input
                className="co-input"
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
              />
            </div>

            {/* Shipping Info */}
            <h2 className="co-section-label">Shipping Information</h2>
            <input
              className="co-input co-full"
              type="text"
              name="country"
              placeholder="Country/Region"
              value={form.country}
              onChange={handleChange}
            />
            <div className="co-input-row">
              <input
                className="co-input"
                type="text"
                name="city"
                placeholder="City"
                value={form.city}
                onChange={handleChange}
              />
              <input
                className="co-input"
                type="text"
                name="postal"
                placeholder="Postal Code"
                value={form.postal}
                onChange={handleChange}
              />
            </div>
            <input
              className="co-input co-full"
              type="text"
              name="address"
              placeholder="Address"
              value={form.address}
              onChange={handleChange}
            />

            {/* Delivery Method */}
            <h2 className="co-section-label">Delivery Method</h2>
            <div className="delivery-box">
              <label
                className={`delivery-option ${delivery === "standard" ? "delivery-selected" : ""}`}
              >
                <input
                  type="radio"
                  name="delivery"
                  value="standard"
                  checked={delivery === "standard"}
                  onChange={() => setDelivery("standard")}
                />
                <div className="delivery-info">
                  <p className="delivery-name">Standard Shipping</p>
                  <p className="delivery-desc">
                    Delivery is from 10 to 14 business days
                  </p>
                </div>
                <span className="delivery-price">Free</span>
              </label>

              <label
                className={`delivery-option ${delivery === "express" ? "delivery-selected" : ""}`}
              >
                <input
                  type="radio"
                  name="delivery"
                  value="express"
                  checked={delivery === "express"}
                  onChange={() => setDelivery("express")}
                />
                <div className="delivery-info">
                  <p className="delivery-name">Express Shipping</p>
                  <p className="delivery-desc">
                    Delivery is from 2 to 3 business days
                  </p>
                </div>
                <span className="delivery-price">$5.00</span>
              </label>
            </div>

            {/* Payment */}
            <h2 className="co-section-label">Payment</h2>
            <div className="payment-box">
              <label
                className={`payment-option ${payment === "cash" ? "payment-selected" : ""}`}
              >
                <input
                  type="radio"
                  name="payment"
                  value="cash"
                  checked={payment === "cash"}
                  onChange={() => setPayment("cash")}
                />
                <span className="payment-name">Cash on Delivery</span>
              </label>
              <label
                className={`payment-option ${payment === "card" ? "payment-selected" : ""}`}
              >
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  checked={payment === "card"}
                  onChange={() => setPayment("card")}
                />
                <span className="payment-name">Credit Card</span>
              </label>
            </div>

            {/* Pay Now */}
            <button className="pay-btn" onClick={() => alert("Order placed!")}>
              PAY NOW
            </button>
          </div>

          {/* RIGHT - Order Summary */}
          <div className="checkout-right">
            <div className="order-box">
              <h2 className="order-title">Your Order</h2>

              <div className="order-items">
                {cart.length === 0 ? (
                  <p className="order-empty">No items in cart.</p>
                ) : (
                  cart.map((item) => (
                    <div className="order-item" key={item.id}>
                      <img
                        src={item.img}
                        alt={item.name}
                        className="order-item-img"
                      />
                      <div className="order-item-info">
                        <p className="order-item-name">
                          {item.name} {item.category}
                        </p>
                      </div>
                      <p className="order-item-price">{item.price}</p>
                    </div>
                  ))
                )}
              </div>

              <div className="order-totals">
                <div className="order-row">
                  <span>SUBTOTAL</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="order-row">
                  <span>SHIPPING</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <hr className="order-divider" />
                <div className="order-row order-total-row">
                  <span>TOTAL</span>
                  <span>${total.toFixed(2)}</span>
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
