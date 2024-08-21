import React from "react";
import { experience } from "../portfolio";
import { Container, Row } from "reactstrap";
import ExperienceCard from "../components/ExperienceCard";
import Fade from "react-reveal/Fade";

const Experience = () => {
  return (
    experience && (
      <Fade bottom duration={500}>
        <section className="section section-lg" style={{ paddingTop: "10px", paddingBottom: "10px" }}>
          <Container>
            <div className="d-flex p-2">
              <div>
                <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                  <i className="ni ni-briefcase-24 text-info" />
                </div>
              </div>
              <div className="pl-3">
                <h4 className="display-4 text-info">Experience</h4>
              </div>
            </div>
            <Row className="row-grid align-items-center" style={{ marginBottom: "5px" }}>
              {experience.map((data, i) => {
                return <ExperienceCard key={i} {...data} />;
              })}
            </Row>
          </Container>
        </section>
      </Fade>
    )
  );
};

export default Experience;
