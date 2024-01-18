import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

export default function AboutCard()
{
  return (
    <Card className="quote-card-view">
      <div>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="blue">Muhammad Fikri Ardiyansah </span>
            from <span className="purple"> Semarang, Indonesia</span>
            <br />I am a junior Devloper
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Editing
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
          </ul>
        </blockquote>
      </div>
    </Card>
  );
}
