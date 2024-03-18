import React from "react";
import MoblieVideoImg from "../assets/image/MovieVideoImg.webp";
import playsvg from "../assets/iconSvg/playSvg.svg";
const Licensable = () => {
  return (
    <div className="py-5 bg-black">
      <div className="container">
        <h2 className="ff_Roboto fw-bold lh_67 fs_2xl text_Main text-center mb-0">
          A rich, inhabited, and licensable world.
        </h2>
        <div className="pt-4 pt-sm-5 position-relative z-1">
          <div className="worldLayer"></div>
          <img className="w-100 border_r" src={MoblieVideoImg} alt="Img" />
          <div className="circle">
            <img className="w-25" src={playsvg} alt="svg" />
          </div>
        </div>
        <p className="ff_Roboto fw-normal fs_sm lh_24 text_Main opacity_7 text-center mb-0 pt-4">
          Illustrated with original artwork and a cinematic score, destined not
          only for mobile and desktop gaming but
          <span className="d-sm-block">
            also for film and television, events, merchandising, and
            partnerships.
          </span>
        </p>
      </div>
    </div>
  );
};

export default Licensable;
