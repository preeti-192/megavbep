import React from "react";
import { Col, Row } from "react-bootstrap";
import blumImg from "../assets/images/webp//blum.webp";
const Blim = () => {
  return (
    <>
      <section className="py-5">
        <div className="max_w1920 mx-auto py-xl-4 my-lg-2">
          <Row className="align-items-center flex-wrap-reverse">
            <Col className="pe-xl-5 pe-4" lg={6} xs={12}>
              <img className="w-100 pe-xxl-4" src={blumImg} alt="img" />
            </Col>
            <Col lg={6} xs={12}>
              <div className="pe-lg-5 me-xl-4 me-xxl-4 ps-xxl-5 mb-lg-0 mb-3">
                <h2 className="text-lg-end text-center fs_5xl fw-normal ff_Forum mb-xl-4  pb-xl-3 mb-lg-3 mb-2 fc_black">
                  ФУРНИТУРА
                </h2>
                <p className="text-lg-end text-center ff_Montserrat fw-normal fs_md pt-1 mb-0 fc_black">
                  В своих изделиях мы используем исключительно качественную
                  европейскую фурнитуру Blum и Hettich.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default Blim;
