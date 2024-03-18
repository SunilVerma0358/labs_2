import React from "react";

const NextSection = () => {
  return (
    <div className="nextBg min_h_600 d-flex justify-content-center align-items-center position-relative z-1">
      <div className="container text-center">
        <h2 className="ff_Roboto fw-bold fs_2xl lh_62 text_Main mb-0">
          What’s Next
        </h2>
        <p className="ff_Roboto fw-semibold fs_sm lh_24 text_Main  mb-0 pt-3">
          92% of gamers have never even tried a Web3 game. We’re going to change
          that.
        </p>
        <p className="ff_Roboto fw-normal fs_sm lh_24 text_Main opacity_7 pt_12 mb-0">
          {" "}
          248Labs The market is worth about a gazillion dollars, so whatever
          those stats were, that goes here.
        </p>
        <button className="Nav_btn paddingBtnTake mt-4 ">Try to keep up</button>
      </div>
      <div className="LayerImg"></div>
      <div className="LayerImgBottom"></div>
    </div>
  );
};

export default NextSection;
