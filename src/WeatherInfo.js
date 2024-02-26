import React from "react";
import "./WeatherInfo.css";

export default function WeatherInfo() {
  return (
    <div className="WeatherInfo">
      <div className="container">
        <div className="row">
          <div className="col">icon</div>
          <div className="col">3</div>
          <div className="col">°C | °F</div>
          <div className="col">
            <ul>
              <li>Precipitation: 0%</li>
              <li>Humidity: 46%</li>
              <li>Wind: 27 km/h</li>
            </ul>
          </div>
          <div className="col">
            <ul>
              <li>Vancouver</li>
              <li>Monday, 2:00pm</li>
              <li>Sunny</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
