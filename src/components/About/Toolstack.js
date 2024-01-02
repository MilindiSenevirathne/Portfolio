import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiFigma,
  SiAndroidstudio,
  SiWindows11,
  SiTrello,
  SiJira,
  SiAzuredevops
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows11 />
        <p style={{fontSize:"15px", color:"#70f0df"}}>Windows</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p style={{fontSize:"15px", color:"#70f0df"}}>Visual Studio Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p style={{fontSize:"15px", color:"#70f0df"}}>Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
        <p style={{fontSize:"15px", color:"#70f0df"}}>Figma</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio />
        <p style={{fontSize:"15px", color:"#70f0df"}}>Android Studio</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTrello />
        <p style={{fontSize:"15px", color:"#70f0df"}}>Trello</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJira />
        <p style={{fontSize:"15px", color:"#70f0df"}}>Jira</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAzuredevops />
        <p style={{fontSize:"15px", color:"#70f0df"}}>Azure DevOps</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
