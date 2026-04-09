import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Copyright from "../../components/Copyright/Copyright";
import fresh from "../../assets/13.png";
import pink from "../../assets/12.png";
import collar from "../../assets/11.png";
import slowFeeder from "../../assets/14.png";
import ball from "../../assets/15.png";
import leash from "../../assets/16.png";
import "./Shop.css";


const products = [
  { id: 1, category: "TREAT", name: "FRESH KISSES", desc: "Healthy. Tasty. Rewarding.", price: "$16.00", img: fresh },
  { id: 2, category: "TOY", name: "PINK", desc: "Playtime made better.", price: "$25.00", img: pink },
  { id: 3, category: "ACCESSORY", name: "LEATHER COLLAR", desc: "Real leather, made personal.", price: "$50.00", img: collar },
  { id: 4, category: "TOY", name: "SLOW FEEDER", desc: "Keeps them engaged.", price: "$12.00", img: slowFeeder },
  { id: 5, category: "TOY", name: "BALL", desc: "Durable fetch fun.", price: "$5.00", img: ball },
  { id: 6, category: "ACCESSORY", name: "LEASH", desc: "Strong, secure control.", price: "$10.00", img: leash },
];

const filters = ["SHOP ALL", "TREAT", "TOY", "ACCESSORY"];

export default function Shop() {
  const [activeFilter, setActiveFilter] = useState("SHOP ALL");

  const filtered = activeFilter === "SHOP ALL"
    ? products
    : products.filter((p) => p.category === activeFilter);

  return (
    <div className="shop-page">
      <NavBar />

      <div className="shop-content">
        <h1 className="catalog-title">CATALOG</h1>

        {/* Filter Buttons */}
        <div className="filter-btns">
          {filters.map((f) => (
            <button
              key={f}
              className={`filter-btn ${activeFilter === f ? "filter-active" : ""}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="products-grid">
          {filtered.map((product) => (
            <div className="product-card" key={product.id}>
              <p className="product-category">{product.category}</p>
              <div className="product-img-wrapper">
                <img src={product.img} alt={product.name} className="product-img" />
              </div>
              <div className="product-footer">
                <div>
                  <p className="product-name">{product.name}</p>
                  <p className="product-desc">{product.desc}</p>
                </div>
                <p className="product-price">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Copyright />
    </div>
  );
}
