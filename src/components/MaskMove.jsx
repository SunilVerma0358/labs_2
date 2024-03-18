import React from "react";
import MaskMoveImg from "../assets/image/MaskMove.webp";
const MaskMove = () => {
  return (
    <div className="bg-black py-5">
      <div className="container my-sm-5 position-relative z-1">
        <div className="makeMoveLayer"></div>
        <div>
          <img className="w-100 border_r" src={MaskMoveImg} alt="img" />
        </div>
        <div className="row pt-4">
          <div className="col-md-4 col-12 ">
            <div className="nameBtn">
              <button className="ff_Roboto fw-bold fs_xmd lh_27 text_Main nameBtn2 gaming_btnPadding">
                name@domain.com
              </button>
            </div>
            <button className="Nav_btn Padding_btnMove  mt-4 ms-sm-3 ms-md-0">
              Make Your Move
            </button>
          </div>
          <div className="col-md-8 col-12 pt-4 pt-md-0 ">
            <p className="ff_Roboto fw-normal fs_sm lh_24 text_gray  mb-0">
              Unveiled is a unique
              <a href="#" className="text_Main fw-semibold ">
                {" "}
                collectible card game{" "}
              </a>{" "}
              in which you gain fervour for your ventures, spending it on
              mercenaries, spies, automata, and influence.
            </p>
            <p className="ff_Roboto fw-normal fs_sm lh_24 text_gray pt-3 mb-0">
              You play{" "}
              <a href="#" className="text_Main fw-semibold">
                {" "}
                a rogue merchant trader{" "}
              </a>
              allied to a noble house, alongside your{" "}
              <a href="#" className="text_Main fw-semibold">
                {" "}
                cryptid-humanoid companions{" "}
              </a>{" "}
              in a game of ambition and alliance, deception and miracles,
              manipulation and annihilation. Bells chime in the harbour, and
              markets are opening. Guards have swept the streets of the more
              obvious dangers.{" "}
            </p>{" "}
            <p className="ff_Roboto fw-semibold fs_sm lh_24 text_Main pt-3 mb-0">
              {" "}
              What’s your next move?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaskMove;
