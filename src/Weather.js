import React from "react";

export default function Weather() {
  return (
    <div>
      <div className="row">
        <h1 className="col-8">New York</h1>
        <div className="col-4">
          <div id="description">Cloudy</div>
        </div>
      </div>
      <br />
      <ul className="weatherConditons row">
        <li className="temp col-5">
          <i className="fas fa-thermometer-full subIcon temp col-1"></i>
          <span id="temperature">16</span>
          <span className="units">°C</span>
        </li>

        <li className="weatherConditon col-4">
          <i className="fas fa-wind subIcon wind"></i>
          <span id="wind-speed">5</span>Km/h
        </li>

        <li className="weatherConditon col-3">
          <i className="fas fa-tint subIcon humidity"></i>
          <span id="humidity">50</span>%
        </li>
      </ul>
    </div>
  );
}
