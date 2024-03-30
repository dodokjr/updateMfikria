import React from 'react'

export default function CardBlog({api}) {
  return (
    <>
    <div className="container px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
                <div className="col-md-10 col-lg-8 col-xl-7">
                    {api.data.map((res) => {
                        return(
                            <>
                            <div className="post-preview">
                        <a href={`/blog/${res.slug}`}>
                            <h2 className="post-title">{res.title}</h2>
                            <h3 className="post-subtitle">{res.subtitle}</h3>
                        </a>
                        <p className="post-meta">
                            Posted by
                            <a href="#!">{res.postBy.name}</a>
                            {res.postBy.time}
                        </p>
                    </div>
                    <hr className="my-4" />
                            </>
                        )
                    })}
            </div>
         </div>
        </div>
    </>
  )
}
