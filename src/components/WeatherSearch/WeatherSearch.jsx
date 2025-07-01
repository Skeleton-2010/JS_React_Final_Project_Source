import { React, useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { addCity } from "../../redux/actions";

import { fetchCoords } from "../../services/dataSearch";

import "./WeatherSearch.css";

export const WeatherSearch = () => {
  const dispatch = useDispatch();
  const D = new Date();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekNames = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const date = {
    year: D.getFullYear(),
    month: monthNames[D.getMonth()],
    dayWeek: weekNames[D.getDay()],
    dayMonth: D.getDate(),
    hour: D.getHours(),
    minute: D.getMinutes(),
  };


  const handleSearchCity = async (e) => {
    e.preventDefault();
    const form = e.target;
    let city = form.elements.inpCity.value.trim();
    if (city !== "") {
      const loc = await fetchCoords(city);
      if (loc.length) {
        const { lat, lon } = loc[0];
        city = city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();
        dispatch(addCity(city, lat, lon));
      }
    }
  };

  return (
    <div className="weather-search-main">
      <img 
        src={`${process.env.PUBLIC_URL}/img/ForecastLogoBig.png`}
        alt="LOGO" 
        className="search-img" 
      />
      <div className="weather-date">
        <h4 className="weather-date-txt">
          {date.month} {date.year}
        </h4>
        <h4 className="weather-date-txt">
          {date.dayWeek}, {date.dayMonth}th
        </h4>
        <h4 className="weather-date-txt">
          {date.hour}:{date.minute}
        </h4>
      </div>
      <form
        onSubmit={handleSearchCity}
        action=""
        className="weather-search-form"
      >
        <input
          type="text"
          name="inpCity"
          placeholder="Search any city..."
          className="weather-search-inp"
        />
        <button className="weather-search-btn fc-btn">Look up</button>
      </form>
    </div>
  );
};
