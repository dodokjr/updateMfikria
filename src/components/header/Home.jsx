"use client"
import React, { useEffect, useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import
{
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillEye
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Contact from "../contact/Contact";
import Image from "next/image";
import { useInView } from "framer-motion";

export default function Home()
{

  const [count, setCount] = useState(0);
  const ref = useRef(null)
  const isInView = useInView(ref, {once : true})

  useEffect(() =>
  {
    var pageView = sessionStorage.getItem("pageView");
    if (pageView == null)
    {
      pageView = 1;
    } else
    {
      pageView = Number(pageView) + 1;
    }
    sessionStorage.setItem("pageView", pageView);
    setCount(pageView);
  }, []);

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description" ref={ref}>
            <h1 style={{ 
            fontSize: "2.6em",
            transform: isInView ? "none": "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"  
              }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body" style={{ 
            transform: isInView ? "none": "translateX(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"}}>
              <br />
              <br />I am fluent in programming
              <i>
                <b className="blue"> HTML, Javascript, Typescript, Python, C++ and CSS. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="blue">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="blue">
                  Deep Learning and Natural Launguage Processing.
                </b>
              </i>
              <br />
              <br />
              From the fields above, I also like editing and playing games on the mobile phone
              </p>
          </Col>
          <Col md={4} className="myAvtar" ref={ref}>
            <Tilt>
              <Image src={myImg} className="img-fluid" alt="avatar" style={{ 
                transform: isInView ? "none" : "translateX(200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }} />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <div className="blue">View In Website <AiFillEye /> {count} Live</div>
        </Row>
        <Row>
          <Col md={12} className="home-about-social" >
            <h1>CONTACT ME !!!</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/dodokjr/"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/muhammad-fikri-ardiyansah-952752194/"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/fkri__17/"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <Contact />
    </Container>
  );
}