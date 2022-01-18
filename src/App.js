import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Delivery from "./component/Delivery/Delivery";

import Home from "./component/Home/Home";
import Product from "./component/Product/Product";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/delivery" element={<Delivery />} />
        <Route exact path="/products" element={<Product />} />
      </Routes>
    </Router>
  );
};

export default App;
