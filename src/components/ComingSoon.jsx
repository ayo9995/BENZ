import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MovieCard from './MovieCard'; 


const ComingSoon = () => {

          const movies = [
            { 
                id : 1,
             title:"Mercedes-Benz S-Class sedan",
             rating :"COMING SOON",
            
            poster: '/Crop_Mercedes-Benz_S-Class_sedan…_90de0100.jpg' ,
           
  
            },
             {
                id : 2,
             title:"Mercedes-AMG_A-Class",
             rating :"COMING SOON",
            
            poster: '/Extracting_Mercedes-AMG_A-Class_…_655c1bd3.jpg' ,
            },
             {
                id : 3,
             title:"Mercedes-AMG_GT",
             rating:"COMING SOON",
            
            poster: '/Extracting_Mercedes-AMG_GT_image_8e4f6a7b.jpg' ,
            },
             {
                id : 4,
             title:"Mercedes-Benz_AMG 350 ",
             rating :"COMING SOON",
            
            poster: '/Isolate_car_image_from_grid_5b0d18bf.jpg' ,
            },  
             {
                id : 5,
             title:"Mercedes-Benz_coupe",
             rating :"COMING SOON",
            
            poster: '/Isolate_Mercedes-Benz_coupe_image_0f908ef1.jpg' ,
            },
             {
                id : 6,
             title:"Mercedes-Benz_SUV",
             rating :"COMING SOON",
          
            poster: '/Isolate_Mercedes-Benz_SUV_photo_5f91f817.jpg' ,
            },
           
      
          ]

  return (
    <div>
    <section className='now-showing  text-white py-5 px-0'>
         <Container fluid className='px-4 px-lg-5'>


            <div className='mb-4'>
  <p>Experience the Magic</p>
  <h1>Coming Soon</h1>
</div>

  <Row className="g-3">
  {movies.map((movie) => (
    <Col lg={2} md={4} sm={6} key={movie.id}>
      <MovieCard movie={movie} />
    </Col>
  ))}
</Row>

         </Container>
    </section>
    </div>
  )
}

export default ComingSoon