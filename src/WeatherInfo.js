import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="card currentCity">
      <span className="time">
        <FormattedDate date={props.data.date} />
      </span>
      <div className="main-elements">
        <span className="city">{props.data.city}</span>
        <ul className="description">
          <li>
            <WeatherIcon code={props.data.icon} />
          </li>
          <li id="description">{props.data.description}</li>
        </ul>
      </div>
      <br />
      <ul className="weatherConditons row">
        <li className="temp col-5">
          <WeatherTemperature celcius={props.data.temperature} />
        </li>

        <li className="weatherConditon col-4">
          <i className="fas fa-wind subIcon wind"></i>
          <span id="wind-speed">{props.data.wind}</span>Km/h
        </li>

        <li className="weatherConditon col-3">
          <i className="fas fa-tint subIcon humidity"></i>
          <span id="humidity">{props.data.humidity}</span>%
        </li>
      </ul>
    </div>
  );
}
