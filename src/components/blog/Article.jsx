import React from 'react'

export default function Article({res}) {
  return (
    <>
    <article class="mb-4">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                      {res.descriptions.map((r) => <p>{r}</p>)}
                      <iframe width="560" height="315" src={res.iframe_yt} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                      <b>{res.copyright}</b>
                    </div>
                </div>
            </div>
        </article>
    </>
  )
}
