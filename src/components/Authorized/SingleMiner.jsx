import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleMiner } from "../../store/slices/minersSlice";
import s from "../../styles/authorizedStyles/SingleMiner.module.css";
import Loader from "../Loader";
import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";
import { WagmiConfig } from "wagmi";
import { arbitrum, mainnet } from "wagmi/chains";

const projectId = "57bbcf734283acb2f444bf3f60ebe24f";

const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [mainnet, arbitrum];
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

createWeb3Modal({ wagmiConfig, projectId, chains });

const SingleMiner = () => {
  const { id } = useParams();
  const singleMiner = useSelector((state) => state.miners.single);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleMiner(id));
  }, [dispatch, id]);

  if (!singleMiner) return <Loader />;

  return (
    <div className={s.singleMiner}>
      <div className={s.wrapper}>
        <img className={s.img} src={singleMiner[0].img} alt="miner" />
        <div className={`${singleMiner[0].nameClass} ${s.nameWrapper}`}>
          <p className={s.name}>{singleMiner[0].name}</p>
          <span className={s.increase}>{singleMiner[0].increase}</span>
          <p className={s.price}>{singleMiner[0].price}</p>
        </div>
      </div>
      <p className={s.description}>{singleMiner[0].description}</p>
      <div className={s.w3Wrapper}>
        <WagmiConfig config={wagmiConfig}>
          <w3m-button className={s.webModal} />
        </WagmiConfig>
      </div>
    </div>
  );
};

export default SingleMiner;
