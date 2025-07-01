import { rootReducer } from "./reducer";

import { configureStore } from "@reduxjs/toolkit";

import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [],
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const cityStore = configureStore({
  reducer: persistedReducer
});

export const persistor = persistStore(cityStore);
