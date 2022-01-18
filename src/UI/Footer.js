import React from "react";
import { Color } from "../BaseColor";
import "../Css/footer.css";

import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const Footer = () => {
  const { primaryColor } = Color;
  return (
    <section style={{ backgroundColor: primaryColor, width: "100%" }}>
      <Row className="d-flex p-3 justify-content-between">
        <Col className="text-align-center footer-nav" col={3}>
          <h3>Quick links</h3>
          <ul className="list-unstyled">
            <li>
              <Link to="/" className="text-decoration-none text-black">
                Homes
              </Link>
            </li>
            <li>
              <Link to="/delivery" className="text-decoration-none text-black">
                delivery
              </Link>
            </li>
            <li>
              <Link to="/product" className="text-decoration-none text-black">
                Delivery
              </Link>
            </li>
          </ul>
        </Col>
        <Col className="text-align-center footer-nav" col={3}>
          <h3>Contact Us</h3>
          <ul className="list-unstyled">
            <li>
              <i className="fas fa-phone-alt"></i>
              <span className="ms-1">-09 253 204 166</span>
            </li>
            <li>
              <i className="fab fa-weixin"></i>
              <span className="ms-1">-09 253 204 166</span>
            </li>
            <li>
              <a
                href="https://www.facebook.com/shodrinks"
                className="text-decoration-none text-black"
              >
                <i className="fab fa-facebook-square"></i>
                <span className="ms-2">
                  -https://www.facebook.com/shodrinks
                </span>
              </a>
            </li>
          </ul>
        </Col>
        <Col className="text-align-center" xs={12} lg={6}>
          <iframe
            title="shop-location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3819.5667998290924!2d96.18521291437493!3d16.798214723951695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1ed3e32ee3e47%3A0x47b9e7dd7623c8bd!2sSHO%20Drinks!5e0!3m2!1smy!2smm!4v1642497710893!5m2!1smy!2smm"
            style={{ width: "100%", height: "100%" }}
            loading="lazy"
          ></iframe>
        </Col>
      </Row>
      <Row>
        <footer className="d-flex justify-content-center align-items-center">
          Copyright @2022 | Designed by WeCreation
        </footer>
      </Row>
    </section>
  );
};

export default Footer;
