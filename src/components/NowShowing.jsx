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
           
            poster: 'poster1.jpg' ,
            },
             {
                id : 2,
             title:"Mercedes-Benz GLE (Mid-Size Luxury SUV)",
            
            poster: 'poster2.jpg' ,
            },
             {
                id : 3,
             title:"Mercedes-Benz CLA (Four-Door Coupe)",
             
           
            poster: 'poster3.jpg' ,
            },
             {
                id : 4,
             title:"Mercedes-Benz C-Class (Compact Executive Sedan)",
             
          
            poster: 'poster4.jpg' ,
            },
             {
                id : 5,
             title:"Mercedes-Benz E-Class (Executive Sedan / Wagon)",
             
            
            poster: 'poster5.jpg' ,
            },
             {
                id : 6,
             title:"Mercedes-AMG ONE (Formula 1-derived Hypercar)",
             
            
            poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAn6m84bKCEgEbZklZ8eUPt1YbJ1pdAP-9qEfJnf0VOA&s=10' ,
            },
             {
                id : 7,
             title:"Mercedes-Benz G-Class (G-Wagon) (Iconic Off-Road SUV)",
             
            
            poster: 'poster 4.0.jpg' ,
            },
             
       
              
              {
                id : 8,
             title:"Mercedes-Maybach GLS 600 (Ultra-Luxury SUV)",
             
           
            poster: '/Isolating_SUV_image_from_grid_34034ee7.jpg' ,
            },
              {
                id : 9,
             title:"Mercedes-Maybach GLS 600 (Ultra-Luxury SUV)",
             
            
            poster: 'Separate_Mercedes-Benz_image_0a1fc706.jpg' ,
            },
             {
                id : 10,
             title:"Mercedes-Maybach GLS 600 (Ultra-Luxury SUV)",
             
            
            poster: 'unnamed.jpg' ,
            },
             
             {
                id : 11,
             title:"Mercedes-Maybach GLS 600 (Ultra-Luxury SUV)",
             
            
            poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwfymKCv33QrG2DyMkix4l134PKK8GRlNebpdJcmsNgA&s=10' ,
            },
         {
                    id : 12,
             title:"Mercedes-Maybach GLS 600 (Ultra-Luxury SUV)",
             
            
            poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3zvkkhfCjwEQeow9lJZH_t6wYqLm3-u7Quk3907fsSQ&s=10' ,
            },
            
            
            
            

          ]

  return (
    <div>
    <section className='now-showing bg-black text-white py-5 px-0'>
         <Container fluid className='px-4 px-lg-5'>


          <div className='mb-4'>
  <p>Experience the Magic</p>
  <h1>Now Showing</h1>
</div>

<Row className="g-4">
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

export default NowShowing