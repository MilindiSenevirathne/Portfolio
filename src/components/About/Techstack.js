import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiMsqlServer,
  DiPython,
  DiGit,
  DiJava,
  DiAndroid,
  DiMysql,
  DiHtml5,
  DiCss3
} from "react-icons/di";
import {
  SiSpringboot
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        <p style={{fontSize:"15px", color:"#70f0df"}}>HTML5</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <p style={{fontSize:"15px", color:"#70f0df"}}>CSS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p style={{fontSize:"15px", color:"#70f0df"}}>JavaScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p style={{fontSize:"15px", color:"#70f0df"}}>React</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpringboot />
        <p style={{fontSize:"15px", color:"#70f0df"}}>Spring Boot</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <p style={{fontSize:"15px", color:"#70f0df"}}>Java</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAndroid />
        <p style={{fontSize:"15px", color:"#70f0df"}}>Android</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMsqlServer />
        <p style={{fontSize:"15px", color:"#70f0df"}}>MSSQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
        <p style={{fontSize:"15px", color:"#70f0df"}}>MySQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p style={{fontSize:"15px", color:"#70f0df"}}>Git</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <p style={{fontSize:"15px", color:"#70f0df"}}>Python</p>
      </Col>
      
    </Row>
  );
}

export default Techstack;
