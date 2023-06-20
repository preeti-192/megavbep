import React from "react";
import NavigationBar from "./NavigationBar";
import heroVideo from "../assets/images/videos/kitchen-main.mp4";
import logoSite from "../assets/images/webp/megaLogo.webp";
const HeroSecttion = () => {
  return (
    <div>
      <header className="d-flex flex-column min_vh_xl_100">
        <NavigationBar />
        <section className="flex-grow-1 position-relative py-1">
          <div className="py-5 mb-sm-5 position-relative z-1 d-flex justify-content-center flex-column align-items-center px-2">
            <img className="logoHero mb-lg-3" src={logoSite} alt="img" />
            <h1 className="ff_Forum fw-normal pt-1 fs_xl fc_light pb-lg-5 text-center">
              МЕБЕЛЬНАЯ ФАБРИКА
            </h1>
            <h2 className="ff_Forum fw-normal fs_md fc_light pt-5 mt-md-5 pb-4 mb-1 text-center">
              ХОТИТЕ ПОЛУЧИТЬ БЫСТРЫЙ РАСЧЕТ?
            </h2>
            <button className="fw-normal fs_md ff_Montserrat fc_light bg-transparent heroBtn">ОСТАВИТЬ ЗАЯВКУ</button>
            <h5 className="fw-normal fs_xsm ff_Montserrat fc_light pt-4 mt-1 text-center">Бесплатный замер</h5>
          </div>
          <video
            muted
            autoPlay={"autoplay"}
            preLoad="auto"
            loop
            className="w-100 h-100 object-fit-cover position-absolute start-0 top-0 z-1"
            src={heroVideo}
          ></video>
        </section>
      </header>
    </div>
  );
};

export default HeroSecttion;
