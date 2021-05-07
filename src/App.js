import "./App.css";
import CurrentCity from "./CurrentCity";
import PopularCities from "./PopularCities";
import Search from "./Search";

function App() {
  return (
    <div className="container">
      <div className="weatherAppWrapper fixed-top">
        <div className="weatherApp">
          <PopularCities />
          <Search />
          <div className="blurred-box">
            <CurrentCity />
          </div>
          <a
            href="https://github.com/elbaker1995/weather-react"
            target="blank"
            className="icon"
          >
            <i class="fab fa-github-square"></i>
            Open-source code
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
