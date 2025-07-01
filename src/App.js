import { React } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";

import { LocalWeatherDisplay } from "./components/LocalWeatherDisplay/LocalWeatherDisplay";
// import { TemperatureChart } from "./components/TemperatureChart";
import { NewsListing } from "./components/NewsListing/NewsListing";
import { AppHeader } from "./components/AppHeader/AppHeader";
import { WeatherPage } from "./components/WeatherPage/WeatherPage";
import { WeatherSearch } from "./components/WeatherSearch/WeatherSearch";
import { ImageDisplay } from "./components/ImageDisplay/ImageDisplay";
import { SignUpPage } from "./components/SignUpPage/SignUpPage";
import { AppFooter } from "./components/AppFooter/AppFooter";

import { selectAll } from "./redux/selectors";

export const HomePage = () => {
  const cities = useSelector(selectAll);

  return (
    <div className="app-main">
      <AppHeader />
      <WeatherSearch />
      <hr />
      <div className="local-weather-collection">
        <h2>Weather Right Now</h2>
        {/* <TemperatureChart /> */}
        <ul className="local-weathers-list">
          {cities.map(({ city, lat, lon, id }, idx) => (
            <LocalWeatherDisplay city={city} lat={lat} lon={lon} id={id} />
          ))}
        </ul>
      </div>
      <hr />
      <div className="news-collection">
        <h2>News Today</h2>
        <NewsListing />
      </div>
      <hr />
      <div className="image-gallery">
        <h2>Images of Nature</h2>
        <ImageDisplay />
      </div>
      <AppFooter />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/signup" />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/weather" element={<WeatherPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
