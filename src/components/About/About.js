import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/2.jpg";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{
              paddingTop: "120px",
              paddingBottom: "50px",
              perspective: "1000px", // Set a perspective for 3D effect
            }}
            className="about-img"
          >
            <div
              style={{
                width: "100%",
                height: "0",
                paddingBottom: "65%", // Maintain aspect ratio (adjust as needed)
                position: "relative",
                transformStyle: "preserve-3d", // Enable 3D transformations
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: "0",
                  left: "0",
                  transform: "rotateX(20deg)", // Adjust the tilt angle (e.g., 30deg)
                  transformOrigin: "center bottom", // Pivot point at the bottom center
                }}
              >
                <img
                  src={laptopImg}
                  alt="about"
                  className="img-fluid"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "30px",
                  }}
                />
              </div>
            </div>
          </Col>

        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
