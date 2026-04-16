import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import NavBar_Shop from "../../components/NavBar/Navbar_Shop";
import Copyright from "../../components/Copyright/Copyright";
import fresh from "../../assets/13.png";
import pink from "../../assets/12.png";
import collar from "../../assets/11.png";
import slowFeeder from "../../assets/9.png";
import ball from "../../assets/10.png";
import leash from "../../assets/8.png";
import "./Shop.css";

const products = [
  {
    id: 1,
    category: "TREAT",
    name: "FRESH KISSES",
    desc: "Healthy. Tasty. Rewarding.",
    fullDesc:
      "Fresh Kisses dog treats help keep breath clean while giving your dog a satisfying chew. Made with safe ingredients and a firm texture that supports dental health.",
    price: "$16.00",
    img: fresh,
  },
  {
    id: 2,
    category: "TOY",
    name: "PINK",
    desc: "Playtime made better.",
    fullDesc:
      "A fun and durable toy designed to keep your pet entertained for hours. Safe materials, bright colors, and a design dogs love.",
    price: "$25.00",
    img: pink,
  },
  {
    id: 3,
    category: "ACCESSORY",
    name: "LEATHER COLLAR",
    desc: "Real leather, made personal.",
    fullDesc:
      "Premium real leather collar crafted for comfort and durability. Adjustable fit with a secure buckle for dogs of all sizes.",
    price: "$50.00",
    img: collar,
  },
  {
    id: 4,
    category: "TOY",
    name: "SLOW FEEDER",
    desc: "Keeps them engaged.",
    fullDesc:
      "Slow feeder bowl that makes mealtime fun and healthy. Reduces bloating and keeps your dog mentally stimulated.",
    price: "$12.00",
    img: slowFeeder,
  },
  {
    id: 5,
    category: "TOY",
    name: "BALL",
    desc: "Durable fetch fun.",
    fullDesc:
      "Durable rubber ball built for endless fetch sessions. Floats in water and bounces unpredictably for extra excitement.",
    price: "$5.00",
    img: ball,
  },
  {
    id: 6,
    category: "ACCESSORY",
    name: "LEASH",
    desc: "Strong, secure control.",
    fullDesc:
      "Strong and secure leash made from premium materials. Comfortable grip handle with a reliable clip for safe walks.",
    price: "$10.00",
    img: leash,
  },
];

const filters = ["SHOP ALL", "TREAT", "TOY", "ACCESSORY"];

export default function Shop({ cart, setCart }) {
  const [activeFilter, setActiveFilter] = useState("SHOP ALL");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [bagOpen, setBagOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.productId) {
      const product = products.find((p) => p.id === location.state.productId);
      if (product) setSelectedProduct(product);
    }
  }, []);

  const filtered =
    activeFilter === "SHOP ALL"
      ? products
      : products.filter((p) => p.category === activeFilter);

  const relatedProducts = selectedProduct
    ? products.filter((p) => p.id !== selectedProduct.id).slice(0, 3)
    : [];

  const handleCardClick = (product) => {
    setSelectedProduct(product);
    setQuantity(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBack = () => setSelectedProduct(null);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + quantity } : item,
        );
      }
      return [...prev, { ...product, qty: quantity }];
    });
    setBagOpen(true);
  };

  const updateCartQty = (id, delta) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item,
      ),
    );
  };

  const subtotal = cart.reduce((sum, item) => {
    const price = parseFloat(item.price.replace("$", ""));
    return sum + price * item.qty;
  }, 0);

  return (
    <div className="shop-page">
      <NavBar_Shop />

      <div className="shop-content">
        {/* ── CATALOG VIEW ── */}
        {!selectedProduct && (
          <>
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
                <div
                  className="product-card"
                  key={product.id}
                  onClick={() => handleCardClick(product)}
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
                </div>
              ))}
            </div>
          </>
        )}

        {/* ── PRODUCT DETAIL VIEW ── */}
        {selectedProduct && (
          <>
            <button className="back-btn" onClick={handleBack}>
              ← Back
            </button>
            <div className="pv-top">
              <div className="pv-img-wrapper">
                <img
                  src={selectedProduct.img}
                  alt={selectedProduct.name}
                  className="pv-img"
                />
              </div>
              <div className="pv-details">
                <h1 className="pv-name">
                  {selectedProduct.name} {selectedProduct.category}
                </h1>
                <p className="pv-price">{selectedProduct.price}</p>
                <p className="pv-desc-long">{selectedProduct.fullDesc}</p>
                <div className="pv-quantity">
                  <button
                    className="qty-btn"
                    onClick={() => setQuantity((q) => (q > 1 ? q - 1 : 1))}
                  >
                    −
                  </button>
                  <span className="qty-num">{quantity}</span>
                  <button
                    className="qty-btn"
                    onClick={() => setQuantity((q) => q + 1)}
                  >
                    +
                  </button>
                </div>
                <div className="pv-btn-group">
                  <button
                    className="pv-btn-primary"
                    onClick={() => {
                      addToCart(selectedProduct);
                      setBagOpen(false);
                      navigate("/checkout");
                    }}
                  >
                    Buy Now
                  </button>
                  <button
                    className="pv-btn-secondary"
                    onClick={() => addToCart(selectedProduct)}
                  >
                    Add to Cart
                  </button>
                </div>
                <div className="pv-accordion">
                  <div className="accordion-item">
                    <p className="accordion-label">KEY INGREDIENTS</p>
                  </div>
                  <hr className="accordion-divider" />
                  <div className="accordion-item">
                    <p className="accordion-label">SPECIFICATIONS</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pv-related">
              <h2 className="pv-related-title">FREQUENTLY BOUGHT WITH</h2>
              <div className="products-grid">
                {relatedProducts.map((p) => (
                  <div
                    className="product-card"
                    key={p.id}
                    onClick={() => handleCardClick(p)}
                  >
                    <p className="product-category">{p.category}</p>
                    <div className="product-img-wrapper">
                      <img src={p.img} alt={p.name} className="product-img" />
                    </div>
                    <div className="product-footer">
                      <div>
                        <p className="product-name">{p.name}</p>
                        <p className="product-desc">{p.desc}</p>
                      </div>
                      <p className="product-price">{p.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      {/* BAG SIDEBAR */}
      {bagOpen && (
        <div className="bag-overlay" onClick={() => setBagOpen(false)}>
          <div className="bag-sidebar" onClick={(e) => e.stopPropagation()}>
            <div className="bag-header">
              <h2 className="bag-title">BAG</h2>
              <button className="bag-close" onClick={() => setBagOpen(false)}>
                ✕
              </button>
            </div>
            <div className="bag-items">
              {cart.length === 0 && (
                <p className="bag-empty">Your bag is empty.</p>
              )}
              {cart.map((item) => (
                <div className="bag-item" key={item.id}>
                  <img
                    src={item.img}
                    alt={item.name}
                    className="bag-item-img"
                  />
                  <div className="bag-item-info">
                    <p className="bag-item-name">
                      {item.name} {item.category}
                    </p>
                    <p className="bag-item-price">{item.price}</p>
                    <div className="bag-item-actions">
                      <div className="bag-item-qty">
                        <button
                          className="bag-qty-btn"
                          onClick={() => updateCartQty(item.id, -1)}
                        >
                          −
                        </button>
                        <span className="bag-qty-num">{item.qty}</span>
                        <button
                          className="bag-qty-btn"
                          onClick={() => updateCartQty(item.id, 1)}
                        >
                          +
                        </button>
                      </div>
                      <button
                        className="bag-delete-btn"
                        onClick={() =>
                          setCart((prev) =>
                            prev.filter((i) => i.id !== item.id),
                          )
                        }
                      >
                        🗑
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bag-footer">
              <div className="bag-subtotal">
                <span>SUBTOTAL</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <button
                className="bag-checkout-btn"
                onClick={() => {
                  setBagOpen(false);
                  navigate("/checkout");
                }}
              >
                CHECKOUT
              </button>
            </div>
          </div>
        </div>
      )}
      <Copyright />
    </div>
  );
}
