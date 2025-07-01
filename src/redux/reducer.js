import { combineReducers } from "redux";
import { statusFilters } from "./constants";

const citiesInit = [
  { id: "1", city: "Kyiv", lat: 50.4500336, lon: 30.5241361 },
  { id: "2", city: "London", lat: 51.5073219, lon: -0.1276474 },
  { id: "3", city: "Tokyo", lat: 35.6828387, lon: 139.7594549},
];

const contactsReducer = (state = citiesInit, action) => {
  switch (action.type) {
    case "contacts/addCity":
      return [...state, action.payload];
    case "contacts/remCity":
      return state.filter((city) => city.id !== action.payload);
    default:
      return state;
  }
};

const filtersInit = {
  status: statusFilters.all,
  name: statusFilters.name,
};

const filterReducer = (state = filtersInit, action) => {
  switch (action.type) {
    case "filters/setFilter":
      return { status: action.payload };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filterReducer,
});
