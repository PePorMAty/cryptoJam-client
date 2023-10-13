import s from "../../styles/authorizedStyles/BuyMiner.module.css";
import MinerItem from "../../components/Authorized/MinerItem";
import { useSelector } from "react-redux";

const BuyMiner = () => {
  const miners = useSelector((state) => state.miners.minersData);
  console.log(miners);
  return (
    <div className={s.buyMiner}>
      <div className={s.wrapper}>
        {miners.map(
          ({ id, name, increase, description, img, price, nameClass }) => (
            <MinerItem
              key={id}
              name={name}
              increase={increase}
              description={description}
              price={price}
              img={img}
              nameClass={nameClass}
            />
          )
        )}
      </div>
    </div>
  );
};

export default BuyMiner;
