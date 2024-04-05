import React, {useState} from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo.js";
import "./SearchBar.css";

export default function SearchBar() {
  const [city, setCity] = useState("Vancouver")
  const [weatherData, setWeatherData] = useState({ready: false});
  function updateCity(event) {
    setCity(event.target.value);
  }
  function handleWeatherData(response) {
    setWeatherData({
    ready: true,
    city: response.data.city,
    conditions: response.data.condition.description,
    iconUrl: response.data.condition.icon_url,
    temperature: response.data.temperature.current,
    humidity: response.data.temperature.humidity,
    feelsLike: response.data.temperature.feels_like,
    wind: response.data.wind.speed,
    date: response.data.time
    })
  }
  function searchCity() {
    let apiKey = `o599f3bbe3f722tbacc3ebf3032624a0`;
    let units = `metric`;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleWeatherData)
  }
  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
  }
  
  if (weatherData.ready) {
  return (
    <div className="SearchBar">
      <form className="text-center">
        <input className="search" type="text" placeholder="Enter a city..." autoFocus onChange={updateCity} />
        <input className="submit" type="submit" value="Search" onClick={handleSubmit}/>
      </form>
      <WeatherInfo weatherData={weatherData} />
    </div>
  );
} else {
  searchCity();
  return(
    "Loading..."
  )
}
}
