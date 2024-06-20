import React from "react";
import "./Hero.css";
import heroImageItem from "../assets/headphone-hero.png";
import { HComp } from "./HeroComponent";

function Hero() {
  return (
    <HComp.Root>
      <HComp.Left>
        <HComp.Title>
          <HComp.Accent>Immerse Yourself:</HComp.Accent> Unveiling the Ultimate
          Sound Experience with the new
          <HComp.Accent> Sony Headphone</HComp.Accent>
        </HComp.Title>

        <HComp.Description>
          Experience the
          <HComp.Accent> Sony Noise-Cancelling Headset: </HComp.Accent>
          unparalleled sound quality for music, gaming, and calls with
          industry-leading
          <HComp.Accent> noise cancellation. </HComp.Accent>
          Elevate your audio experience with the Sony and immerse yourself in
          pure sound bliss.
        </HComp.Description>

        <HComp.BuySection>
          <HComp.Button>BUY NOW</HComp.Button>
          <HComp.BuyMessage>
            And get a <HComp.Accent addClass={"discount"}>10%</HComp.Accent>{" "}
            discount in any other product
          </HComp.BuyMessage>
        </HComp.BuySection>
      </HComp.Left>

      <HComp.Right imgSrc={heroImageItem} bgDivClassName={"blob-div"} />
    </HComp.Root>
  );
}

export default Hero;
