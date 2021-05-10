import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function DailyForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    return days[day];
  }

  return (
    <ul className="col">
      <li className="dailyForecast-day">{day()}</li>
      <li className="dailyForecast-icon">
        <WeatherIcon code={props.data.weather[0].icon} size={40} />
      </li>
      <li className="dailyForecast-temp">
        <span className="dailyForecast-Max">{maxTemperature()}</span>
        <span className="dailyForecast-Min">{minTemperature()}</span>
      </li>
    </ul>
  );
}
