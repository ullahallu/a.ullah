import React from "react";
import { SkillBars } from "../portfolio";
import { Container, Row, Progress, Col } from "reactstrap";
import Fade from "react-reveal/Fade";

const Proficiency = () => {
  // Split the skill bars into two equal halves
  const midpoint = Math.ceil(SkillBars.length / 2);
  const leftSkills = SkillBars.slice(0, midpoint);
  const rightSkills = SkillBars.slice(midpoint);

  return (
    SkillBars && (
      <Container className="section section-lg" style={{paddingTop: "150px", paddingBottom: "150px", marginBottom: "150px" }}>
        <Fade bottom duration={500}>
          {/* Title Section */}
          <Row className="text-center mb-5">
            <Col>
              <h1 className="h1">Proficiencies</h1>
            </Col>
          </Row>

          <Row>
            {/* Left-hand side: First half of proficiencies */}
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

            {/* Right-hand side: Second half of proficiencies */}
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

export default Proficiency;