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
  var settings2 = {
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
  var settings = {
    dots: true,
    infinite: true,
    speed: 300,
    cssEase: "linear",
    arrows: false,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: function (i) {
      return (
        <div class="slick-counter d-flex">
          <span class="current ff_Montserrat fw-bold fs_6xl lh_122">
           0{i + 1}
          </span>
          <span class="total ff_Montserrat fw-bold fs_4xl text-nowrap pt-2"> / 06</span>
        </div>
      );
    },
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
      <section className=" max_w1920 mx-auto py-5 mt-5 position-relative" id="slider2">
        <div className="ps-lg-5 ps-2">
          <h2 className="ff_Montserrat fw-normal fs_6xl text-uppercase fc_dark mb-0">
            КАК МЫ
          </h2>
          <h3 className="ff_Montserrat fw-bold fs_6xl text-uppercase fc_dark">
            РАБОТАЕМ?
          </h3>
        </div>
        <Row className="align-items-center">
          <Col xl={5} className="bg_dark ps-4 pt-4 pe-0">
            <Slider ref={slider2} {...settings2}>
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
                className="kakSliderPrevArrows px-md-5 px-3 py-1"
              >
                <img src={prevArrow} alt="prevArrow" className="kak_arrow" />
              </button>
              <button
                onClick={() => {
                  slider.current.slickNext();
                  slider2.current.slickNext();
                }}
                className="border-0 px-md-5 px-3 py-1"
              >
                <img src={nextArrow} alt="nextArrow" className="kak_arrow" />
              </button>
            </div>
          </Col>
          <Col
            xl={7}
            className="ps-0 h-100"
            data-aos="flip-left"
            data-aos-delay="1000"
            data-aos-offset="500"
          >
            <Slider ref={slider} {...settings} className="kakvb_img_slider">
              <img src={kitchen} alt="kitchen" className="w-100 h-100" />
              <img src={sofa} alt="sofa" className="w-100 h-100" />
              <img src={lights} alt="lights" className="w-100 h-100" />
              <img src={room} alt="room" className="w-100 h-100" />
              <img src={sofa2} alt="sofa2" className="w-100 h-100" />
              <img src={lights} alt="lights" className="w-100 h-100" />
            </Slider>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default KakMbi;
