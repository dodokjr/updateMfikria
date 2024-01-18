import React from "react";
import { Col, Row } from "react-bootstrap";
import
  {
    SiWindows,
    SiVisualstudiocode,
    SiPostman,
    SiVercel,
    SiNetlify,
  } from "react-icons/si";

export default function Toolstack()
{
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
    </Row>
  );
}
