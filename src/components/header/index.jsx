"use client"
import React, { useEffect, useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Anime from "../../Assets/giphy1.gif"
import Home from "./Home";
import Type from "./Type";
import Image from "next/image";
import { useInView } from "framer-motion";

export default function HeaderPage()
{
  const ref = useRef(null)
  const isInView = useInView(ref, {once : true})
  
  useEffect(() =>
  {
    document.title = "MfikriA | Home";
  })
  return (
    <section>
      <Container fluid className="home-section" id="home">
        {/* <Particle /> */}
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header" ref={ref}>
              <h1 style={{ 
                paddingBottom: 15, 
                transform: isInView ? "none": "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
              }}
                 className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name" style={{ 
                paddingBottom: 15, 
                transform: isInView ? "none": "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
              }}>
                I'M
                <strong className="main-name">Muhammad Fikri Ardiyansah</strong>
              </h1>

              <div style={{ 
                padding: 50, 
                textAlign: "left", 
                transform: isInView ? "none": "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ 
              paddingBottom: 20,
              transform: isInView ? "none": "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s" 
              }} ref={ref}>
              <Image
                src={Anime}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home />
    </section>
  );
}
