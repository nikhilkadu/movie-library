import React from "react";
import "./App.css";
import Movies from "./components/movies";

function App() {
  return (
    <main className="container">
      <Movies moviesPerPage={4} />
    </main>
  );
}

export default App;
