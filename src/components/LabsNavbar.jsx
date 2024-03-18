import React, { useState } from "react";
import Logo from "../assets/image/Logo_Img.webp";
const LabsNavbar = () => {
  const [nav, setNav] = useState(false);
  function setopen() {
    setNav(!nav);
    if (nav === false) {
      document.body.classList.add("overflow");
    } else {
      document.body.classList.remove("overflow");
    }
  }
  return (
    <>
      <nav className=" container py_19">
        <div className="row align-items-center justify-content-between ">
          <div className="col-auto">
            <a href="#" className="max_w_246">
              <img className="max_w_246 w-100" src={Logo} alt="Logo" />
            </a>
          </div>
          <div className="col-auto">
            <div className=" d-flex align-items-center gap-3 gap-lg-4">
              <ul
                className={`${
                  nav ? "end-0" : ""
                } d-flex align-items-center gap-3 gap-lg-4 mb-0 ps-0 my_nav`}
              >
                <li>
                  <a
                    href="#About"
                    onClick={setopen}
                    className="nav_link underline-hover "
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#OurTeam"
                    onClick={setopen}
                    className="nav_link underline-hover "
                  >
                    Our Team
                  </a>
                </li>
                <li>
                  <a
                    href="#Roadmap"
                    onClick={setopen}
                    className="nav_link underline-hover "
                  >
                    Roadmap
                  </a>
                </li>

                <a href="#" className="Nav_btn d-sm-none Nav_btnPadding">
                  Contact Us
                </a>
              </ul>
              <button className="Nav_btn d-none d-sm-block Nav_btnPadding">
                Contact Us
              </button>
              <div onClick={setopen}>
                {nav ? (
                  <div className=" icon d-flex d-md-none flex-column justify-content-between position-relative z-3">
                    <span className=" span1 crossLine1"></span>
                    <span className=" span3 crossLine2"></span>
                  </div>
                ) : (
                  <div className="  icon d-flex d-md-none flex-column justify-content-between">
                    <span className=" span1"></span>
                    <span className=" position-relative span2"></span>
                    <span className=" span3"></span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default LabsNavbar;
