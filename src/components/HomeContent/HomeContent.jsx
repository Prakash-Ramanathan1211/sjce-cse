import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HomeCarousel from "../HomeCarousel/HomeCarousel";

import Banner from "../Banner";

import "./HomeContent.css";

const HomeContent = ({ content }) => {
  return (
    <div>
      <Container className="content-card">
        <Row md>
          <Col md>
            <h1
              style={{
                marginTop: "40px",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Providing the best in Computer Education Since 1995.
            </h1>
            <br />
            <HomeCarousel content={content} />
          </Col>
        </Row>
        <hr />
        <Row>
          <Col md className="d-flex flex-column align-items-center">
            <h1 className="text-wrapper">Watch our Testimonials</h1>

            <div className=" md video-wrapper">
              <iframe
                title="youtube title"
                src="https://www.youtube.com/embed/0Mh8KPg1xNU?autoplay=0&mute=1&loop=1&playlist=0Mh8KPg1xNU"
                frameBorder="0"
                width="100%"
                height="100%"
              ></iframe>
            </div>
          </Col>
          <Banner />
        </Row>
      </Container>
    </div>
  );
};

export default HomeContent;

