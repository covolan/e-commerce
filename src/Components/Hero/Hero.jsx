import React from "react";
import "./Hero.css";
import heroImageItem from "../assets/headphone-hero.png";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-left">
          <h2 className="hero-title">
            <span className="accent">Immerse Yourself:</span> Unveiling the
            Ultimate Sound Experience with the new
            <span className="accent"> Sony Headphone</span>
          </h2>
          <p className="hero-description">
            Experience the
            <span className="accent"> Sony Noise-Cancelling Headset</span>:
            unparalleled sound quality for music, gaming, and calls with
            industry-leading <span className="accent">noise cancellation</span>.
            Elevate your audio experience with the Sony and immerse yourself in
            pure sound bliss.
          </p>
          <div className="hero-buy-section">
            <button>BUY NOW</button>
            <p className="buy-message">
              And get a <span className="accent discount">10% </span>discount in
              any other product
            </p>
          </div>
        </div>
        <div className="hero-right">
          <div className="blob-div"></div>
          <img src={heroImageItem} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
