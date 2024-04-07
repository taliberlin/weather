import React, {useState, useEffect} from "react";
import axios from "axios";
import "./Forecast.css";
import ForecastDay from "./ForecastDay.js";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecastData, setForecastData] = useState(null);
  let city = props.city;

  useEffect(() => {
    setLoaded(false);
  }, [city]);

  function getForecast(response) {
    setLoaded(true);
    setForecastData(response.data.daily);

  }
  function load() {
  let apiKey = `o599f3bbe3f722tbacc3ebf3032624a0`;
  let units = `metric`;
  let forecastApi = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=${units}`;
  axios.get(forecastApi).then(getForecast);
}

if (loaded) {
  return (
    <div className="Forecast">
      <div className="row">
        {forecastData.map((dailyForecast, index) => {
          if (index < 6) {
          return (   
          <div key={index} className="col">
            <ForecastDay forecast={dailyForecast} />
          </div>
        );
      } else {
        return null;
      }
      })}
      </div>
    </div>
  );
} else {
    load();
}
}