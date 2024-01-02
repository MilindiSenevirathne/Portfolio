import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import idoc from "../../Assets/Projects/idoc 2.png";
import ds from "../../Assets/Projects/ds.jpg";
import alienLines from "../../Assets/Projects/alienLines.png";
import fitsixes from "../../Assets/Projects/fitsixes.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={alienLines}
              isBlog={false}
              title="Alien Lines"
              description="This is a mobile application that developed for a
              competition organized by Rootcode Labs.
              •Designed wireframes and user interfaces and
              developed key features."
              technologies={["React Native"]}
              ghLink="https://github.com/MilindiSenevirathne/TechTitans_Alien_Lines_Frontend"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fitsixes}
              isBlog={false}
              title="Fit Sixes Mobile Application - 2023"
              description="This is the official mobile application of Fit Sixes -
              2023 that organized by Faculty of Information Technology. Developed key features such as team details, matches
              details by integrating REST APIs"
              technologies={["React Native"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ds}
              isBlog={false}
              title="DS Photography"
              description="This is the official photography website that was
              implemented for Disal Senevirathne Photography
              Service, Panadura.
              Developed entire website and deployed it on neltlify."
              technologies={["React"]}
              demoLink="https://ds-photography.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={idoc}
              isBlog={false}
              title="IDOC – Document Management System"
              description="Contributed to develop key features such as user
              management, file management, and tag management.
              Implemented Agile software development with Scrum
              for quick software release."
              technologies={["React", "Spring Boot", "SQL", "Bootstrap"]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
