"use client"
import React, { useEffect, useState, useRef } from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { useInView } from "framer-motion";

export default function AboutCard()
{
  const ref = useRef(null)
  const isInView = useInView(ref, {once : true})
  return (
    <Card className="quote-card-view" ref={ref}>
      <div style={{  
                transform: isInView ? "none": "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
              }}>
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
