import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import Image from "next/image";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Image className="card-img-top" src={props.imgPath} alt="card-img"  width={400} height={300} />
      <div className="card-body">
        <div className="card-title">{props.title}</div>
        <div className="card-text" style={{ textAlign: "justify" }}>
          {props.description}
        </div>
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </div>
    </Card>
  );
}
export default ProjectCards;
