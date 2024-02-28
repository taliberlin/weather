import React from "react";
import SearchBar from "./SearchBar.js";
import "./App.css";

function App() {
  return (
    <div className="App container">
      <header className="text-center">Weather</header>
      <main>
        <SearchBar />
      </main>
      <footer className="text-center mt-3">
        This website was coded by Tali Berlin using React and is open-sourced on
        GitHub
      </footer>
    </div>
  );
}

export default App;
