// src/MovieList.js
import React, { useState } from "react";
import MovieCard from "./MovieCard";
import Filter from "./Filter";

const MovieList = () => {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A mind-bending thriller about dreams within dreams.",
      posterURL: "https://example.com/inception.jpg", // Replace with a valid image URL
      rating: 8.8,
    },
    {
      title: "The Dark Knight",
      description:
        "Batman faces off against the Joker in this action-packed thriller.",
      posterURL: "https://example.com/darkknight.jpg", // Replace with a valid image URL
      rating: 9.0,
    },
    {
      title: "The Matrix",
      description:
        "A hacker discovers a dystopian world controlled by machines.",
      posterURL: "https://example.com/matrix.jpg", // Replace with a valid image URL
      rating: 8.7,
    },
    {
      title: "Interstellar",
      description:
        "Astronauts embark on a mission to find a new habitable planet.",
      posterURL: "https://example.com/interstellar.jpg", // Replace with a valid image URL
      rating: 8.6,
    },
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleFilterChange = (title, rating) => {
    const filtered = movies.filter((movie) => {
      return (
        (title
          ? movie.title.toLowerCase().includes(title.toLowerCase())
          : true) && (rating ? movie.rating >= rating : true)
      );
    });
    setFilteredMovies(filtered);
  };

  const handleAddMovie = (movie) => {
    setMovies([...movies, movie]);
    setFilteredMovies([...movies, movie]);
  };

  return (
    <div>
      <Filter onFilterChange={handleFilterChange} />
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {filteredMovies.map((movie, index) => (
          <MovieCard key={index} {...movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
