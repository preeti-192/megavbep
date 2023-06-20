import React, { useRef } from "react";
import Slider from "react-slick";
import mirror from "../assets/images/png/mirror_img.png";
import wardrobe from "../assets/images/png/wardrobe.png";
import stairs from "../assets/images/png/stairs_img.png";
import prevArrow from "../assets/images/png/prevArrow.png";
import nextArrow from "../assets/images/png/nextArrow.png";

const MegavbSlider = () => {
  const slider = useRef();
  var settings = {
    dots: false,
    infinite: true,
    speed: 300,
    cssEase: "linear",
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 578,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="py-5 position-relative">
        <div className="slider_shadow position-absolute end-0"></div>
        <div className="slider_shadow position-absolute start-0"></div>
        <div className="container footerContainer position-relative pt-5">
          <Slider ref={slider} {...settings} className="Portfolio_slider pt-5">
            <div className="px-2">
              <img src={mirror} alt="mirror" className="w-100" />
            </div>
            <div className="px-2">
              <img src={stairs} alt="stairs" className="w-100" />
            </div>
            <div className="px-2">
              <img src={wardrobe} alt="wardrobe" className="w-100" />
            </div>
            <div className="px-2">
              <img src={mirror} alt="morror" className="w-100" />
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
      </section>
    </>
  );
};

export default MegavbSlider;
