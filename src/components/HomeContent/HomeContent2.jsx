import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HomeCarousel from "../HomeCarousel/HomeCarousel";

import Banner from "../Banner";

import "./HomeContent2.css";

const HomeContent2 = ({ content }) => {
  return (
    <div>
      <Container className="content-card1">
        <Row md>
          <Col md>
           
            <br />
            <HomeCarousel content={content} />
            <br />
          </Col>
        </Row>
      
      </Container>
    </div>
  );
};

export default HomeContent2;

