import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import GamingExp from "./components/GamingExp";
import MaskMove from "./components/MaskMove";
import Licensable from "./components/Licensable";
import OurTearm from "./components/OurTearm";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextSection from "./components/NextSection";
import FormSection from "./components/FormSection";
import Footer from "./components/Footer";
import Roadmap from "./components/Roadmap";
import Twitch from "./components/Twitch";
import BackToTop from "./components/BackToTop";
import { useEffect, useState } from "react";
import Preloader from "./components/Preloader";

function App() {
  const [Loader, setLorder] = useState(false);
  useEffect(() => {
    setLorder(true);
    setTimeout(() => {
      setLorder(false);
    }, 3500);
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: true,
    });
  }, []);
  return (
    <>
      {Loader ? (
        <>
          <Preloader />
        </>
      ) : (
        <>
          {" "}
          <div className="bg-black">
            <HeroSection />
            <Twitch />
            <AboutUs />
            <GamingExp />
            <MaskMove />
            <Licensable />
            <OurTearm />
            <NextSection />
            <Roadmap />
            <FormSection />
            <Footer />
            <BackToTop />
          </div>
        </>
      )}
    </>
  );
}

export default App;
