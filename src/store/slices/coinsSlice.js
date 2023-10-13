import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

export const fetchCoins = createAsyncThunk(
  "coins/fetchCoins",
  async (count) => {
    const res = await axios.get(
      `https://coinranking1.p.rapidapi.com/coins?limit=${count}`,
      {
        headers: {
          "X-RapidAPI-Key":
            "9188310ce1msh0969fadde7e6ad2p109802jsndadc10f256b6",
          "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
        },
      }
    );
    return res.data.data.coins;
  }
);

const coinsSlice = createSlice({
  name: "coins",
  initialState: {
    coins: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCoins.fulfilled, (state, { payload }) => {
      state.coins = payload;
    });
  },
});

export default coinsSlice.reducer;
