import CardBlog from '@/components/blog/CardBlog';
import HeaderBlog from '@/components/blog/header';
import React from 'react'
import {Container, Button} from "react-bootstrap";

export default async function page() {
  const api = await fetch("https://api-mfikria.vercel.app/mfikria/c/blog", {cache: 'no-store'})
  const data = await api.json()
  return (
    <Container fluid className='blog-view'>
        <Container>
            <HeaderBlog/>
            <CardBlog api={data}/>
        </Container>
    </Container>
  )
}
