// src/AddMovie.js
import React, { useState } from "react";

const AddMovie = ({ onAddMovie }) => {
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMovie((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddMovie(newMovie);
    setNewMovie({ title: "", description: "", posterURL: "", rating: 0 });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={newMovie.title}
        onChange={handleInputChange}
        required
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={newMovie.description}
        onChange={handleInputChange}
        required
      />
      <input
        type="url"
        name="posterURL"
        placeholder="Poster URL"
        value={newMovie.posterURL}
        onChange={handleInputChange}
        required
      />
      <input
        type="number"
        name="rating"
        placeholder="Rating"
        value={newMovie.rating}
        onChange={handleInputChange}
        min="1"
        max="10"
        required
      />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovie;
