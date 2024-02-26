import React from "react";
import SearchBar from "./SearchBar.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>Weather</header>
      <body>
        <SearchBar />
      </body>
      <footer>
        This website was coded by Tali Berlin using React and is open-sourced on
        GitHub
      </footer>
    </div>
  );
}

export default App;
