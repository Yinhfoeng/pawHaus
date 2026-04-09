import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Booking from "./pages/booking/Booking";
import Shop from "./pages/shop/Shop";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Booking Page */}
        <Route path="/booking" element={<Booking />} />

        {/* Shop Page */}
        <Route path="/shop" element={<Shop />} />

        
        {/* You can add more pages later like this: */}
        {/* <Route path="/services" element={<Services />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
