import React from "react";
import "./Hero.css";
import heroImageItem from "../assets/headphone-hero.png";
import { HComp } from "./HeroComponent";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <HComp.Root heroBg={"hero-home-bg"}>
      <HComp.Left>
        <HComp.Title>
          <HComp.Accent color={"accent-blue"}>
            Immerse Yourself in Gaming Excellence with Fortrek:
          </HComp.Accent>{" "}
          Precision Sound for
          <HComp.Accent color={"accent-blue"}> Every Battle!</HComp.Accent>
        </HComp.Title>

        <HComp.Description>
          Dive into gaming excellence with{" "}
          <HComp.Accent color={"accent-blue"}>
            {" "}
            Fortrek gaming headsets{" "}
          </HComp.Accent>
          , designed to deliver{" "}
          <HComp.Accent color={"accent-blue"}>
            {" "}
            superior sound quality{" "}
          </HComp.Accent>{" "}
          and comfort. Fortrek ensures clear communication and immersive gaming
          experiences, whether you're competing or exploring virtual realms.
          With{" "}
          <HComp.Accent color={"accent-blue"}>
            {" "}
            ergonomic designs{" "}
          </HComp.Accent>{" "}
          for prolonged comfort and durability. Upgrade your gaming setup today
          and immerse yourself in{" "}
          <HComp.Accent color={"accent-blue"}>
            {" "}
            precision sound{" "}
          </HComp.Accent>{" "}
          for every battle.
        </HComp.Description>

        <HComp.BuySection>
          <Link to={"/e-commerce/product/13"}>
            <HComp.Button color={"btn-blue"}>BUY NOW</HComp.Button>
          </Link>
          <HComp.BuyMessage>
            And get a{" "}
            <HComp.Accent color={"accent-blue"} addClass={"discount"}>
              10%
            </HComp.Accent>{" "}
            discount in any other product
          </HComp.BuyMessage>
        </HComp.BuySection>
      </HComp.Left>

      <Link to={"/e-commerce/product/13"}>
        <HComp.Right imgSrc={heroImageItem} bgDivClassName={"blob-div"} />
      </Link>
    </HComp.Root>
  );
}

export default Hero;
