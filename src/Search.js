import React from "react";

export default function Search() {
  return (
    <form id="search-form">
      <input
        type="search"
        id="search-bar"
        placeholder="Seach a new city"
        autoComplete="off"
      />
      <input
        className="goButton"
        type="submit"
        value="Change"
        id="submit-button"
      />
      <button id="current-location">
        <i className="fas fa-map-marker-alt"></i>
      </button>
    </form>
  );
}
