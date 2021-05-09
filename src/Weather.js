import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      icon: `https://cdn1.iconfinder.com/data/icons/hawcons/32/700422-icon-1-cloud-512.png`,
    });
  }

  function search() {
    let apiURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0b21be4e9bb48bde61fa22f2bdf11c46&units=metric`;
    axios.get(apiURL).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div>
        <form id="search-form" onSubmit={handleSubmit}>
          <input
            type="search"
            id="search-bar"
            placeholder="Seach a new city"
            autoComplete="off"
            onChange={handleCityChange}
          />
          <input className="goButton" type="submit" value="search" />
          <button id="current-location">
            <i className="fas fa-map-marker-alt"></i>
          </button>
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "loading...";
  }
}
