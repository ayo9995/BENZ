import React from "react";

import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const MovieCard = ({ movie }) => {
  return (
    <Card
      className="movie-card position-relative border-0"
      style={{ aspectRatio: "2 / 3", overflow: "hidden", borderRadius: "16px" }}
    >
      {/* Poster */}
      <Card.Img
        src={movie.poster}
        alt={movie.title}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />

      {/* Top-right badge (only shows if the movie has a rating) */}
      {movie.rating && (
        <Badge
          bg="black"
          className="movie-rating position-absolute top-0 end-0 m-2 p-2"
        >
          {movie.rating}
        </Badge>
      )}

      {/* Overlay content */}
      <div className="movie-overlay">
        <div className="text-center">
          <Button variant="danger" size="sm">
            <span>▶</span> View Exterior
          </Button>
        </div>

        <div className="bg-black text-white mt-2">
          <Card.Title className="all-caps">{movie.title}</Card.Title>

          <div className="text-center border-top border-secondary py-3">
            <Button className="ticket">PURCHASE NOW</Button>
          </div>

          <a href="#" className="more-info">More Info →</a>
        </div>
      </div>
    </Card>
  );
};

export default MovieCard;