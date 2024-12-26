// src/MovieCard.js
import React from "react";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";

const MovieCard = ({ title, description, posterURL, rating }) => {
  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Img variant="top" src={posterURL} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>
          <strong>Rating:</strong> {rating}/10
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  posterURL: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default MovieCard;
