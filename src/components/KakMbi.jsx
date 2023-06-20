import React, { useRef } from "react";
import Slider from "react-slick";
import insta from "../assets/images/png/instagram_logo.png";
import chat from "../assets/images/png/chat-bubble.png";
import home from "../assets/images/png/home.png";
import kitchen from "../assets/images/webp/kitchen.webp";
import sofa from "../assets/images/webp/sofa_img.webp";
import lights from "../assets/images/webp/lights_img.webp";
import room from "../assets/images/webp/kak_room.webp";
import sofa2 from "../assets/images/webp/kak_sofa.webp";
import prevArrow from "../assets/images/png/kakPrevArrow.png";
import nextArrow from "../assets/images/png/kakNextArrow.png";
import { Col, Row } from "react-bootstrap";

const KakMbi = () => {
  const slider = useRef();
  const slider2 = useRef();
  var settings = {
    dots: false,
    infinite: true,
    speed: 300,
    cssEase: "linear",
    arrows: false,
    fade: true,
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
      <section className="py-5 position-relative">
        <div className="ps-lg-5 ps-2">
          <h2 className="ff_Montserrat fw-normal fs_6xl text-uppercase fc_dark mb-0">
            КАК МЫ
          </h2>
          <h3 className="ff_Montserrat fw-bold fs_6xl text-uppercase fc_dark">
            РАБОТАЕМ?
          </h3>
        </div>
        <div class="slick-counter d-lg-flex d-none">
          <span class="current ff_Montserrat fw-bold fs_6xl fc_dark lh_122">
            01
          </span>
          <span class="total ff_Montserrat fw-bold fs_4xl fc_dark"> / 06</span>
        </div>
        <Row className="align-items-center">
          <Col xl={5} lg={6} className="bg_dark ps-4 pt-4 pe-0">
            <Slider ref={slider2} {...settings}>
              <div>
                <h2 className="ff_Montserrat fw-bold fc_light fs_2xl text-uppercase mb-xxl-5 mb-3">
                  получите консультацию специалиста
                </h2>
                <p className="ff_Montserrat fw-bold fc_white fs_md pe-lg-5 pb-xxl-5">
                  Оставьте свои данные для обратной связи
                </p>
              </div>
              <div>
                <h2 className="ff_Montserrat fw-bold fc_light fs_2xl text-uppercase mb-xxl-5 mb-3">
                  получите конльтацию спецалиста конльтацию
                </h2>
                <p className="ff_Montserrat fw-bold fc_white fs_md pe-lg-5 pb-xxl-5">
                  Оставьте обратной связи спецалиста
                </p>
              </div>
            </Slider>
            <div className="d-flex gap-5 align-items-center my-5 px-lg-5 me-5 social_icons">
              <a href="#">
                <img src={chat} alt="chat" className="mw_77 kak_icon" />
              </a>
              <a href="#">
                <img
                  src={insta}
                  alt="insta"
                  className="mw_77 mx-lg-5 kak_icon"
                />
              </a>
              <a href="#">
                <img src={home} alt="home" className="mw_77 kak_icon" />
              </a>
            </div>
            <div className="d-flex justify-content-end">
              <button
                onClick={() => {
                  slider.current.slickPrev();
                  slider2.current.slickPrev();
                }}
                className="kakSliderPrevArrows px-5 py-1"
              >
                <img src={prevArrow} alt="prevArrow" />
              </button>
              <button
                onClick={() => {
                  slider.current.slickNext();
                  slider2.current.slickNext();
                }}
                className="border-0 px-5 py-1"
              >
                <img src={nextArrow} alt="nextArrow" />
              </button>
            </div>
          </Col>
          <Col xl={7} lg={6} className="ps-0 h-100">
            <Slider ref={slider} {...settings}>
              <img src={kitchen} alt="kitchen" className="w-100 h-100" />
              <img src={sofa} alt="sofa" className="w-100 h-100" />
              <img src={lights} alt="lights" className="w-100 h-100" />
              <img src={room} alt="room" className="w-100 h-100" />
              <img src={sofa2} alt="sofa2" className="w-100 h-100" />
            </Slider>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default KakMbi;
