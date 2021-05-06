import React from "react";
import axios from "axios";

export default function Weather() {
  function handleSubmit(response) {
    alert(
      `The weather in New York is ${Math.round(response.data.main.temp)}°C`
    );
  }

  let apiKey = "0b21be4e9bb48bde61fa22f2bdf11c46";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

  axios.get(apiURL).then(handleSubmit);
  return <h2>Hello from weather</h2>;
}
