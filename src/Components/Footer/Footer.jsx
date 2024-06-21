import React from "react";
import "./Footer.css"
import instagramLogo from "../assets/instagram.svg"
import whasappLogo from "../assets/whatsapp.svg"
import twitterLogo from "../assets/logo-twitter.svg"


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
        <li><img className="icon" src={instagramLogo} alt="" /></li>
        <li><img className="icon" src={whasappLogo} alt="" /></li>
        <li><img className="icon" src={twitterLogo} alt="" /></li>

      </ul>
      <hr />
        <p className="footer-copyright">
            Copyright @ 2024 - All Right Reserved
        </p>
    </div>
  );
}

export default Footer;
