import React from "react";
import Logo from "../assets/image/Logo_Img.webp";
import { Facebook, Insta, LinkDin, Twitter } from "./common/SvgExport";
const Footer = () => {
  const currentYear = new Date();
  const year = currentYear.getFullYear();
  return (
    <div className="bg-black position-relative z-1  overflow-hidden">
      <div className="container text-center pt-5 ">
        <a href="#Logo" className="">
          <img className="max_w_246" src={Logo} alt="Logo" />
        </a>
        <ul className="d-flex align-items-center gap-4 justify-content-center pt-3 mb-0 ps-0 ">
          <li>
            <a
              href="#Home"
              className="ff_Roboto fw-normal text_gray fs_sm underline-hover"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#Roadmap"
              className="ff_Roboto fw-normal text_gray fs_sm underline-hover"
            >
              Roadmap
            </a>
          </li>
          <li>
            <a
              href="#OurTeam"
              className="ff_Roboto fw-normal text_gray fs_sm underline-hover"
            >
              Team
            </a>
          </li>
          <li>
            <a
              href="#About"
              className="ff_Roboto fw-normal text_gray fs_sm underline-hover"
            >
              About Us
            </a>
          </li>
        </ul>
        <div className="d-flex align-items-center gap-4 justify-content-center pt-4 pb_43">
          <a
            href="https://twitter.com/radialcode?lang=en"
            target="blank"
            className="borderIcon  "
          >
            <Twitter />
          </a>
          <a
            href="https://www.facebook.com/radialcode/"
            target="blank"
            className="borderIcon"
          >
            <Facebook />
          </a>
          <a
            href="https://www.instagram.com/radialcode/?hl=en"
            target="blank"
            className="borderIcon"
          >
            <Insta />
          </a>
          <a
            href="https://www.linkedin.com/company/radialcode/?originalSubdomain=in"
            target="blank"
            className="borderIcon "
          >
            <LinkDin />
          </a>
        </div>
      </div>
      <div className="border_t text-center ff_Roboto fw-normal fs_xsm lh_18 text_Main opacity_7">
        © {year} 248 Labs. All rights reserved
      </div>

      <div className="footerLeftLayer"></div>
      <div className="footerRightLayer"></div>
    </div>
  );
};

export default Footer;
