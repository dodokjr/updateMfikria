
import Article from "@/components/blog/Article";
import React from "react"
import {Container, Button} from "react-bootstrap";
async function Page({params : {slug}}){
    
    const api = await fetch(`https://api-mfikria.vercel.app/mfikria/c/blog/${slug}`, {cache: "no-store"})
    const res = await api.json()

    if(!res.data) {
        return(
            <Container fluid className="blog-view">
                <Container>
                <div className="text-center">{res.message}</div>
                </Container>
            </Container>
        )
    } 
return(
    <Container fluid className='blog-view'>
    <Container>
    <header class="masthead" style={{backgroundImage: `url('${res.data?.img_background}')`}}>
            <div class="container position-relative px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <div class="post-heading">
                            <h1>{res.data.title}</h1>
                            <h2 class="subheading">{res.data.subtitle}</h2>
                            <span class="meta">
                                Posted by
                                <a href="#!">{res.data.creator}</a>
                                {res.data.time_post}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <Article res={res.data.content}/>
    </Container>
</Container>
    )
}


export default Page