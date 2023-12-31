import React from "react";
import { Line } from "react-chartjs-2";
import s from "../../styles/authorizedStyles/CoinsChart.module.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Radio, Select } from "antd";
import ChartStats from "./ChartStats";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const { Option } = Select;

const CoinsChart = ({
  coinHistory,
  currentPrice,
  coinName,
  radioOptions,
  onChangeRadio,
  onChangeSelect,
  coinsData,
  coinIcon,
}) => {
  const coinPrice = [];
  const coinTimestamp = [];
  const coinChange = coinHistory?.data?.change;
  let maxPrice = 0;
  let lowPrice = 0;

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i]?.price);
    const date = new Date(coinHistory.data.history[i].timestamp * 1000);
    coinTimestamp.push(date.toLocaleDateString());
    maxPrice = Math.max(maxPrice, coinHistory?.data?.history[i]?.price);
    lowPrice = Math.min(coinHistory?.data?.history[i]?.price);
  }

  const data = {
    labels: coinTimestamp.reverse(),
    datasets: [
      {
        label: "Price In USD",
        data: coinPrice.reverse(),
        fill: true,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
        pointStyle: false,
        borderWidth: 1,
        tension: 0.2,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          autoSkip: true,
          minRotation: 90,
          display: false,
        },
      },
      y: {
        scaleLabel: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
        position: "top",
      },
    },
  };
  const onChangeChart = (e) => {
    onChangeSelect(e);
  };

  return (
    <div className={s.coinsChart}>
      <ChartStats
        lowPrice={lowPrice}
        maxPrice={maxPrice}
        coinChange={coinChange}
      />
      <div className={s.selectWrapper}>
        <Select
          defaultValue={coinName}
          className={s.selectCoin}
          placeholder="Select Coin"
          onChange={onChangeChart}
        >
          {coinsData.data.coins.map(({ uuid, symbol }) => (
            <Option key={uuid}>{symbol}</Option>
          ))}
        </Select>
        <div className={s.coinPriceWrapper}>
          <img className={s.coinIcon} src={coinIcon} alt="coinIcon" />
          <p className={s.currentPrice}>${currentPrice}</p>
        </div>
      </div>

      <Line data={data} options={options} className={s.lineChart} />
      <Radio.Group
        options={radioOptions}
        onChange={onChangeRadio}
        optionType="button"
        buttonStyle="solid"
        className={s.radioBtnGroup}
        defaultValue={"5y"}
      />
    </div>
  );
};

export default CoinsChart;
