"use client"
import { useEffect, useState } from "react";
import {Nav, Navbar, Container, Button} from "react-bootstrap";
import Logo from '@/Assets/logo.png'
import { CgGitFork } from "react-icons/cg";
import
{
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineHistory,
} from "react-icons/ai";
import { FaBlog } from "react-icons/fa"
import { GrProjects } from "react-icons/gr";
import Link from "next/link";
import Image from "next/image";

export default function NavBar()
{
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler()
  {
    if (window.scrollY >= 20)
    {
      updateNavbar(true);
    } else
    {
      updateNavbar(false);
    }
  }

  useEffect(() => {
    scrollHandler()
    window.addEventListener("scroll", scrollHandler);
  }, [])


  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <Image src={Logo} alt="logo" width={55} height={40} />
          <h1>FikriA</h1>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() =>
          {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link  href="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="/project"
                onClick={() => updateExpanded(false)}
              >
                <GrProjects
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>


            <Nav.Item>
              <Nav.Link  href="/blog" onClick={() => updateExpanded(false)} >
                <FaBlog style={{ marginBottom: "2px" }} /> Blog
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/dodokjr"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
              </Button>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href='/updatelist' onClick={() => updateExpanded(false)} title="History And Update Website"><AiOutlineHistory /></Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
