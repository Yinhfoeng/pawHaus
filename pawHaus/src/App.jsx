import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/home/Home";
import Services from "./pages/services/Services";
import Booking from "./pages/booking/Booking";
import Shop from "./pages/shop/Shop";
import Product from "./pages/product/Product";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Checkout from "./pages/checkout/Checkout";
import Navbar from "./components/NavBar/Navbar";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <div className="app">
        <Navbar />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/shop" element={<Shop />} />
            <Route
              path="/product/:id"
              element={<Product cart={cart} setCart={setCart} />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/checkout" element={<Checkout cart={cart} />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
