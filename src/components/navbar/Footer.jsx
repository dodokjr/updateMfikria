
import getMyApi from "@/libs/api-res";
import { Container, Row, Col } from "react-bootstrap";
import
{
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn, FaDiscord, FaSteam, FaHome, FaUser, FaBlog } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import Link from "next/link";

export default async function Footer()
{
  const items = await getMyApi("/link/")

  let date = new Date();
  let year = date.getFullYear();
  return (
    <>
      <Container fluid className="footer">
        <Row>

          <Col md="4" className="footer-copywright">
            <h3>Copyright © {year} Fikria</h3>
          </Col>

          <Col md="4" className="footer-body">
            <ul className="footer-icons">
              <li className="social-icons">
                <a
                  href={items.github}
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={items.linkedin}
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={items.instagram}
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons" >
                <a
                  href={items.discord}
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaDiscord />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={items.youtube}
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillYoutube />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={items.steam}
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaSteam />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={items.twitter}
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
}

