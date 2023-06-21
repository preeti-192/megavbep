import React from "react";
import { Col, Row } from "react-bootstrap";
import logo from "../assets/images/svg/logo.svg";
import phone from "../assets/images/png/phone_img.png";
import msg from "../assets/images/png/msg_img.png";
import office from "../assets/images/webp/footerOffice_img.webp";
import location_icon from "../assets/images/png/location_icon.png";
import insta from "../assets/images/png/instagram_logo.png";
import chat from "../assets/images/png/chat-bubble.png";
import home from "../assets/images/png/home.png";

const MegaFooter = () => {
  return (
    <>
      <footer className="footer_bg py-5" id="footer">
        <div className="container footerContainer py-5">
          <Row>
            <Col lg={6}>
              <img src={logo} alt="logo" className="Cursor_Pointer" />
              <h2 className="ff_Montserrat fc_white mt-5 pt-5 mb-4 fw-bold pb-2 fs_2xl">
                НАШИ КОНТАКТЫ
              </h2>
              <div className="d-flex gap-3 align-items-center mb-4">
                <img src={phone} alt="phone" className="mw_54 w-100" />
                <a
                  href="tel:+77472742260"
                  className="ff_Montserrat fw-normal fs_2xl fc_light footer_text_underline position-relative fst-italic"
                >
                  +7 747 274 22 60
                </a>
              </div>
              <div className="d-flex gap-3 align-items-center mb-4">
                <img src={phone} alt="phone" className="mw_54 w-100" />
                <a
                  href="tel:+77472742260"
                  className="ff_Montserrat fw-normal fs_2xl fc_light footer_text_underline position-relative fst-italic"
                >
                  +7 727 327 73 27
                </a>
              </div>
              <div className="d-flex gap-3 align-items-center mb-4">
                <img src={msg} alt="msg" className="mw_54 w-100" />
                <a
                  href="mailto:mebelier_almaty@inbox.ru"
                  className="ff_Montserrat fw-normal fs_2xl fc_light footer_text_underline position-relative fst-italic"
                >
                  mebelier_almaty@inbox.ru
                </a>
              </div>
              <div className="d-flex gap-3 align-items-center mb-4">
                <img
                  src={location_icon}
                  alt="location_icon"
                  className="mw_54 w-100"
                />
                <p className="ff_Montserrat fw-normal fs_2xl fc_light footer_text_underline position-relative fst-italic">
                  г. Алматы, ул. Коперника, 72В
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <img src={office} alt="office" className="w-100" />
            </Col>
          </Row>
          <div className="d-flex justify-content-end align-items-center gap-5 mt-5 social_icons">
            <a href="#">
              <img src={insta} alt="insta" className="mw_77 w-100" />
            </a>
            <a href="#">
              <img src={chat} alt="chat" className="mw_77 w-100" />
            </a>
            <a href="#">
              <img src={home} alt="home" className="mw_77 w-100" />
            </a>
          </div>
          <div className="d-flex  justify-content-end align-items-center gap-lg-5 gap-3 mt-5">
            <label
              htmlFor="email"
              className="ff_Montserrat fw-bold fc_light fs_2xl"
            >
              НАПИСАТЬ НАМ
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="enter email address"
              className="email_box ff_Montserrat fw-normal fs_2xl fc_darkGrey bg-transparent"
            />
          </div>
        </div>
      </footer>
    </>
  );
};

export default MegaFooter;
