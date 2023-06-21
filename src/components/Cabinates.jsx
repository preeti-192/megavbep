import React from 'react'
import { Col, Row } from "react-bootstrap";
import bedRoom from "../assets/images/webp/washbasinImg.webp";
const Cabinates = () => {
  return (
    <>
      <section className="py-5">
        <div className="max_w1920 mx-auto py-xl-4 my-lg-2">
          <Row className="align-items-center flex-wrap-reverse">
            <Col lg={6} xs={12}>
              <div className="ps-lg-5 ms-xl-3 mb-lg-0 mt-3">
                <h2
                  className="fs_5xl fw-normal text-lg-start text-center ff_Forum pb-xl-4 mb-lg-3 mb-2 fc_black"
                  data-aos="fade-right"
                  data-aos-delay="600"
                >
                  ФУНКЦИОНАЛ
                </h2>
                <p
                  className="ff_Montserrat fw-normal fs_md mb-0 fc_black text-lg-start text-center"
                  data-aos="fade-right"
                  data-aos-delay="900"
                >
                  Отличительная особенность продуманной мебели - хорошая
                  функциональность. В вашей мебели будут установлены
                  высококачественные системы хранения, а внутреннее пространство
                  будет использовано наилучшим образом.
                </p>
              </div>
            </Col>
            <Col
              className="ps-xl-5 ps-lg-4"
              lg={6}
              xs={12}
              data-aos="fade-left"
              data-aos-delay="600"
            >
              <img className="w-100 ps-xxl-4" src={bedRoom} alt="img" />
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
}

export default Cabinates