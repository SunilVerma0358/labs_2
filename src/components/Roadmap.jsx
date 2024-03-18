import React from "react";
import LineIcon from "../assets/image/LineLogo.webp";
import Star from "../assets/image/star.webp";
import IndiaFlag from "../assets/image/indiaflag.webp";
import UsFlag from "../assets/image/usflag.webp";
import Amrica from "../assets/image/amrica.webp";
const Roadmap = () => {
  return (
    <div
      id="Roadmap"
      className="position-relative z-1 overflow-hidden TimeLingBg pb-lg-5"
    >
      <div className="RoadmapLayer"></div>
      <div className="RoadMapLeftLayer"></div>
      <div className="container py-5">
        {" "}
        <h2 className="ff_Roboto fw-bold fs_4xl lh_224 RoadMapPostion mb-0 text_Main animationText ">
          Roadmap
        </h2>
        <div className="text-center">
          {" "}
          <div className="border_color mt_150">
            <div className="border_color2">
              <div className="overTalkes">
                <button className="overTalkes_btn">Road map</button>
              </div>
            </div>
          </div>
        </div>
        <h2 className="ff_Roboto fw-bold fs_2xl lh_62 text_Main text-center pt-3 mb-0 ">
          Milestones and markers
        </h2>
        <div class="timeline1  pt-5 mt_150">
          <div className="LineLogo">
            <img className="w-100" src={LineIcon} alt="LineIcon" />
          </div>
          <div class="container1 pt-4 pt-sm-5 right">
            <div data-aos="zoom-out" className="Content2 ">
              <div class="content">
                <h2 className="text-center Text_gradient">Oct 2014</h2>
                <p className="text-center ff_Roboto fw-normal fs_md lh_24 text_Main opacity_7 mb-0 ">
                  Hired our first employee
                </p>
              </div>
            </div>
          </div>
          <div class="container1 pt-4 pt-sm-5 mt-lg-5 left">
            <div data-aos="zoom-out" className="Content2">
              <div class="content">
                <h2 className="text-center Text_gradient">Oct 2014</h2>
                <p className="text-center ff_Roboto fw-normal fs_md lh_24 text_Main opacity_7 mb-0 ">
                  Launched Bitcoin wallet
                </p>
              </div>
            </div>
          </div>
          <div class="container1 mt-lg-5 pt-4 pt-sm-5 right">
            <div data-aos="zoom-out" className="Content2">
              <div class="content">
                <h2 className="text-center Text_gradient">Oct 2015</h2>
                <p className="text-center ff_Roboto fw-normal fs_md lh_24 text_Main opacity_7 mb-0 ">
                  1st prize by Bit angels at Coin Agenda,
                  <span className="d-lg-block"> Las Vegas</span>
                </p>
              </div>
            </div>
          </div>
          <div class="container1 pt-4 pt-sm-5 mt-lg-5 left">
            <div data-aos="zoom-out" className="Content2">
              <div class="content">
                <h2 className="text-center Text_gradient">Jan 2020</h2>
                <p className="text-center ff_Roboto fw-normal fs_md lh_24 text_Main opacity_7 mb-0 d-sm-flex align-items-center gap-2 justify-content-center ">
                  launch On{" "}
                  <span className="d-flex align-items-center gap-3 pt-3 pt-sm-0">
                    <img className="w-25" src={IndiaFlag} alt="india" />
                    <img className="w-25" src={UsFlag} alt="india" />
                    <img className="w-25" src={Amrica} alt="india" />
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div class="container1 mt-lg-5 pt-4 pt-sm-5 right">
            <div data-aos="zoom-out" className="Content2">
              <div class="content">
                <h2 className="text-center Text_gradient">Jan 2022</h2>
                <p className="text-center ff_Roboto fw-normal fs_md lh_24 text_Main opacity_7 mb-0 ">
                  Trusted by 10 Millions+ Users{" "}
                  <span className="d-lg-block  pt-2">
                    {" "}
                    <img className="w-25" src={Star} alt="india" />
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
