// src/App.js
import React from "react";
import "./App.css";
import MovieList from "./MovieList";
import AddMovie from "./AddMovie";

function App() {
  return (
    <div className="App">
      <h1>My Movie App</h1>
      <AddMovie />
      <MovieList />
    </div>
  );
}

export default App;
