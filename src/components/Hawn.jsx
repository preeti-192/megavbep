import React from "react";
import eeger from "../assets/images/png/eegger.png"

const Hawn = () => {
  return (
    <>
      <section className="py-5 mt-5">
        <div className=" d-flex flex-column justify-content-end mb-5">
          <h2 className=" ff_Montserrat fw-normal fs_6xl fc_dark text-end mb-0">
            НАШИ
          </h2>
          <h3 className=" ff_Montserrat fw-bold fs_6xl fc_dark text-end">
            ПАРТНЕРЫ
          </h3>
        </div>
        <div className=" vh_100">
          <img src={eeger} alt="eeger" className="w-100 h-100" />
        </div>
      </section>
    </>
  );
};

export default Hawn;
