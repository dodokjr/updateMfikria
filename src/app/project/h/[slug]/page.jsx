import { redirect } from "next/dist/server/api-utils";
import { Container, Row, Col, Table } from "react-bootstrap";

export default async function page({params: {slug}}) {
    const api = await fetch(`https://api-mfikria.vercel.app/mfikria/p/${slug}`, { cache: 'no-store' })
    const ress = await api.json()
    if(!ress) ress.statusCode = 404;
    return(
    <Container fluid className="project-section">
        <Container>
          <h1 className="project-heading">
            My Project <strong className="purple">{ress.title}</strong>
          </h1>
          <p style={{ color: "white" }}>
            My Status Website <strong>{ress.status}</strong>
          </p>
          <p style={{ color: "white" }}>
            update = {ress.update}  &nbsp;
            and &nbsp;
            releases = {ress.releases} 
          </p>
          <div>
          <Table responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Language</th>
          </tr>
        </thead>
        <tbody>
          {ress.language?.map((r, index) => {
            return(
                <>
                <tr>
                 <td>{index + 1}</td>
                 <td>{r.name}</td>
               </tr>
                </>
            )
          }) }
        </tbody>
      </Table>
          </div>
          </Container>
          </Container>
    )
}