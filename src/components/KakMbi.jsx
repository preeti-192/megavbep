import React, { useRef } from "react";
import Slider from "react-slick";
import insta from "../assets/images/png/instagram_logo.png";
import chat from "../assets/images/png/chat-bubble.png";
import home from "../assets/images/png/home.png";
import kitchen from "../assets/images/png/kitchen.png";
import prevArrow from "../assets/images/png/kakPrevArrow.png";
import nextArrow from "../assets/images/png/kakNextArrow.png";
import { Col, Row } from "react-bootstrap";

const KakMbi = () => {
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
      <section className="py-5">
        <div className="ps-lg-5 ps-2">
          <h2 className=" ff_Montserrat fw-normal fs_6xl text-uppercase fc_dark mb-0">
            КАК МЫ
          </h2>
          <h3 className=" ff_Montserrat fw-bold fs_6xl text-uppercase fc_dark">
            РАБОТАЕМ?
          </h3>
        </div>
        <Row className="align-items-center">
          <Col lg={5} className="bg_dark ps-4 pt-4 pe-0">
            <h2 className=" ff_Montserrat fw-bold fc_light fs_2xl text-uppercase mb-xxl-5 mb-3">
              получите консультацию специалиста
            </h2>
            <p className=" ff_Montserrat fw-bold fc_white fs_md pe-lg-5 pb-xxl-5">
              Оставьте свои данные для обратной связи
            </p>
            <div className="d-flex justify-content-between align-items-center my-5 px-lg-5 me-5">
              <img src={chat} alt="chat" className="mw_77 kak_icon" />
              <img src={insta} alt="insta" className="mw_77 kak_icon" />
              <img src={home} alt="home" className="mw_77 kak_icon" />
            </div>
            <div className="d-flex justify-content-end">
              <button
                onClick={() => slider.current.slickPrev()}
                className=" kakSliderPrevArrows px-5 py-1"
              >
                <img src={prevArrow} alt="prevArrow" />
              </button>
              <button
                onClick={() => slider.current.slickNext()}
                className="border-0 px-5 py-1"
              >
                <img src={nextArrow} alt="nextArrow" />
              </button>
            </div>
          </Col>
          <Col xxl={7} lg={7} className="ps-0">
            <Slider ref={slider} {...settings}>
              <img src={kitchen} alt="kitchen" className="w-100 h-100" />
              <img src={kitchen} alt="kitchen" className="w-100 h-100" />
            </Slider>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default KakMbi;
