import getMyApi from "@/libs/api-res"
import Image from "next/image"
import Link from "next/link"
import { Button, Card, Col, Container, ProgressBar, Row, Stack } from "react-bootstrap"
import { FaCodeBranch } from "react-icons/fa6";

const Page = async({params: {id}}) => {
    const api = await fetch(`https://api.github.com/repos/dodokjr/${id}/deployments`)
    const itemsDev = await api.json()

    const items = await getMyApi(`v2/github/dodokjr/repos/${id}`)
    let noView = items.language
    let urlW = items.homepage 
    let des = items.description 

    return(
        <Container fluid className="project-section">
            <Container>
            <div className="text-center text-white"><h4>{items.name} / {items.full_name}</h4>
            {des ? <p>description : {items.description}</p> : null}
            <p><FaCodeBranch/> {items.default_branch}</p>
            </div>
            <Row className="p-3 text-white">
        <Col><Image src={items.owner?.avatar_url} alt="..." width={300} height={300}/></Col>
        <Col sm>
        <Stack gap={3}>
            <div className="p-2 text-center">Clone Github</div>
            <div className="p-2">Git : {items.git_url}</div>
            <div className="p-2">ssh : {items.ssh_url}</div>
            <div className="p-2">Clone : {items.clone_url}</div>
        </Stack>
        </Col>
        <Col  sm>
        <Stack gap={3}>
        <div className="p-2 text-center">Details</div>
        {
            urlW ? <div className="p-2">
            <Button variant="link" href={items.homepage} >{items?.homepage}</Button>
            </div> : null
        }
            {
                noView ? <div className="p-2">Language : {items.language}</div> : null
            }
            <div className="p-2">Created : {items.created_at}</div>
        </Stack>
        </Col>
        <div className="p-3 text-center col-md-5 mx-auto">
        <Card  style={{width: "15rem"}}>
                    <div className="card-header">Status Update</div>
                    <ul className="list-group list-group-flush">
                       {itemsDev.map((dev) => {
                        return(
                            <li class="list-group-item">{dev.updated_at}</li>
                        )
                       })}
                    </ul>
                </Card>
        </div>
       <div className="p-3">
         <div className="text-center">Contribusi</div>
       </div>
      </Row>
            </Container>
        </Container>
    )
}

export default Page