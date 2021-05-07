import React from "react";

export default function PopularCities() {
  return (
    <div className="PopularCities">
      <div className="sydney">
        <button id="sydney">
          <i className="fas fa-globe-asia"></i> SYD <span id="syd-temp"></span>°
        </button>
      </div>
      <div className="tokyo">
        <button id="tokyo">
          <i className="fas fa-globe-asia"></i> TYO <span id="tyo-temp"></span>°
        </button>
      </div>
      <div className="london">
        <button id="london">
          <i className="fas fa-globe-europe"></i> LND{" "}
          <span id="lnd-temp"></span>°
        </button>
      </div>
    </div>
  );
}
