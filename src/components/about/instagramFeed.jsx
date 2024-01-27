
import Image from "next/image";
import { Card, Col, Container, Row, Stack } from "react-bootstrap";

import imgsrc from"../../Assets/about.png"
import getMyApi from "@/libs/api-res";
import Link from "next/link";

export default async function InstagramFeed(){
    const api = await fetch("https://api-mfikria.vercel.app/ig")
    const items = await api.json()
    return(
        <Row className="p-2">
               <Col  md={4}>
               <Link href={items.page_0.url_Profile} target="_blank">
                <Image src={items.page_0.url_Image} className="instagram-feed" alt="card-img"  width={350} height={250}/>
                </Link>
               </Col>
                <Col  md={4}>
                <Link href={items.page_1.url_Profile} target="_blank">
                <Image src={items.page_1.url_Image} className="instagram-feed" alt="card-img"  width={350} height={250}/>
                </Link>
                </Col>
               <Col  md={4}>
               <Link href={items.page_2.url_Profile} target="_blank">
                <Image src={items.page_2.url_Image} className="instagram-feed" alt="card-img"  width={350} height={250}/>
                </Link>
                </Col>
                <Col md={4}>
                <Link href={items.page_3.url_Profile} target="_blank">
                <Image src={items.page_3.url_Image} className="instagram-feed" alt="card-img"  width={350} height={250}/>
                </Link>
                </Col>
            </Row>
    )
}