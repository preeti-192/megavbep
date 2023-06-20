import React, { useRef } from "react";
import Slider from "react-slick";
import strings from "../assets/images/png/strings.png";
import prevArrow from "../assets/images/png/prevArrow.png";
import nextArrow from "../assets/images/png/nextArrow.png";

const OctaSlider = () => {
  const slider = useRef();
  var settings = {
    dots: false,
    infinite: true,
    speed: 300,
    cssEase: "linear",
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="py-5 my-md-5">
        <div className="container OctaContainer py-5">
          <h1 className=" ff_Montserrat fw-normal fs_6xl fc_dark mb-0">
            ОСТАВЬТЕ{" "}
          </h1>
          <h2 className=" ff_Montserrat fw-bold fs_6xl fc_black mb-0">
            СВОЙ ОТЗЫВ
          </h2>
          <div className="position-relative pt-5">
            <Slider ref={slider} {...settings}>
              <div className="px-3">
                <div className="octaSliderBox d-flex flex-column justify-content-center align-items-center">
                  <img src={strings} alt="strings" className="mw_127" />
                  <h3 className=" text-center ff_Forum fw-normal fs_4xl mb-5 mt-3 fc_black">
                    Вчера все доставли и выполнили работу отлично. Спасибо,
                    Умар. Вы отличный продавец.
                  </h3>
                  <h2 className=" ff_Montserrat fw-bold fs_3xl fc_black text-center">
                    АЛЕКСАНДР
                  </h2>
                  <p className=" ff_Forum fs_3xl fw-normal fc_black text-center">
                    +7 778 *** ** 64
                  </p>
                </div>
              </div>
              <div className="px-3">
                <div className="octaSliderBox d-flex flex-column justify-content-center align-items-center">
                  <img src={strings} alt="strings" className="mw_127" />
                  <h3 className=" text-center ff_Forum fw-normal fs_4xl mb-5 mt-3 fc_black">
                    Вчера все доставли и выполнили работу отлично. Спасибо,
                    Умар. Вы отличный продавец.
                  </h3>
                  <h2 className=" ff_Montserrat fw-bold fs_3xl fc_black text-center">
                    АЛЕКСАНДР
                  </h2>
                  <p className=" ff_Forum fs_3xl fw-normal fc_black text-center">
                    +7 778 *** ** 64
                  </p>
                </div>
              </div>
              <div className="px-3">
                <div className="octaSliderBox d-flex flex-column justify-content-center align-items-center">
                  <img src={strings} alt="strings" className="mw_127" />
                  <h3 className=" text-center ff_Forum fw-normal fs_4xl mb-5 mt-3 fc_black">
                    Вчера все доставли и выполнили работу отлично. Спасибо,
                    Умар. Вы отличный продавец.
                  </h3>
                  <h2 className=" ff_Montserrat fw-bold fs_3xl fc_black text-center">
                    АЛЕКСАНДР
                  </h2>
                  <p className=" ff_Forum fs_3xl fw-normal fc_black text-center">
                    +7 778 *** ** 64
                  </p>
                </div>
              </div>
            </Slider>
            <img
              src={prevArrow}
              alt="prevArrow"
              className="mw_127 position-absolute start_40 top-50"
              onClick={() => slider.current.slickPrev()}
            />
            <img
              src={nextArrow}
              alt="nextArrow"
              className="mw_127 position-absolute end_40 top-50"
              onClick={() => slider.current.slickNext()}
            />
          </div>
          <div className=" d-flex justify-content-center mt-4 pt-3">
            <button className="bg-transparent ff_Montserrat fc_black fw-normal fs_5xl octa_btn">
              ОСТАВИТЬ ОТЗЫВ
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default OctaSlider;
