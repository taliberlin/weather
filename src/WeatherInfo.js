import React from "react";
import "./WeatherInfo.css";

export default function WeatherInfo() {
  return (
    <div className="WeatherInfo">
      <div className="container grid">
        <div className="row">
          <div className="col-md temp-precip-humid-wind">
            <span>
              {" "}
              <img
                className="icon img-fluid"
                src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                alt="Sunny Icon"
              />{" "}
            </span>
            <span className="current-temp">3</span>
            <span className="degree-unit">°C | °F </span>
            <span className="weather-data">
              <ul>
                <li>Precipitation: 0%</li>
                <li>Humidity: 46%</li>
                <li>Wind: 27 km/h</li>
              </ul>
            </span>
          </div>
          <div className="location-time-description col-md">
            <ul>
              <li className="city">Vancouver</li>
              <li>Monday, 2:00pm</li>
              <li>Sunny</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
