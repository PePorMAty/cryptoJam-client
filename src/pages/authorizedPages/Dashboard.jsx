import React, { useState } from "react";
import millify from "millify";
import CoinsChart from "../../components/Authorized/CoinsChart";
import CoinsAssets from "../../components/Authorized/CoinsAssets";
import TokensInBalance from "../../components/Authorized/TokensInBalance";
import {
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
  useGetCryptosQuery,
} from "../../store/api/cryptoApi";
import s from "../../styles/authorizedStyles/Dashboard.module.css";
import { Select } from "antd";

const radioOptions = [
  { label: "3h", value: "3h" },
  { label: "24h", value: "24h" },
  { label: "7d", value: "7d" },
  { label: "30d", value: "30d" },
  { label: "3m", value: "3m" },
  { label: "1y", value: "1y" },
  { label: "3y", value: "3y" },
  { label: "5y", value: "5y" },
];

const Dashboard = () => {
  /* const coinId = "Qwsogvtv82FCd"; */
  const [timePeriod, setTimePeriod] = useState("5y");
  const [coinId, setCoinId] = useState("Qwsogvtv82FCd");
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
  const cryptoDetails = data?.data?.coin;
  const { data: coinHistory } = useGetCryptoHistoryQuery({
    coinId,
    timePeriod,
  });
  const {
    data: coinsData,
    isFetching: { isFetchingCoins },
  } = useGetCryptosQuery(100);
  const currentPrice = millify(cryptoDetails?.price);

  if (isFetching) return "...Loading";

  if (isFetchingCoins) return "...Loading";

  const onChangeSelect = (e) => {
    setCoinId(e);
  };

  const onChangeRadio = ({ target: { value } }) => {
    setTimePeriod(value);
  };
  const time = ["5", "12"];
  return (
    <div className={s.dashboard}>
      <div className={s.wrapper}>
        <CoinsChart
          coinHistory={coinHistory}
          currentPrice={currentPrice}
          coinName={cryptoDetails.name}
          radioOptions={radioOptions}
          onChangeRadio={onChangeRadio}
          coinsData={coinsData}
          onChangeSelect={onChangeSelect}
        />
        <CoinsAssets />
      </div>
      <TokensInBalance />
    </div>
  );
};

export default Dashboard;

{
}
