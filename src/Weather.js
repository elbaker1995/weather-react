import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      icon: `https://cdn1.iconfinder.com/data/icons/hawcons/32/700422-icon-1-cloud-512.png`,
    });
  }

  if (weatherData.ready) {
    return (
      <div>
        <div className="row">
          <h1 className="col-8">{weatherData.city}</h1>
          <div className="col-4">
            {/* <div>
              <img src={weatherData.icon} alt={weatherData.description} />
            </div> */}
            <div id="description">{weatherData.description}</div>
          </div>
        </div>
        <br />
        <ul className="weatherConditons row">
          <li className="temp col-5">
            <i className="fas fa-thermometer-full subIcon temp col-1"></i>
            <span id="temperature">{Math.round(weatherData.temperature)}</span>
            <span className="units">°C</span>
          </li>

          <li className="weatherConditon col-4">
            <i className="fas fa-wind subIcon wind"></i>
            <span id="wind-speed">{weatherData.wind}</span>Km/h
          </li>

          <li className="weatherConditon col-3">
            <i className="fas fa-tint subIcon humidity"></i>
            <span id="humidity">{weatherData.humidity}</span>%
          </li>
        </ul>
      </div>
    );
  } else {
    let apiURL = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=0b21be4e9bb48bde61fa22f2bdf11c46&units=metric`;
    axios.get(apiURL).then(handleResponse);
    return "loading...";
  }
}
