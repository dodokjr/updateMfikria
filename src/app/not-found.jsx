import { Button, Container } from "react-bootstrap";

export default function Page(){
    return(
        <Container fluid className="p404 text-center">
               <div>
                    NotFound 404
                    <Button href="/">Home</Button>
               </div>
          </Container>
    )
}