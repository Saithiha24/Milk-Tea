import "./app.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Delivery from "./component/Delivery/Delivery";
import Home from "./component/Home/Home";
import Product from "./component/Product/Product";
import DeskNavbar from "./UI/DeskNavbar";
import MobileNavbar from "./UI/MobileNavbar";
import ScrollButton from "./UI/ScrollToTop";
const App = () => {
  return (
    <Router>
      <DeskNavbar/> 
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/delivery" element={<Delivery />} />
        <Route exact path="/products" element={<Product />} />
      </Routes>
      <ScrollButton/>
      <MobileNavbar/>
    </Router>
  );
};

export default App;
