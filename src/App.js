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
          <footer>
            Coded by{" "}
            <a
              href="https://thirsty-meitner-3450ed.netlify.app/#"
              target="blank"
              className="portfolioLink"
            >
              Eleanor Baker
            </a>{" "}
            <a
              href="https://github.com/elbaker1995/weather-react"
              target="blank"
              className="icon"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/eleanorbaker5595/"
              target="blank"
              className="icon"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://www.instagram.com/elb_5/"
              target="blank"
              className="icon"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://zealous-johnson-734ee0.netlify.app/"
              target="blank"
              className="icon"
            >
              <i class="fas fa-book-open"></i>
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
