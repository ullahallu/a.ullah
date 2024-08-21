import { feedbacks } from "../portfolio";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import FeedbackCard from "../components/FeedbackCard";
import Fade from "react-reveal/Fade";

const Feedbacks = () => {
  return (
    feedbacks && (
      <Fade bottom duration={500}>
        <section className="section section-lg" style={{ paddingTop: "10px", paddingBottom: "10px" }}>
          <Container>
            <div className="d-flex p-2">
              <div>
                <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                  <i className="fa fa-star text-info" />
                </div>
              </div>
              <div className="pl-3">
                <h4 className="display-4 text-info">Feedback</h4>
              </div>
            </div>
            <Row className="row-grid align-items-center">
              {feedbacks.map((data, i) => {
                return (
                  <Col key={i} lg={6} style={{ marginBottom: "5px" }}>
                    <FeedbackCard {...data} />
                  </Col>
                );
              })}
            </Row>
          </Container>
        </section>
      </Fade>
    )
  );
};

export default Feedbacks;
