import React, { useRef } from "react";
import Slider from "react-slick";
import strings from "../assets/images/webp/strings.webp";
import prevArrow from "../assets/images/webp/prevArrow.webp";
import nextArrow from "../assets/images/webp/nextArrow.webp";

const OctaSlider = () => {
  const slider = useRef();
  var settings = {
    dots: false,
    infinite: true,
    speed: 300,
    cssEase: "linear",
    arrows: false,
    slidesToShow: 1,
    fade: true, 
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
      <section className="py-5 py-lg-0 py-xl-5 my-md-5 my-md-0" id="slider2">
        <div className="container OctaContainer py-5">
          <h1 className=" ff_Montserrat fw-normal fs_6xl fc_dark mb-0">
            ОСТАВЬТЕ
          </h1>
          <h2 className=" ff_Montserrat fw-bold fs_6xl fc_black mb-0">
            СВОЙ ОТЗЫВ
          </h2>
          <div className="position-relative pt-sm-5 pt-4">
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
                    Вчера все доставли и работу отлично. Спасибо, Умар. Вы
                    отличный выполнили продавец.
                  </h3>
                  <h2 className=" ff_Montserrat fw-bold fs_3xl fc_black text-center">
                    продавец
                  </h2>
                  <p className=" ff_Forum fs_3xl fw-normal fc_black text-center">
                    +6 878 *** ** 65
                  </p>
                </div>
              </div>
              <div className="px-3">
                <div className="octaSliderBox d-flex flex-column justify-content-center align-items-center">
                  <img src={strings} alt="strings" className="mw_127" />
                  <h3 className="text-center ff_Forum fw-normal fs_4xl mb-5 mt-3 fc_black">
                    отличный Вчера все доставли и работу отлично. Спасибо, Умар.
                    Вы выполнили продавец.
                  </h3>
                  <h2 className="ff_Montserrat fw-bold fs_3xl fc_black text-center">
                    выполнили
                  </h2>
                  <p className="ff_Forum fs_3xl fw-normal fc_black text-center">
                    +9 485 *** ** 64
                  </p>
                </div>
              </div>
            </Slider>
            <img
              src={prevArrow}
              alt="prevArrow"
              className="mw_127 SliderArrows position-absolute start_40 top-50 Cursor_Pointer"
              onClick={() => slider.current.slickPrev()}
            />
            <img
              src={nextArrow}
              alt="nextArrow"
              className="mw_127 SliderArrows position-absolute end_40 top-50 Cursor_Pointer"
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
