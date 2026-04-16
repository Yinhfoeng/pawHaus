import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/home/Home";
import Booking from "./pages/booking/Booking";
import Shop from "./pages/shop/Shop";
import Contact from "./pages/contact/Contact";
import Checkout from "./pages/checkout/Checkout";

function App() {
  const [cart, setCart] = useState([]);  // ← cart lives here now

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/shop" element={<Shop cart={cart} setCart={setCart} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<Checkout cart={cart} />} />
      </Routes>
    </Router>
  );
}

export default App;