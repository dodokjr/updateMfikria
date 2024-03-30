import React from 'react'

export default function HeaderBlog() {
    const urlImg = 'https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?w=826&t=st=1711801898~exp=1711802498~hmac=af0022580b58342d115b17df19a139c2228089fa43e286fb9a8164540fef6409'
  return (
    <>
     <header className="masthead" style={{backgroundImage: `url('${urlImg}')`}}>
            <div className="container position-relative px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <div className="site-heading">
                            <h1>My Mfikria Blog</h1>
                            <span className="subheading">my personal blog</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </>
  )
}
