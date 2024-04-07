import React from "react";
import "./WeatherInfo.css";
import Forecast from "./Forecast.js";
import moment from "moment";

export default function WeatherInfo(props) {
  let city = props.weatherData.city;
  let conditions = props.weatherData.conditions.slice(0,1).toUpperCase() + props.weatherData.conditions.slice(1, props.weatherData.conditions.length);
  let iconUrl = props.weatherData.iconUrl;
  let temperature = Math.round(props.weatherData.temperature);
  let humidity = Math.round(props.weatherData.humidity);
  let feelsLike = Math.round(props.weatherData.feelsLike);
  let wind = Math.round(props.weatherData.wind);
  let timeStamp = props.weatherData.date;
  let dateInfo = new Date(timeStamp * 1000);
  let time = moment(dateInfo).format('dddd MMM Do, h:mm a');
 
  return (
    <div className="WeatherInfo">
      <div className="container grid">
        <div className="row">
          <div className="col-md temp-precip-humid-wind">
            <span>
              {" "}
              <img
                className="icon img-fluid"
                src={iconUrl}
                alt= {conditions}
              />{" "}
            </span>
            <span className="current-temp">{temperature}</span>
            <span className="degree-unit">°C</span>
            <span className="weather-data">
              <ul>
                <li>Feels Like: {feelsLike}%</li>
                <li>Humidity: {humidity}%</li>
                <li>Wind: {wind} km/h</li>
              </ul>
            </span>
          </div>
          <div className="location-time-description col-md">
            <ul>
              <li className="city">{city}</li>
              <li>{time}</li>
              <li>{conditions}</li>
            </ul>
          </div>
        </div>
        <Forecast city={city} />
      </div>
    </div>
  );
}
