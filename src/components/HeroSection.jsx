import React from "react";
import LabsNavbar from "./LabsNavbar";
import heroIcon from "../assets/image/HeroIcon.webp";

const HeroSection = () => {
  return (
    <div className="d-flex flex-column vh_100 Bg_heroImg  position-relative z-2">
      <div>
        <LabsNavbar />
      </div>
      <div className="d-flex justify-content-center align-items-center flex_grow flex-column container">
        <h1
          data-aos="zoom-in"
          data-aos-duration="5000"
          className="ff_Roboto fw-bold fs_3xl text_Main text-center lh_86 mb-0"
        >
          Changing the way games <span className="d-lg-block">are made</span>
        </h1>
        <p className="ff_Roboto fw-normal fs_md lh_28 text-center text_Main pt-3 mb-0 ">
          Redefining the future of play
        </p>
      </div>
      <div className="HeroIcon">
        <img className="w-100" src={heroIcon} alt="HeroIcon" />
      </div>
    </div>
  );
};

export default HeroSection;
