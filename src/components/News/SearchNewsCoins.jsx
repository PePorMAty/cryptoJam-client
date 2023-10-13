import { Col, Select } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoins } from "../../store/slices/coinsSlice";
import s from "../../styles/News.module.css";

const { Option } = Select;

const SearchNewsCoins = ({ count, setNewsCategory }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCoins(count));
  }, [count, dispatch]);

  const { coins } = useSelector((state) => state.coins);

  return (
    <Col span={40} className={s.search}>
      <Select
        /* style={{ width: 200 }} */
        showSearch
        className={s.select}
        placeholder="Select a Crypto"
        optionFilterProp="children"
        onChange={(value) => setNewsCategory(value)}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        <Option value="Cryptocurency">Cryptocurrency</Option>
        {coins?.map((currency) => (
          <Option value={currency.name}>{currency.name}</Option>
        ))}
      </Select>
    </Col>
  );
};

export default SearchNewsCoins;
