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
      <div>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <b>Muhammad Fikri Ardiyansah </b>
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
