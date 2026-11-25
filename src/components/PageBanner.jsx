import React from 'react'
import { Container } from 'react-bootstrap'

const PageBanner = ({ title , subtitle , backgroundImage}) => {
  return (
    <div>
        
    <section className='page-banner' style={{backgroundImage: `linear-gradient( to left , #8080807c  , #0000008a ), url(${backgroundImage})`}}>

<Container>
    <div>

        <p>BENZ</p>

        <h1>{title}</h1>
        <h5>{subtitle}</h5>

        <aside>
            Home
        </aside>
    </div>
</Container>
    </section>

    </div>
  )
}

export default PageBanner