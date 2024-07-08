import React from "react";
import { HComp } from "./HeroComponent";
import heroImageItem from "../assets/webcam-hero.png";
import { Link } from "react-router-dom";

export default function HeroOffice() {
  const yellow = "accent-yellow";

  return (
    <HComp.Root heroBg={"hero-bg"}>
      <Link to={"/product/15"}>
        <HComp.Right
          imgSrc={heroImageItem}
          bgDivClassName={"blob-div-office"}
        />
      </Link>

      <HComp.Left>
        <HComp.Title>
          <HComp.Accent color={yellow}>
            Enhance Your Video Calls with IntellBrass:
          </HComp.Accent>{" "}
          Crystal Clear
          <HComp.Accent color={yellow}>Communication</HComp.Accent> at Your
          Fingertips!
        </HComp.Title>

        <HComp.Description>
          Upgrade your video calls with{" "}
          <HComp.Accent color={yellow}> IntellBrass webcams</HComp.Accent>,
          crafted for exceptional clarity and reliability. These high-definition
          cameras and noise-canceling microphones ensure you're always
          <HComp.Accent color={yellow}>
            {" "}
            seen and heard with precision
          </HComp.Accent>
          , perfect for professional meetings or virtual hangouts. Elevate your
          online interactions today—visit our to discover
          <HComp.Accent color={yellow}>
            {" "}
            IntellBrass video conferencing experience
          </HComp.Accent>
          .
        </HComp.Description>

        <HComp.BuySection>
          <Link to={"/product/15"}>
            <HComp.Button color={"btn-yellow"}>BUY NOW</HComp.Button>
          </Link>
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
