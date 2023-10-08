import { configureStore } from "@reduxjs/toolkit";
import { cryptoNewsApi } from "./api/cryptoNewsApi";
import { userApi } from "./api/userApi";
import coinsSlice from "./slices/coinsSlice";
import authSlice from "./slices/authSlice";
import { listenerMiddleware } from "../middleware/auth";
import { cryptoApi } from "./api/cryptoApi";

const store = configureStore({
  reducer: {
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    coins: coinsSlice,
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(cryptoNewsApi.middleware)
      .concat(userApi.middleware)
      .concat(cryptoApi.middleware)
      .prepend(listenerMiddleware.middleware),
});

export default store;
