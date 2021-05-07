import React from "react";
import Time from "./Time";
import Weather from "./Weather";

export default function CurrentTemperatureCard() {
  return (
    <div className="card curentCity">
      <div className="card-body row">
        <Time />
        <Weather />
      </div>
    </div>
  );
}
