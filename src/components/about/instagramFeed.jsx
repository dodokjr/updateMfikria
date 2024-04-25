"use client"
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Card, Col, Container, Row, Stack } from "react-bootstrap";
import imgsrc from"../../Assets/about.png"
import getMyApi from "@/libs/api-res";
import Link from "next/link";
import { useInView } from "framer-motion";


const igFeed = [
  {id: 0, url_Profile: "https://www.instagram.com/p/C2XCZPxhnY_RCVIxDN2kJPCzhmjXrDZ1z4TJL40/", url_Image: "https://api-mfikria.vercel.app/public/assets/ig/ig_1.webp" },
  {id: 1, url_Profile: "https://www.instagram.com/p/C1ONvPlB-R2LiNZQipCNo7z_7jvC3czfLeAWG40/", url_Image: "https://api-mfikria.vercel.app/public/assets/ig/ig_2.webp" },
  {id: 2, url_Profile: "https://www.instagram.com/p/CzlWvXShA2KGPENz8cu9JhZcjIJtd_esdgC7W40/", url_Image: "https://api-mfikria.vercel.app/public/assets/ig/ig_3.webp" },
  {id: 3, url_Profile: "https://www.instagram.com/p/CwkQeMUh5FBplsorvsJIsDlvyUJO7hZe4bvYR80/", url_Image: "https://api-mfikria.vercel.app/public/assets/ig/ig_4.webp" },
  {id: 4, url_Profile: "https://www.instagram.com/p/C5yUzhmBGCr/", url_Image: "https://api-mfikria.vercel.app/public/assets/ig/ig_5.webp" },
  {id: 5, url_Profile: "https://www.instagram.com/p/C5yUzhmBGCr/", url_Image: "https://api-mfikria.vercel.app/public/assets/ig/ig_6.webp" },
]

export default function InstagramFeed(){
    return(
        <Row className="p-2 trasisi">
          {igFeed.map((items,index) => {
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
