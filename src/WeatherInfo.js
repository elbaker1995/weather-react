import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="currentCity">
      <span className="currentCity-time">
        <FormattedDate date={props.data.date} />
      </span>
      <div className="currentCity-mainElements">
        <span className="currentCity-city">{props.data.city}</span>
        <ul className="currentCity-descriptionElement">
          <li>
            <WeatherIcon code={props.data.icon} size={100} />
          </li>
          <li id="description">{props.data.description}</li>
        </ul>
      </div>
      <br />
      <ul className="currentCity-weatherConditons row">
        <li className="temp col-5">
          <WeatherTemperature celcius={props.data.temperature} />
        </li>

        <li className="currentCity-conditon col-4">
          <i className="fas fa-wind subIcon wind"></i>
          <span id="wind-speed"> {Math.round(props.data.wind)}</span>
          <span className="wind-speed-units">km/h</span>
        </li>

        <li className="currentCity-conditon col-3">
          <i className="fas fa-tint subIcon humidity"></i>
          <span id="humidity"> {props.data.humidity}</span>
          <span className="humidity-units">%</span>
        </li>
      </ul>
    </div>
  );
}
