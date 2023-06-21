import React from 'react'
import { Col, Row } from 'react-bootstrap'
import bedroom from "../assets/images/videos/bedroom1.mp4";
const BadRoomSec = () => {
  return (
    <>
      <section className="py-5" id='products'>
        <div className="max_w1920 mx-auto py-xl-4 my-lg-2">
          <Row className="align-items-center flex-wrap-reverse  ">
            <Col className="pe-xl-5 pe-lg-4" lg={6} xs={12}>
              <video
                muted
                autoPlay={"autoplay"}
                preLoad="auto"
                loop
                className="w-100 pe-xxl-4"
                src={bedroom}
              ></video>
            </Col>
            <Col lg={6} xs={12}>
              <div className="pe-lg-5 me-xl-4 mb-lg-0 mb-3">
                <h2 className="text-lg-end text-center fs_5xl fw-normal ff_Forum mb-xl-5 mb-lg-4 mb-3 fc_black">
                  ПРОЕКТ 3D
                </h2>
                <p className="text-lg-end ff_Montserrat fw-normal fs_md mb-0 text-center fc_black">
                  Для достижения наилучшего результата, подготовим подробные 3D
                  эскизы и чертежи.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
}

export default BadRoomSec