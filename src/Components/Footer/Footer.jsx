import React from "react";
import "./Footer.css"

function Footer() {
  return (
    <div className="footer">
      <h2 className="footer-title">INFORMATIKA</h2>
      <ul className="footer-links">
        <li>Home</li>
        <li>Contact</li>
        <li>Carrrers</li>
        <li>Company</li>
      </ul>
      <ul className="footer-socials">
        <li>Instagram</li>
        <li>Whatsapp</li>
        <li>X</li>
      </ul>
      <hr />
        <p className="footer-copyright">
            Copyright @ 2024 - All Right Reserved
        </p>
    </div>
  );
}

export default Footer;
