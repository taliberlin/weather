import React from "react";
import WeatherInfo from "./WeatherInfo.js";
import "./SearchBar.css";

export default function SearchBar() {
  return (
    <div className="SearchBar">
      <form>
        <input type="text" placeholder="Enter a city..." />
        <input type="submit" value="Search" />
      </form>
      <WeatherInfo />
    </div>
  );
}
