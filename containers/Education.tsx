import React from "react";
import EducationCard from "../components/EducationCard";
import { educationInfo } from "../portfolio";
import { Container, Row, Col } from "reactstrap";
import Fade from "react-reveal/Fade";

const Education = () => {
  return (
    educationInfo && (
      <Fade bottom duration={500}>
        <section className="section section-lg section-shaped" style={{paddingTop: "75px", paddingBottom: "100px", marginBottom: "5px" }}>
          {/* Adding the shape structure for bubbles */}
          <div className="shape shape-style-1" style={{ backgroundColor: "#4682b4" }}>
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Container>
            <div className="d-flex px-3">
              <div>
                <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                  <i className="ni ni-books text-info" />
                </div>
              </div>
              <div className="pl-4">
                <h4 className="display-3 text-white">Education</h4>
              </div>
            </div>
            <Row className="row-grid align-items-center">
              {educationInfo.map(info => {
                return (
                  <Col className="order-lg-1" lg="6" key={info.schoolName}>
                    <EducationCard {...info} />
                  </Col>
                );
              })}
            </Row>
          </Container>
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
      </Fade>
    )
  );
};

export default Education;
