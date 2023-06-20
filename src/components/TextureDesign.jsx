import React from 'react'
import { Col, Row } from "react-bootstrap";
import furnitureSkin from "../assets/images/videos/furniture-skin1.mp4";
const TextureDesign = () => {
  return (
    <>
      <section className="py-5">
        <div className="max_w1920 mx-auto py-xl-4 my-lg-2">
          <Row className="align-items-center ">
            <Col lg={6} xs={12}>
              <div className="ps-lg-5 ms-xl-3 mb-lg-0 mb-3">
                <h2 className="fs_5xl text-lg-start text-center fw-normal ff_Forum pb-xl-4 mb-lg-3 mb-2 fc_black">
                  МАТЕРИАЛЫ
                </h2>
                <p className="ff_Montserrat text-lg-start text-center fw-normal fs_md mb-0 fc_black">
                  Для создания хорошей мебели очень важно использование
                  качественных материалов. Мы напрямую работаем только с
                  проверенными производителями Турции, Австрии, Польши и России.
                  Всегда учитываем характеристики и требования к проектам.
                </p>
              </div>
            </Col>
            <Col className="ps-xl-5 ps-lg-4" lg={6} xs={12}>
              <video
                muted
                autoPlay={"autoplay"}
                preLoad="auto"
                loop
                className="w-100 ps-xxl-4"
                src={furnitureSkin}
              ></video>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
}

export default TextureDesign