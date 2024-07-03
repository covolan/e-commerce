import React from "react";
import { HComp } from "./HeroComponent";
import heroImageItem from "../assets/headphone-hero.png";

export default function HeroOffice() {
  const yellow = "accent-yellow";

  return (
    <HComp.Root heroBg={"hero-bg"}>
      <HComp.Right imgSrc={heroImageItem} bgDivClassName={"blob-div-office"} />

      <HComp.Left>
        <HComp.Title>
          <HComp.Accent color={yellow}>Immerse Yourself:</HComp.Accent>{" "}
          Unveiling the Ultimate Sound Experience with the new
          <HComp.Accent color={yellow}> Sony Headphone</HComp.Accent>
        </HComp.Title>

        <HComp.Description>
          Experience the
          <HComp.Accent color={yellow}>
            {" "}
            Sony Noise-Cancelling Headset:{" "}
          </HComp.Accent>
          unparalleled sound quality for music, gaming, and calls with
          industry-leading
          <HComp.Accent color={yellow}> noise cancellation. </HComp.Accent>
          Elevate your audio experience with the Sony and immerse yourself in
          pure sound bliss.
        </HComp.Description>

        <HComp.BuySection>
          <HComp.Button color={"btn-yellow"}>BUY NOW</HComp.Button>
          <HComp.BuyMessage>
            And get a{" "}
            <HComp.Accent color={yellow} addClass={"discount"}>
              10%
            </HComp.Accent>{" "}
            discount in any other product
          </HComp.BuyMessage>
        </HComp.BuySection>
      </HComp.Left>
    </HComp.Root>
  );
}
