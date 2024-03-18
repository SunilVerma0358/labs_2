import React from "react";
import { AboutCard } from "./common/Helper";

const AboutUs = () => {
  return (
    <>
      <div
        id="About"
        className="py-sm-5 bg-black position-relative z-1 overflow-hidden"
      >
        <div className="AboutLeftLayer d-none d-sm-block"></div>
        <div className="container  mt-5 pt-sm-5">
          <div className="border_color">
            <div className="border_color2">
              <div className="overTalkes">
                <button className="overTalkes_btn ff_Roboto fs_sm fw-normal">
                  DOERS OVER TALKERS
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-12">
              <h2 className="ff_Roboto fw-bold fs_2xl lh_62 text_Main mb-0 pt-3 pt-sm-1">
                Game <span className="d-sm-block">First.Always.</span>
              </h2>
            </div>
            <div className="col-md-6 col-12 pt-4 pt-md-0">
              <h2 className="ff_Roboto fw-bold fs_4xl lh_224 opacity_6 mb-0 text_Main animationText">
                About Us
              </h2>
              <p className="ff_Roboto fw-semibold fs_sm lh_24 mb-0 text_Main">
                This is difficult
              </p>
              <p className="ff_Roboto fw-normal fs_sm lh_24 pt_12 mb-0 text_Main opacity_7">
                Web3 Games have a notoriously high barrier-to-entry for casual
                gamers who make up the vast majority of players. “Link your
                wallet” before gameplay is not just off-putting, it’s boring.
                We’re solving that with world-class storytelling,
                world-building, game design, art and sound. And fun.
              </p>
            </div>
          </div>
          <div className="row py_110">
            {AboutCard.map((props, i) => (
              <div
                key={i}
                data-aos={props.aosAbout}
                className="col-lg-4 col-md-6 col-12 pt-4 pt-sm-5 pt-lg-0"
              >
                <div className="Card_About2 ">
                  <div className="Card_About">
                    <h3 className="text_Main  ff_Roboto fw-bold fs_xl lh_38 mb-0">
                      {props.Heading}
                    </h3>{" "}
                    <p className="ff_Roboto fw-normal fs_sm lh_24 text_Main lh_24 mb-0 pt-3 opacity_7">
                      {props.Phara}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
