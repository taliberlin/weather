import React from "react";
import "./ForecastDay.css";
import moment from "moment";

export default function ForecastDay(props) {
    let maxTemp = Math.round(props.forecast.temperature.maximum);
    let minTemp = Math.round(props.forecast.temperature.minimum);
    let icon = props.forecast.condition.icon_url;
    let conditions = props.forecast.condition.description;
    let forecastTimeStamp = props.forecast.time;
    let forecastDate = new Date(forecastTimeStamp * 1000);
    let day = moment(forecastDate).format('ddd');



    return (
     <div className="text-center">
        <div className="forecast-day">{day}</div>
        <img
          className="forecast-icon img-fluid"
          src={icon}
          alt={conditions}
        />
        <div className="high-low">
          <span className="high">{maxTemp}°</span>
          <span className="low">{minTemp}°</span>
        </div>
    </div>
    );
}   