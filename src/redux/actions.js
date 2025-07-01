import { nanoid } from "@reduxjs/toolkit";

export const addCity = (city, lat, lon) => {
  return {
    type: "contacts/addCity",
    payload: {
      id: nanoid(),
      city,
      lat,
      lon,
    },
  };
};

export const remCity = (id) => {
  return {
    type: "contacts/remCity",
    payload: id,
  };
};

export const setFilter = (q) => {
  return {
    type: "filters/setFilter",
    payload: q,
  };
};
