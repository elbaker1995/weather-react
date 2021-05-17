import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import PopularCities from "./PopularCities";
// import Search from "./Search";
import Weather from "./Weather";

function App() {
  return (
    <div className="container">
      <div className="weatherAppWrapper fixed-top">
        <div className="weatherApp fixed-top">
          {/* <PopularCities /> */}
          <Weather defaultCity="New York" />
          <a
            href="https://github.com/elbaker1995/weather-react"
            target="blank"
            className="icon"
          >
            <i className="fab fa-github-square"></i>
            Open-source code
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
