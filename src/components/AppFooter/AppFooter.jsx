import { React } from "react";
import "./AppFooter.css";

export const AppFooter = () => {
  return (
    <footer className="app-footer-main">
      <img
        src={`${process.env.PUBLIC_URL}/img/ForecastLogoBlack.png`}
        alt="logo"
        className="footer-logo"
      />
      <div className="footer-address">
        <h3 className="footer-title">Address</h3>
        <h5>Saliam str. 12</h5>
        <h5>Mestari</h5>
        <h5>Apial</h5>
      </div>
      <nav className="footer-nav">
        <h3 className="footer-title">Contact Us</h3>
        <a href="https://www.instagram.com" className="footer-link">
          Instagram
        </a>
        <a href="https://www.facebook.com" className="footer-link">
          Facebook
        </a>
        <a className="footer-link" href="https://web.whatsapp.com">
          WhatsApp
        </a>
      </nav>
    </footer>
  );
};
