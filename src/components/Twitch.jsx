import React from "react";
import Slider from "react-slick";
import Ardacious from "../assets/image/Ardacious.webp";
import TwitchImage from "../assets/image/twitch.webp";
import Gamescom from "../assets/image/gamescom.webp";
import Qgraythom from "../assets/image/qgreythorm.webp";

const Twitch = () => {
  const settings = {
    dots: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="py-1">
        <div className="container py-5 my-sm-5">
          <Slider {...settings}>
            <div data-aos="zoom-in" className=" px-4 ">
              <img
                className="w_100 max_w_250 grayScale"
                src={Ardacious}
                alt="twitch"
              />
            </div>
            <div data-aos="zoom-in" className=" px-4 ">
              <img
                className="w_100 max_w_250 grayScale"
                src={TwitchImage}
                alt="twitch"
              />
            </div>
            <div data-aos="zoom-in" className=" px-4 ">
              <img
                className="w_100 max_w_250 grayScale"
                src={Gamescom}
                alt="twitch"
              />
            </div>
            <div data-aos="zoom-in" className=" px-4 ">
              <img
                className="w_100 max_w_250 grayScale"
                src={Qgraythom}
                alt="twitch"
              />
            </div>
            <div data-aos="zoom-in" className=" px-4 ">
              <img
                className="w_100 max_w_250 grayScale"
                src={TwitchImage}
                alt="twitch"
              />
            </div>
            <div data-aos="zoom-in" className=" px-4 ">
              <img
                className="w_100 max_w_250 grayScale"
                src={Gamescom}
                alt="twitch"
              />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Twitch;
