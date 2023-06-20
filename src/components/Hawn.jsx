import React from "react";
import eeger from "../assets/videos/partnerss.mp4";

const Hawn = () => {
  return (
    <>
      <section className="py-lg-0 py-xl-5 mt-5">
        <div className=" d-flex flex-column justify-content-end mb-5">
          <h2 className=" ff_Montserrat fw-normal fs_6xl fc_dark text-end mb-0">
            НАШИ
          </h2>
          <h3 className=" ff_Montserrat fw-bold fs_6xl fc_dark text-end">
            ПАРТНЕРЫ
          </h3>
        </div>
        <div className=" vh_100">
          <video
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
