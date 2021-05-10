import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function DailyForecast() {
  return (
    <div className="dailyForecast">
      <div className="row">
        <ul className="col">
          <li className="dailyForecast-day">THU</li>
          <li className="dailyForecast-icon">
            <WeatherIcon code="01d" size={40} />
          </li>
          <li className="dailyForecast-temp">
            <span className="dailyForecast-Max">19°</span>
            <span className="dailyForecast-Min"> 15°</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
