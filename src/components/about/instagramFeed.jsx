
import Image from "next/image";
import { Card, Col, Container, Row, Stack } from "react-bootstrap";
import imgsrc from"../../Assets/about.png"
import getMyApi from "@/libs/api-res";
import Link from "next/link";


export default async function InstagramFeed(){
  const api = await fetch("https://api-mfikria.vercel.app/ig", { cache: 'force-cache' });
  const item = await api.json()
    return(
        <Row className="p-2">
          {item.data.map((items,index) => {
            return(
              <Col  md={4} key={index}>
               <Link href={items.url_Profile} target="_blank">
                <Image src={items.url_Image} className="instagram-feed" alt="card-img"  width={350} height={250}/>
              </Link>
              </Col>
            )
          })}
            </Row>
    )
}