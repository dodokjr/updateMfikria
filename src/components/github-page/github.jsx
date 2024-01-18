import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

export default function Githubcalender() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="dodokjr"
        blockSize={15}
        blockMargin={5}
        color="#2b34ce5e"
        fontSize={16}
      />
    </Row>
  );
}
