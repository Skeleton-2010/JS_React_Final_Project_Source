import { React, useEffect, useState } from "react";
import { fetchWeather } from "../../services/dataSearch";
import "./LocalWeatherDisplay.css";

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { remCity } from "../../redux/actions";

export const LocalWeatherDisplay = ({ city, lat, lon, id }) => {
  const [localWeather, setLocalWeather] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  const handleGetWeather = async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await fetchWeather(lat, lon);
      //console.log(city, lat, lon);
      setLocalWeather(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleRemove = async () => {
    dispatch(remCity(id));
  };

  useEffect(() => {
    handleGetWeather();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="local-weather-display-main">
      <h4>{city}</h4>
      {localWeather !== 0 && !loading && (
        <div className="weather-listing">
          {localWeather.weather.map((c, idx) => (
            <div className="listing-el">
              <img
                src={`/img/${c.icon}.png`}
                alt="Weather"
                className="local-weather-icon"
              />
              <h5>
                {c.main} - {c.description}
              </h5>
            </div>
          ))}
        </div>
      )}
      <div className="weather-buttons">
        <button className="weather-del-btn fc-btn" onClick={handleRemove}>
          Remove location
        </button>
        <Link to={`/weather?city=${city}&lat=${lat}&lon=${lon}`}>
          <button className="weather-del-btn fc-btn">More Info</button>
        </Link>
      </div>
    </div>
  );
};
