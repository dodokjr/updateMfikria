import { Button, Container } from "react-bootstrap";
import notfoundSvg from "../Assets/404.svg"
import Image from "next/image";

export default function Page(){
    return(
        <Container fluid className="p404 text-center">
               <div className="p-5">
                <h1 className="text-white">Not Found</h1>
                <hr/>
                <Image
                priority
                src={notfoundSvg}
                height={320}
                width={320}
                alt="Follow us on Twitter"
                />
                <hr/>
                <Button variant="primary" href="/">Back To Home</Button>
               </div>
          </Container>
    )
}