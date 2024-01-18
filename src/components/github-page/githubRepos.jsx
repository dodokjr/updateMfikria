import { Container, Row, Col, Card, Button, ListGroup  } from "react-bootstrap";
import { format } from "date-fns"
import { RiStarSFill, RiGithubFill } from "react-icons/ri";
import { HiOutlineEye } from "react-icons/hi";
import { IoIosGitNetwork } from "react-icons/io";
import Link from "next/link";
import getMyApi from "@/libs/api-res";
import Image from "next/image";


export default async function GithubRepos()
{
    const reposName = "dodokjr"
  const items = await getMyApi("v2/github/dodokjr/repos")

  return (
    <>
      <h1 className="project-heading">
        My repos Github <strong className="purple">{reposName}</strong>
      </h1>
      <p style={{ color: "white" }}>
        Project Hare
      </p>
      <Container>
        <Row>
         {items.map((props, index) => {
           return(
            <Col md={4} className="project-card" key={index}>
            <Card className="project-card-view">
            <Link href={`/project/${props.name}`} className="text-white btn">
            <Image src={props.owner.avatar_url} className="card-img-top" alt="card-img"  width={400} height={300}/>  
                <hr className="bg-light"/>
                <div className="card-title">{props.name}</div>
            </Link>
                <hr/>
                <div className="card-body">
                    <p className="card-text">{props.description}</p>
                    {props.private ? (
              <p className="bg-rose-700 py-1 px-2 rounded-lg shadow text-white text-xs inline-block opacity-75">
                Private
              </p>
            ) : (
              <p className="bg-emerald-700 py-1 px-2 rounded-lg shadow text-white text-xs inline-block opacity-75 mr-2">
                Public
              </p>
            )}
            <div className="card-text">
            <div>
                <div><RiStarSFill /><b>{props.stargazers_count.toLocaleString()} Stars</b></div>
                <div><HiOutlineEye /> <b>{props.watchers_count.toLocaleString()} Watchers</b></div>
                <div><IoIosGitNetwork /> <b>{props.forks_count.toLocaleString()} forks</b></div>
              </div>
            </div>
            </div>  
            <div className="card-footer text-white">
            <div className="fs-7">Last Update : {format(new Date(props.updated_at), "dd MMMM yyyy")}</div>
            <div className="fs-6">{format(new Date(props.created_at), "dd MMMM yyyy")} by{" "}
              {props.owner.login}</div>
            </div>
            </Card>
            </Col>
           )
         })}
        </Row>
      </Container>
    </>
  )
}