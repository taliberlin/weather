import React from "react";
import SearchBar from "./SearchBar.js";
import "./app.css";

function App() {
  return (
    <div className="App container">
      <header className="text-center">I wonder about the weather...</header>
      <main>
        <SearchBar />
      </main>
      <footer className="text-center mt-5">
        This website was coded by{" "}
        <a
          href="https://peppy-starburst-3356e6.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Tali Berlin
        </a>{" "}
        using React and is open-sourced on{" "}
        <a
          href="https://github.com/taliberlin/weather"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;
