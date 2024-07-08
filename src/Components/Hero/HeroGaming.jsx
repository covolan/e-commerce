import React from "react";
import { HComp } from "./HeroComponent";
import heroImageItem from "../assets/keyboard-hero.png";
import { Link } from "react-router-dom";

export default function HeroGaming() {
  const yellow = "accent-yellow";

  return (
    <HComp.Root heroBg={"hero-gaming-bg"}>
      <Link to={"/product/14"}>
        <HComp.Right
          imgSrc={heroImageItem}
          bgDivClassName={"blob-div-gaming"}
        />
      </Link>

      <HComp.Left>
        <HComp.Title>
          <HComp.Accent color={yellow}>
            Unleash Your Gaming Potential with HyperX:
          </HComp.Accent>{" "}
          Elevate Your Play with Our
          <HComp.Accent color={yellow}> Elite Keyboards!</HComp.Accent>
        </HComp.Title>

        <HComp.Description>
          Join the ranks of elite gamers who trust{" "}
          <HComp.Accent color={yellow}>HyperX</HComp.Accent> to deliver the
          performance they demand.{" "}
          <HComp.Accent color={yellow}>
            Elevate your gaming experience
          </HComp.Accent>{" "}
          today with a HyperX keyboard and witness the difference in your
          gameplay and to endure the toughest challenges and{" "}
          <HComp.Accent color={yellow}>
            complement your setup with flair.
          </HComp.Accent>
        </HComp.Description>

        <HComp.BuySection>
          <Link to={"/product/14"}>
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
