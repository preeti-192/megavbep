import React from 'react'
import { Col, Row } from "react-bootstrap";
import design from "../assets/images/webp/designStructure.webp";
const MapStructure = () => {
  return (
    <>
      <section className="py-5 mb-xxl-5">
        <div className="max_w1920 mx-auto py-xl-4 my-lg-2 mb-xl-5">
          <Row className="align-items-center flex-wrap-reverse pb-md-5 mb-lg-5">
            <Col lg={6} xs={12}>
              <div className="ps-lg-5 ms-xl-3 pe-lg-3 mb-lg-0 mt-3">
                <h2 className="fs_5xl fw-normal text-lg-start text-center ff_Forum pb-xl-4 mb-lg-3 mb-2 fc_black">
                  наша фабрика
                </h2>
                <p className="ff_Montserrat fw-normal fs_md mb-0 fc_black text-lg-start text-center">
                  Индивидуальный подход к каждому клиенту, наша фабрика с полным
                  циклом производства может воплотить любой эскиз и пожелание
                  заказчика
                </p>
              </div>
            </Col>
            <Col lg={6} xs={12} className="ps-xl-5 ps-lg-4">
              <img className="w-100 ps-xxl-4" src={design} alt="img" />
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
}

export default MapStructure