import { configureStore } from "@reduxjs/toolkit";
import { cryptoNewsApi } from "./cryptoNewsApi";
import coinsSlice from "./slices/coinsSlice";

const store = configureStore({
  reducer: {
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    coins: coinsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cryptoNewsApi.middleware),
});

export default store;
