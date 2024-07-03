import React from "react";
import "./Hero.css";
import heroImageItem from "../assets/headphone-hero.png";
import { HComp } from "./HeroComponent";

function Hero() {
  return (
    <HComp.Root heroBg={"hero-home-bg"}>
      <HComp.Left>
        <HComp.Title>
          <HComp.Accent color={"accent-blue"}>Immerse Yourself:</HComp.Accent>{" "}
          Unveiling the Ultimate Sound Experience with the new
          <HComp.Accent color={"accent-blue"}> Sony Headphone</HComp.Accent>
        </HComp.Title>

        <HComp.Description>
          Experience the
          <HComp.Accent color={"accent-blue"}>
            Sony Noise-Cancelling Headset:{" "}
          </HComp.Accent>
          unparalleled sound quality for music, gaming, and calls with
          industry-leading
          <HComp.Accent color={"accent-blue"}>
            {" "}
            noise cancellation.{" "}
          </HComp.Accent>
          Elevate your audio experience with the Sony and immerse yourself in
          pure sound bliss.
        </HComp.Description>

        <HComp.BuySection>
          <HComp.Button color={"btn-blue"}>BUY NOW</HComp.Button>
          <HComp.BuyMessage>
            And get a{" "}
            <HComp.Accent color={"accent-blue"} addClass={"discount"}>
              10%
            </HComp.Accent>{" "}
            discount in any other product
          </HComp.BuyMessage>
        </HComp.BuySection>
      </HComp.Left>

      <HComp.Right imgSrc={heroImageItem} bgDivClassName={"blob-div"} />
    </HComp.Root>
  );
}

export default Hero;
