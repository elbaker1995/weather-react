import React from "react";
import Time from "./Time";
import Weather from "./Weather";

export default function CurrentTemperatureCard() {
  return (
    <div className="card currentCity">
      <div className="card-body row">
        <Time />
        <Weather defaultCity="New York" />
      </div>
    </div>
  );
}
