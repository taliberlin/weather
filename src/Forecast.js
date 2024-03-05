import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="text-center">
        <div className="forecast-day">Mon</div>
        <img
          className="forecast-icon img-fluid"
          src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
          alt="Partially Cloudy Icon"
        />
        <div className="high-low">
          <span className="high">4°</span>
          <span className="low">-1°</span>
        </div>
      </div>
    </div>
  );
}
