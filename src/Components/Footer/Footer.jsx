import React from "react";
import "./Footer.css";
import instagramLogo from "../assets/instagram.svg";
import whasappLogo from "../assets/whatsapp.svg";
import twitterLogo from "../assets/logo-twitter.svg";

const firstLinks = ["Contact", "Carrers", "Company", "FAQ", "SAC"];
const secondLinks = ["Home", "Gaming", "Office", "Login", "Go to Top"];
const socialLinks = [instagramLogo, whasappLogo, twitterLogo];

function Footer() {
  return (
    <div className="footer">
      <h2 className="footer-title">INFORMATIKA</h2>
      <div className="footer-left">
        <ul className="footer-links-list">
          {firstLinks.map((item, index) => (
            <li key={index + item} className="footer-links">
              {item}
            </li>
          ))}
        </ul>
        <ul className="footer-links-list">
          {secondLinks.map((item, index) => (
            <li key={index + item} className="footer-links">
              {item}
            </li>
          ))}
        </ul>
        <ul className="footer-socials">
          {socialLinks.map((item, index) => (
            <li key={index + item}>
              <img className="icon-socials" src={item} alt="" />
            </li>
          ))}
        </ul>
        <div className="footer-right">
          <p className="footer-email-msg">Send us a email</p>
          <div className="footer-email-div">
            <input
              className="footer-email"
              placeholder="email@hoster.com"
              type="email"
            />
            <button className="footer-send-btn">send</button>
          </div>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright @ 2024 - All Right Reserved</p>
    </div>
  );
}

export default Footer;
