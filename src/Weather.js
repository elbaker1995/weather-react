import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import DailyForecast from "./DailyForecast";
import "./searchBar.css";
import "./popularCities.css";

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
      icon: response.data.weather[0].icon,
      coordinates: response.data.coord,
    });
  }

  function search() {
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0b21be4e9bb48bde61fa22f2bdf11c46&units=metric`;
    axios.get(apiURL).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function handleCityChangeSydney(event) {
    event.preventDefault();
    setCity("sydney");
    search();
  }

  function handleCityChangeTokyo(event) {
    event.preventDefault();
    setCity("Tokyo");
    search();
  }

  function handleCityChangeLondon(event) {
    event.preventDefault();
    setCity("London");
    search();
  }
  function searchCurrentlocation(position) {
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=0b21be4e9bb48bde61fa22f2bdf11c46&units=metric`;
    axios.get(apiURL).then(handleResponse);
  }

  function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchCurrentlocation);
  }

  if (weatherData.ready) {
    return (
      <div>
        <div className="PopularCities">
          <div className="sydney">
            <button id="sydney" onClick={handleCityChangeSydney}>
              <i className="fas fa-globe-asia"></i> SYD{" "}
              <span id="syd-temp"></span>°
            </button>
          </div>
          <div className="tokyo">
            <button id="tokyo" onClick={handleCityChangeTokyo}>
              <i className="fas fa-globe-asia"></i> TYO{" "}
              <span id="tyo-temp"></span>°
            </button>
          </div>
          <div className="london">
            <button id="london" onClick={handleCityChangeLondon}>
              <i className="fas fa-globe-europe"></i> LND{" "}
              <span id="lnd-temp"></span>°
            </button>
          </div>
        </div>
        <form id="search-form" onSubmit={handleSubmit}>
          <input
            type="search"
            id="search-bar"
            placeholder="Seach a new city"
            autoComplete="off"
            onChange={handleCityChange}
          />
          <input className="goButton" type="submit" value="search" />
          <button id="current-location" onClick={getCurrentLocation}>
            <i className="fas fa-map-marker-alt"></i>
          </button>
        </form>
        <WeatherInfo data={weatherData} />
        <DailyForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "loading...";
  }
}
