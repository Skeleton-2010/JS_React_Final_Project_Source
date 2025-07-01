import { React, useEffect, useState } from "react";
import { useLocation, useParams, Link } from "react-router-dom";

import { fetchWeather } from "../../services/dataSearch";

import "./WeatherPage.css";

export const WeatherPage = () => {
  const [weatherInfo, setWeatherInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { pathname, search } = useLocation();
  const q = new URLSearchParams(search);

  const handleGetWeather = async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await fetchWeather(q.get("lat"), q.get("lon"));
      console.log(data);
      setWeatherInfo(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetWeather();
  }, []);

  const goodVisibility = weatherInfo?.visibility > 1000;
  const highHumidity = weatherInfo?.main?.humidity > 50;
  const fastWind = weatherInfo?.wind?.humidity > 50;

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="weather-page-main">
      <div className="weather-titles">
        <h1>{q.get("city")}</h1>
        <h5>
          At {q.get("lat")} {q.get("lon")}
        </h5>
      </div>
      <div className="weather-info-main">
        <div className="weather-factor">
          <img
            src={goodVisibility ? "/img/vishi.png" : "/img/vislo.png"}
            alt="visibility"
          />
          <h5>{goodVisibility ? "High Visibility" : "Low Visibility"}</h5>
          <h2>{weatherInfo.visibility}m</h2>
        </div>

        <div className="weather-factor">
          <img src="/img/hum.png" alt="humidity" />
          <h5>{highHumidity ? "High Humidity" : "Low Humidity"}</h5>
          <h2>{weatherInfo.main.humidity}%</h2>
        </div>

        <div className="weather-factor">
          <img
            src={fastWind ? "/img/winhi.png" : "/img/winlo.png"}
            alt="winds"
          />
          <h5>{fastWind ? "Fast Winds" : "Slow Winds"}</h5>
          <h2>{weatherInfo.wind.speed}m/s</h2>
        </div>

        <div className="weather-factor">
          <img src="/img/feels.png" alt="feels" />
          <h5>Feels Like</h5>
          <h2>{weatherInfo.main.feels_like}°C</h2>
        </div>

        <div className="weather-factor">
          <img src="/img/pres.png" alt="pressure" />
          <h5>Pressure</h5>
          <h2>{weatherInfo.main.pressure} Pa</h2>
        </div>
      </div>
      <Link to="/home">
        <button type="button" className="page-back-btn fc-btn">
          Back
        </button>
      </Link>
    </div>
  );
};
