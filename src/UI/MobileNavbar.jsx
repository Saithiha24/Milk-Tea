import React from "react";
import { Link } from "react-router-dom";
import { Color } from "../BaseColor";


const MobileNavbar = () => {
  const { primaryColor } = Color;
  return (
   
      <div className=" d-md-none" id="mobile-navbar"
      style={{ width: "100%", background: primaryColor,zIndex:1 }}>
        <ul className="list-unstyled d-flex justify-content-between align-items-center px-3">
          <li>
            <Link
              to="/"
              style={{color:"gray"}}
              className="list-unstyled d-flex flex-column
                      justify-content-center 
                      align-items-center
                      text-decoration-none"
            >
            <i className="fas fa-store"></i>
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link
              style={{color:"gray"}}
              to="/products"
              className="list-unstyled d-flex flex-column
                      justify-content-center 
                      align-items-center
                      text-decoration-none text-grey"
            >
        <i className="fas fa-wine-glass-alt"></i>
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link
              to="/delivery"
              style={{color:"gray"}}
              className="list-unstyled d-flex flex-column
                      justify-content-center 
                      align-items-center
                      text-decoration-none text-grey"
            >
              <i className="fas fa-shopping-cart"></i>
              <p>Home</p>
            </Link>
          </li>
        </ul>
      </div>
  );
};

export default MobileNavbar;
