import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { products } from "../../data/products";
import "./Product.css";

export default function Product({ cart, setCart }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === Number(id));
  const [openSection, setOpenSection] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [bagOpen, setBagOpen] = useState(false);

  useEffect(() => {
    if (bagOpen) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("bag-open");
    } else {
      document.body.style.overflow = "auto";
      document.body.classList.remove("bag-open");
    }
    return () => {
      document.body.style.overflow = "auto";
      document.body.classList.remove("bag-open");
    };
  }, [bagOpen]);

  if (!product) {
    return (
      <div className="product-page">
        <div className="product-content">
          <h1>Product not found</h1>
          <Link to="/shop" className="btn btn-primary">
            Back to Shop
          </Link>
        </div>
        <Footer/>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  const addToCart = (selectedProduct) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === selectedProduct.id);

      if (existing) {
        return prev.map((item) =>
          item.id === selectedProduct.id
            ? { ...item, qty: item.qty + quantity }
            : item
        );
      }

      return [...prev, { ...selectedProduct, qty: quantity }];
    });

    setBagOpen(true);
  };

  const updateCartQty = (productId, delta) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === productId
          ? { ...item, qty: Math.max(1, item.qty + delta) }
          : item
      )
    );
  };

  const subtotal = cart.reduce((sum, item) => {
    const price = parseFloat(item.price.replace("$", ""));
    return sum + price * item.qty;
  }, 0);

  return (
    <div className="product-page">
      <div className="product-content">
        <div className="pv-top">
          <div className="pv-img-wrapper">
            <img src={product.img} alt={product.name} className="pv-img" />
          </div>

          <div className="pv-details">
            <h1 className="pv-name">
              {product.name} {product.category}
            </h1>

            <p className="pv-price">{product.price}</p>
            <p className="pv-desc-long">{product.fullDesc}</p>

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
                className="btn btn-primary"
                onClick={() => {
                  addToCart(product);
                  setBagOpen(false);
                  navigate("/checkout");
                }}
              >
                Buy Now
              </button>

              <button
                className="pv-btn-secondary"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>

            <div className="pv-accordion">

              {/* dynamic section */}
              <div className="accordion-item">
                <button
                  className="accordion-toggle"
                  onClick={() =>
                    setOpenSection(openSection === "info" ? null : "info")
                  }
                >
                  <span>{product.infoTitle}</span>
                  <span>{openSection === "info" ? "−" : "+"}</span>
                </button>

                {openSection === "info" && (
                  <p className="accordion-content">{product.infoContent}</p>
                )}
              </div>

              <hr className="accordion-divider" />

              {/* specifications */}
              <div className="accordion-item">
                <button
                  className="accordion-toggle"
                  onClick={() =>
                    setOpenSection(openSection === "specs" ? null : "specs")
                  }
                >
                  <span>ADDITIONAL INFORMATION</span>
                  <span>{openSection === "specs" ? "−" : "+"}</span>
                </button>

                {openSection === "specs" && (
                  <p className="accordion-content">
                    To be updated
                  </p>
                )}
              </div>

            </div>
          </div>
        </div>

        <div className="pv-related">
          <h2 className="pv-related-title">FREQUENTLY BOUGHT WITH</h2>

          <div className="products-grid">
            {relatedProducts.map((item) => (
              <Link
                to={`/product/${item.id}`}
                className="product-card"
                key={item.id}
                style={{ textDecoration: "none" }}
              >
                <p className="product-category">{item.category}</p>

                <div className="product-img-wrapper">
                  <img src={item.img} alt={item.name} className="product-img" />
                </div>

                <div className="product-footer">
                  <div>
                    <p className="product-name">{item.name}</p>
                    <p className="product-desc">{item.desc}</p>
                  </div>
                  <p className="product-price">{item.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

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
                          setCart((prev) => prev.filter((i) => i.id !== item.id))
                        }
                        aria-label={`Remove ${item.name} from bag`}
                      >
                        <svg
                          className="bag-delete-icon"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            d="M9 3h6l1 2h4v2H4V5h4l1-2Zm-2 6h2v9H7V9Zm4 0h2v9h-2V9Zm4 0h2v9h-2V9ZM6 7h12l-1 14H7L6 7Z"
                            fill="currentColor"
                          />
                        </svg>
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
    </div>
  );
}
