import React from "react";

import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const MovieCard = ({ movie }) => {
  return (
    <div>
      <Card className='movie-card position-relative border-0'>
        {/* Movie poster   */}
       <Card.Img variant="top" src={movie.poster} alt={movie.title}  />

        {/* Top-right  Age Rating Badge    */}
       <Badge bg="black" className='movie-rating position-absolute top-0 end-0 m-2 p-3'>{movie.rating}</Badge>

        {/* overly content  */}

       <div className="movie-overlay">

          <div className='text-center'>
          <Button variant='danger' size='sm'>
          
            <span>▶</span>View Exterior
          </Button>
          </div>

          {/* Movie title*/}
          <Card.Title>{movie.title}</Card.Title>

          {/* */}

        


          {/* */}
          <Button>Explore Vehicle</Button>

          {/* More Info */}
          <a href="">More Info →</a>
        </div>
      </Card>
    </div>
  );
};

export default MovieCard;
