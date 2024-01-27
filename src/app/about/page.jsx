import { Container, Row, Col } from "react-bootstrap";
import Githubcalender from "@/components/github-page/github";
import Techstack from "@/components/about/techstack";
import Aboutcard from "@/components/about/aboutCard";
import Toolstack from "@/components/about/toolstack";
import getMyApi from "@/libs/api-res";
import Image from "next/image";
import InstagramFeed from "@/components/about/instagramFeed";

export default async function Page()
{
  const profile = await getMyApi("/v2/github/dodokjr")
    return (
    <Container fluid className="about-section">
      {/* <Particle /> */}
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <p>{profile.bio}</p>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <Image src={profile.avatar_url} alt={profile.name} className="img-fluid" width={400} height={400} />
          </Col>
          <div>Github Following {profile.following}</div>
          <div>Github Followers {profile.followers}</div>
        </Row>

        <h1 className="project-heading">
          Instagram <strong className="purple">Feed </strong>
        </h1>

        <div>

        </div>
        <InstagramFeed/>

        {/* Tool And Stack */}
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Githubcalender />
      </Container>
    </Container>
  );
}
