import React, { useState } from "react";
import { Link } from "react-router-dom";
import { products, filters } from "../../data/products";
import "./Shop.css";

export default function Shop() {
  const [activeFilter, setActiveFilter] = useState("SHOP ALL");

  const filtered =
    activeFilter === "SHOP ALL"
      ? products
      : products.filter((p) => p.category === activeFilter);

  return (
    <div className="shop-page">
      <div className="shop-content">
        <h1 className="catalog-title">CATALOG</h1>

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

        <div className="products-grid">
          {filtered.map((product) => (
            <Link
              to={`/product/${product.id}`}
              className="product-card"
              key={product.id}
              style={{ textDecoration: "none" }}
            >
              <p className="product-category">{product.category}</p>

              <div className="product-img-wrapper">
                <img
                  src={product.img}
                  alt={product.name}
                  className="product-img"
                />
              </div>

              <div className="product-footer">
                <div>
                  <p className="product-name">{product.name}</p>
                  <p className="product-desc">{product.desc}</p>
                </div>
                <p className="product-price">{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}