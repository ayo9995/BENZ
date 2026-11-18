import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MovieCard from './MovieCard'; 


const NowShowing = () => {

          const movies = [
            {
                id : 1,
             title:"Mercedes-Maybach S 680 (Ultra-Luxury Sedan)",
             rating:"",
            duration:'2h 00min',
            poster: 'poster1.jpg' ,
            },
             {
                id : 2,
             title:"Mercedes-Benz GLE (Mid-Size Luxury SUV)",
             rating:"",
            duration:'2h 00min',
            poster: 'poster2.jpg' ,
            },
             {
                id : 3,
             title:"Mercedes-Benz CLA (Four-Door Coupe)",
             rating:"16+",
            duration:'2h 00min',
            poster: 'poster3.jpg' ,
            },
             {
                id : 4,
             title:"Mercedes-Benz C-Class (Compact Executive Sedan)",
             
            duration:'2h 00min',
            poster: 'poster4.jpg' ,
            },
             {
                id : 5,
             title:"Mercedes-Benz E-Class (Executive Sedan / Wagon)",
             rating:"16+",
            duration:'2h 00min',
            poster: 'poster5.jpg' ,
            },
             {
                id : 6,
             title:"Mercedes-AMG ONE (Formula 1-derived Hypercar)",
             
            duration:'2h 00min',
            poster: 'poster6.jpg' ,
            },
             {
                id : 7,
             title:"Mercedes-Benz G-Class (G-Wagon) (Iconic Off-Road SUV)",
             
            duration:'2h 00min',
            poster: 'poster 4.0.jpg' ,
            },
             {
                id : 8,
             title:"Mercedes-Maybach GLS 600 (Ultra-Luxury SUV)",
             
            duration:'2h 00min',
            poster: 'poster8 (2).jpg' ,
            },
            

          ]

  return (
    <div>
    <section className='now-showing bg-black text-white py-5 px-0'>
         <Container fluid>


            <div>
                <p>Experience the Magic</p>
                <h2>Now Showing</h2>
            </div>

      <Row>
        {movies.map((movie) => (
            <Col lg={2} key={movie.id}>


            
        <MovieCard movie={movie} />
            </Col>
        ))}
      </Row>

         </Container>
    </section>
    </div>
  )
}

export default NowShowing