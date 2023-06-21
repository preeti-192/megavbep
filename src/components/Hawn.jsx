import React from "react";
import eeger from "../assets/videos/partnerss.mp4";

const Hawn = () => {
  return (
    <>
      <section className="py-lg-0 py-xl-5 mt-5 max_w1920 mx-auto">
        <div className=" d-flex flex-column justify-content-end mb-sm-5 mb-4">
          <h2 className=" ff_Montserrat fw-normal fs_6xl fc_dark text-end mb-0">
            НАШИ
          </h2>
          <h3 className=" ff_Montserrat fw-bold fs_6xl fc_dark text-end mb-0">
            ПАРТНЕРЫ
          </h3>
        </div>
        <div className=" position-relative">
          <video
            className="w-100 h-100 object-fit-cover"
            muted
            autoPlay={"autoplay"}
            preload="auto"
            loop
            src={eeger}
          ></video>
        </div>
      </section>
    </>
  );
};

export default Hawn;
