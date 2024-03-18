import React from "react";
import { OurTeamCard } from "./common/Helper";

const OurTearm = () => {
  return (
    <div
      id="OurTeam"
      className="bg-black position-relative py-5 z-1 overflow-hidden"
    >
      <div className="worldRightLayer"></div>
      <div className="worldLeftLayer"></div>
      <div className="container">
        <h2 className="ff_Roboto fw-bold fs_4xl lh_224 TextPostion mb-0 text_Main animationText">
          Our Team
        </h2>
        <div className="text-center">
          {" "}
          <div className="border_color  mt_150">
            <div className="border_color2">
              <div className="overTalkes">
                <button className="overTalkes_btn ff_Roboto fw-semibold">
                  Our Team
                </button>
              </div>
            </div>
          </div>
        </div>
        <h2 className="ff_Roboto fw-bold fs_2xl lh_67 text-center text_Main mb-0 pt-4">
          Behind our expertise
        </h2>
        <div className="row">
          {OurTeamCard.map((props, i) => (
            <div key={i} className="col-lg-6 col-12 pt-4 ">
              <div data-aos={props.aos} className="OurTeam_card">
                <div className="d-sm-flex align-items-center gap_12">
                  <div>
                    <img
                      className="w-100 border_r"
                      src={props.CoImg}
                      alt="img"
                    />
                  </div>
                  <div className="pt-sm-2 pt-4">
                    <h3 className="ff_Roboto fw-semibold fs_md lh_24 text_Main d-flex flex-wrap">
                      {props.HeadingThree}
                      <span className="Text_gradient ps-1"> {props.Phara}</span>
                    </h3>
                    <p className="ff_Roboto fw-normal fs_sm lh_24 text_gray pe-xl-2 mb-0">
                      {props.PharaOne}
                    </p>
                  </div>
                </div>{" "}
                <p className="ff_Roboto fw-normal fs_sm lh_24 text_gray pt_10 mb-0">
                  {props.PharaTwo}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTearm;
