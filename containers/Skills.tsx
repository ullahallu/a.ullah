import React from "react";
import { SkillBars } from "../portfolio";
import { Container, Row, Progress, Col } from "reactstrap";
import Fade from "react-reveal/Fade";

const Skills = () => {
  const midpoint = Math.ceil(SkillBars.length / 2);
  const leftSkills = SkillBars.slice(0, midpoint);
  const rightSkills = SkillBars.slice(midpoint);

  return (
    SkillBars && (
      <Container className="section section-lg" style={{ paddingTop: "10px", paddingBottom: "10px" }}>
        <Fade bottom duration={500}>
          <Row className="text-center mb-4">
            <Col>
              <h4 className="display-4">Skills</h4>
            </Col>
          </Row>

          <Row>
            <Col lg="6">
              {leftSkills.map((skill) => (
                <div className="progress-info" key={skill.Stack}>
                  <div className="progress-label">
                    <span>{skill.Stack}</span>
                  </div>
                  <div className="progress-percentage">
                    <span>{skill.progressPercentage}%</span>
                  </div>
                  <Progress
                    max="100"
                    value={skill.progressPercentage}
                    color="info"
                    role="progressbar"
                    aria-label={skill.Stack}
                  />
                </div>
              ))}
            </Col>

            <Col lg="6">
              {rightSkills.map((skill) => (
                <div className="progress-info" key={skill.Stack}>
                  <div className="progress-label">
                    <span>{skill.Stack}</span>
                  </div>
                  <div className="progress-percentage">
                    <span>{skill.progressPercentage}%</span>
                  </div>
                  <Progress
                    max="100"
                    value={skill.progressPercentage}
                    color="info"
                    role="progressbar"
                    aria-label={skill.Stack}
                  />
                </div>
              ))}
            </Col>
          </Row>
        </Fade>
      </Container>
    )
  );
};

export default Skills;
