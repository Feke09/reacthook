// src/Filter.js
import React, { useState } from "react";

const Filter = ({ onFilterChange }) => {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    onFilterChange(event.target.value, rating);
  };

  const handleRatingChange = (event) => {
    setRating(event.target.value);
    onFilterChange(title, event.target.value);
  };

  return (
    <div style={{ margin: "20px 0" }}>
      <input
        type="text"
        placeholder="Filter by title"
        value={title}
        onChange={handleTitleChange}
        style={{ marginRight: "10px" }}
      />
      <input
        type="number"
        placeholder="Filter by rating"
        value={rating}
        onChange={handleRatingChange}
        min="1"
        max="10"
        style={{ marginRight: "10px" }}
      />
    </div>
  );
};

export default Filter;
