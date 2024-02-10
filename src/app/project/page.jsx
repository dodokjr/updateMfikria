import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "@/components/project/projectCard";
import DodokStore from "../../Assets/Projects/DodokStore.png";
import Gabut from "../../Assets/Projects/gabut.png";
import Mfanimelist from "../../Assets/Projects/mfanimelist.png";
import ApiMfikria from "../../Assets/Projects/api.png";
import GithubRepos from "@/components/github-page/githubRepos";


export default async function Projects(){
  const api = await fetch(`https://api-mfikria.vercel.app/mfikria/`, { cache: 'no-store' })
  const res = await api.json()
    return (
        <>
          <Container fluid className="project-section">
            <Container>
              <h1 className="project-heading">
                My Recent <strong className="purple">Works </strong>
              </h1>
              <p style={{ color: "white" }}>
                Here are a few projects I've worked on recently.
              </p>
              <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                {res.data.map((r) => {
                 return(
                  <>
                  <Col md={4} className="project-card">
                      <ProjectCard
                       imgPath={r.img_url}
                       title={r.title}
                       description={r.descriptions}
                       ghLink={r.url_github}
                       demoLink={r.url_demo}
                       hisLink={`/project/h/${r.slug}`}
                      />
                </Col>
                  </>
                 )
                })}
              </Row>
              <GithubRepos />
            </Container>
          </Container>
    
        </>
      );
}
