import React from "react";
import "./WeatherInfo.css";
import Forecast from "./Forecast.js";
import moment from "moment";

export default function WeatherInfo(props) {
  let city = props.weatherData.city;
  let conditions =
    props.weatherData.conditions.slice(0, 1).toUpperCase() +
    props.weatherData.conditions.slice(1, props.weatherData.conditions.length);
  let iconUrl = props.weatherData.iconUrl;
  let temperature = Math.round(props.weatherData.temperature);
  let humidity = Math.round(props.weatherData.humidity);
  let feelsLike = Math.round(props.weatherData.feelsLike);
  let wind = Math.round(props.weatherData.wind);
  let timeStamp = props.weatherData.date;
  let dateInfo = new Date(timeStamp * 1000);
  let time = moment(dateInfo).format("dddd, h:mma");

  return (
    <div className="WeatherInfo">
      <div className="container grid">
        <div className="row">
          <div className="col-md-7 temp-precip-humid-wind">
            <div>
              {" "}
              <img className="icon" src={iconUrl} alt={conditions} />{" "}
            </div>
            <div className="current-temp">{temperature}</div>
            <div className="degree-unit">°C</div>
            <div className="weather-data">
              <ul>
                <li>Feels Like: {feelsLike}°C</li>
                <li>Humidity: {humidity}%</li>
                <li>Wind: {wind} km/h</li>
              </ul>
            </div>
          </div>
          <div className="location-time-description col-md-5">
            <ul>
              <li className="city">{city}</li>

              <li className="conditions">{conditions}</li>
              <li>Last updated:</li>
              <li>{time}</li>
            </ul>
          </div>
        </div>
        <Forecast city={city} />
      </div>
    </div>
  );
}
