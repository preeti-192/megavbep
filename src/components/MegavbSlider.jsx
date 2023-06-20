import React, { useRef } from "react";
import Slider from "react-slick";
import mirror from "../assets/images/webp/mirror_img.webp";
import wardrobe from "../assets/images/webp/wardrobe.webp";
import kitchen1 from "../assets/images/webp/mega_kitchen.webp";
import stairs from "../assets/images/webp/stairs_img.webp";
import door from "../assets/images/webp/door_img.webp";
import prevArrow from "../assets/images/webp/prevArrow.webp";
import nextArrow from "../assets/images/webp/nextArrow.webp";

const MegavbSlider = () => {
  const slider = useRef();
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
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
              <img src={door} alt="door" className="w-100" />
            </div>
            <div className="px-2">
              <img src={kitchen1} alt="kitchen1" className="w-100" />
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
      </section>
    </>
  );
};

export default MegavbSlider;
