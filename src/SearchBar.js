import React from "react";
import WeatherInfo from "./WeatherInfo.js";
import "./SearchBar.css";

export default function SearchBar() {
  return (
    <div className="SearchBar">
      <form className="text-center">
        <input className="search" type="text" placeholder="Enter a city..." />
        <input className="submit" type="submit" value="Search" />
      </form>
      <WeatherInfo />
    </div>
  );
}
