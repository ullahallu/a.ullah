import React from "react";
import { Card, Col, Row, Container } from "reactstrap";
import { GithubUserType } from "../types";
import SocialLinks from "./SocialLinks";

const GithubProfileCard = ({ avatar_url, bio, location }: GithubUserType) => {
  return (
    <section className="section section-lg section-shaped">
      {/* Background color updated to dark */}
      <div className="shape shape-style-1" style={{ backgroundColor: "#172B4D" }}>
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
      <Container className="py-lg-md d-flex">
        <Card className="section-lg border-0 bg-transparent">
          <Container>
            <div className="p-2">
              <Row>
                <Col className="order-lg-2" lg="4">
                  <img
                    src={avatar_url}
                    style={{ width: "200px" }}
                    alt=""
                    className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"
                  />
                </Col>
                <Col lg="8" className="order-lg-1">
                  <h2 className="text-white">Feel Free to Reach Out!</h2>
                  <p className="lead text-white mt-3">
                    LET'S DISCUSS OPPORTUNITIES FOR PROJECTS, RESEARCH, AND OTHER ENDEAVORS. MY INBOX IS OPEN TO ALL.
                  </p>
                  <p className="text-white mt-3">{bio}</p>
                  <div className="my-3 icon-shape bg-gradient-white shadow rounded text-info">
                    <a href="mailto:ullahallu.a.u@gmail.com" className="text-info">
                      <i className="fa fa-envelope text-info mr-2" />
                      ullahallu.a.u@gmail.com
                    </a>
                  </div>
                  <SocialLinks />
                </Col>
              </Row>
            </div>
          </Container>
        </Card>
      </Container>
    </section>
  );
};

export default GithubProfileCard;