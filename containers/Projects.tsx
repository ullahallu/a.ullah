import React from "react";
import { projects } from "../portfolio";
import { Container, Row } from "reactstrap";
import ProjectsCard from "../components/ProjectsCard";
import Fade from "react-reveal/Fade";

const Projects = () => {
  return (
    projects && (
      <Fade bottom duration={500}>
        <section className="section section-lg" style={{paddingTop: "50px", paddingBottom: "10px", marginBottom: "10px" }}>
          <Container>
            <div className="d-flex p-2">
              <div>
                <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                  <i className="ni ni-laptop text-info" />
                </div>
              </div>
              <div className="pl-3">
                <h4 className="display-4 text-info">Projects</h4>
              </div>
            </div>
            <Row className="row-grid align-items-center" style={{ marginBottom: "0px" }}>
              {projects.map((data, i) => {
                return <ProjectsCard key={i} {...data} />;
              })}
            </Row>
          </Container>
        </section>
      </Fade>
    )
  );
};

export default Projects;

