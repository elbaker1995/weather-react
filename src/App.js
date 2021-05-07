import "./App.css";
import CurrentCity from "./CurrentCity";
import PopularCities from "./PopularCities";
import Search from "./Search";

function App() {
  return (
    <div className="weatherAppWrapper">
      <div className="weatherApp">
        <PopularCities />
        <Search />
        <CurrentCity />
      </div>
    </div>
  );
}

export default App;
