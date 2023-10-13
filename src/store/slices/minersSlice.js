import { createSlice } from "@reduxjs/toolkit";
import bronze from "../../assets/AuthorizedPages/miners/bronze.png";
import silver from "../../assets/AuthorizedPages/miners/silver.png";
import gold from "../../assets/AuthorizedPages/miners/gold.png";
import platinum from "../../assets/AuthorizedPages/miners/platinum.png";
import diamond from "../../assets/AuthorizedPages/miners/diamond.png";
import legendary from "../../assets/AuthorizedPages/miners/legendary.png";
import s from "../../styles/authorizedStyles/BuyMiner.module.css";

const initialState = {
  minersData: [
    {
      id: 1,
      name: "Bronze",
      increase: "x0.5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos",
      img: bronze,
      price: 1222,
      nameClass: s.bronze,
    },
    {
      id: 2,
      name: "Silver",
      increase: "x1.0",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos",
      img: silver,
      price: 1222,
      nameClass: s.silver,
    },
    {
      id: 3,
      name: "Gold",
      increase: "x3.0",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos",
      img: gold,
      price: 1222,
      nameClass: s.gold,
    },
    {
      id: 4,
      name: "Platinum",
      increase: "x12.0",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos",
      img: platinum,
      price: 1222,
      nameClass: s.platinum,
    },
    {
      id: 5,
      name: "Diamond",
      increase: "x38.0",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos",
      img: diamond,
      price: 1222,
      nameClass: s.diamond,
    },
    {
      id: 6,
      name: "Legendary",
      increase: "x86.0",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos",
      img: legendary,
      price: 1222,
      nameClass: s.legendary,
    },
  ],
  single: null,
};

const minersSlice = createSlice({
  name: "miners",
  initialState: initialState,
  reducers: {
    getSingleMiner: (state, { payload }) => {
      const list = state.minersData.filter(({ name }) => name === payload);
      state.single = list;
    },
  },
});

export const { getSingleMiner } = minersSlice.actions;

export default minersSlice.reducer;
