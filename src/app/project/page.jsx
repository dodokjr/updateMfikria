import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "@/components/project/projectCard";
import DodokStore from "../../Assets/Projects/DodokStore.png";
import Gabut from "../../Assets/Projects/gabut.png";
import Mfanimelist from "../../Assets/Projects/mfanimelist.png";
import ApiMfikria from "../../Assets/Projects/api.png";
import GithubRepos from "@/components/github-page/githubRepos";


export default function Projects(){
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
                <Col md={4} className="project-card">
                  <ProjectCard
                    imgPath={DodokStore}
                    title="Dodok Store"
                    description="Store Project with Html Css Javascript"
                    ghLink="https://github.com/dodokjr/dodok-store"
                    demoLink="https://dodokvapestore.netlify.app/"
                  />
                </Col>
                <Col md={4} className="project-card">
                  <ProjectCard
                    imgPath={Gabut}
                    title="Token And Password Random"
                    description="Project with Html Css Javascript"
                    ghLink="https://github.com/dodokjr/gabut-1"
                    demoLink="https://gabut-1.vercel.app/"
                  />
                </Col>
                <Col md={4} className="project-card">
                  <ProjectCard
                    imgPath={Mfanimelist}
                    title="anime List"
                    description="Project with frontend Reactjs and backend Expressjs api with jikan anime"
                    ghLink="https://github.com/dodokjr/animeList"
                    demoLink="https://mfanimelist.vercel.app/"
                  />
                </Col>
                <Col md={4} className="project-card">
                  <ProjectCard
                    imgPath={ApiMfikria}
                    title="official Api By me"
                    description="Project with Backend Express js"
                    ghLink="https://github.com/dodokjr/api-mfikria"
                    demoLink="https://api-mfikria.vercel.app/"
                  />
                </Col>
              </Row>
              <GithubRepos />
            </Container>
          </Container>
    
        </>
      );
}
